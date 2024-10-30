import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchProfile = () => {
    if (!currentUser) return navigate("/Kanbas/Account/Signin");
    setProfile(currentUser);
  };
  const signout = () => {
    dispatch(setCurrentUser(null));
    navigate("/Kanbas/Account/Signin");
  };
  useEffect(() => { fetchProfile(); }, []);
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      {profile && (
        <div>
      <input id="wd-username" defaultValue={profile.username} placeholder="username" className="form-control mb-2"
        onChange={(e) => setProfile({ ...profile, username:  e.target.value })}/>
      <input id="wd-password" defaultValue={profile.password} placeholder="password" className="form-control mb-2"
             type="password" 
             onChange={(e) => setProfile({ ...profile, password:  e.target.value })}/>
      <input id="wd-firstname" defaultValue={profile.firstName} placeholder="First Name" 
        className="form-control mb-2" onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}/>
      <input id="wd-lastname" defaultValue={profile.lastName} placeholder="Last Name" 
        className="form-control mb-2" onChange={(e) => setProfile({ ...profile, lastName:  e.target.value })}/>
      <input id="wd-dob" defaultValue={profile.dob} type="date" className="form-control mb-2" 
        onChange={(e) => setProfile({ ...profile, dob: e.target.value })}/>
      <input id="wd-email" defaultValue={profile.email} type="email" className="form-control mb-2"
        onChange={ (e) => setProfile({ ...profile, email: e.target.value })}/>
      <select id="wd-role" className="form-control mb-2" onChange={(e) => setProfile({ ...profile, role:  e.target.value })}>
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <button onClick={signout} className="btn btn-danger w-100 mb-2" id="wd-signout-btn">
            Sign out
          </button>
        </div>
      )}
    </div>
);}
