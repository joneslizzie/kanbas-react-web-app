import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();
  
  return (
    <div id="wd-account-navigation"  className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const path = link === "Profile" ? "/Kanbas/Account/Profile" : 
          link === "Signin" ? "/Kanbas/Account/Signin" : "/Kanbas/Account/Signup";
        return (
          <Link
            key={link}
            to={path}
            id={`wd-${link.toLowerCase()}-link`}
            className={`list-group-item border border-0 
              ${pathname.includes(link) ? "active text-danger" : "text-black"}`}
          >
            {link}
          </Link>
        );
      })}
    {/*}
      <Link to={`/Kanbas/Account/Signin`}  id="wd-signin-link"
        className={`list-group-item border border-0 
       ${pathname.includes("Signin") ? "active text-danger" : "text-black"}`}> Signin  </Link>
      <Link to={`/Kanbas/Account/Signup`} id="wd-signup-link"
        className={`list-group-item text-danger border border-0
        ${pathname.includes("Signup") ? "active text-danger" : "text-black"}`}> Signup  </Link>
      <Link to={`/Kanbas/Account/Profile`} id="wd-profile-link" 
        className={`list-group-item text-danger border border-0
          ${pathname.includes("Profile") ? "active text-danger" : "text-black"}`}> Profile </Link>*/}
    </div>
);}
