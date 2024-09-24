import Signin from "./Signin";
import Profile from "./Profile";
import Signup from "./Signup";
import AccountNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router";

export default function Account() {
  return (
    <div id="wd-account-screen">
      <h2>Account</h2>
      <table>
        <tr>
          <td valign="top">
            <AccountNavigation />
          </td>
          <td valign="top">
            <Routes>
                <Route path="/" element={<Navigate to="/Kanbas/Account/Signin" />} />
                <Route path="/Signin" element={<Signin />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Signup" element={<Signup />} />
            </Routes>
          </td>
        </tr> <br /><br /><br />
        <tfoot>
          <td colSpan={2} valign="bottom" align="left">
            <h5>Elizabeth Jones <br /> Class: Tuesdays 6pm-9:20pm</h5>
          </td>
        </tfoot>
      </table>
    </div>
  );
}
