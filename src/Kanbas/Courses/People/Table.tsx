import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
  return (
    <div id="wd-people-table">
      <table className="table table-striped">
        <thead>
          <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th>
          <th>Last Activity</th><th>Total Activity</th></tr>
        </thead>
        <tbody>
          <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Tony</span>{" "}
              <span className="wd-last-name">Stark</span></td>
                <td className="wd-login-id">001234561S</td>
                <td className="wd-section">S101</td>
                <td className="wd-role">STUDENT</td>
                <td className="wd-last-activity">2020-10-01</td>
                <td className="wd-total-activity">10:21:32</td> </tr>
                <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Jacob</span>{" "}
              <span className="wd-last-name">Gottesman</span></td>
                <td className="wd-login-id">0012845096</td>
                <td className="wd-section">S101</td>
                <td className="wd-role">STUDENT</td>
                <td className="wd-last-activity">2024-10-06</td>
                <td className="wd-total-activity">08:21:00</td> </tr>
                <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Lizzie</span>{" "}
              <span className="wd-last-name">Jones</span></td>
                <td className="wd-login-id">0009345132</td>
                <td className="wd-section">S101</td>
                <td className="wd-role">PROFESSOR</td>
                <td className="wd-last-activity">2024-10-08</td>
                <td className="wd-total-activity">12:01:43</td> </tr>
                <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Emily</span>{" "}
              <span className="wd-last-name">Devany</span></td>
                <td className="wd-login-id">003214429S</td>
                <td className="wd-section">S102</td>
                <td className="wd-role">TA</td>
                <td className="wd-last-activity">2020-08-02</td>
                <td className="wd-total-activity">07:15:11</td> </tr>
                <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Megan</span>{" "}
              <span className="wd-last-name">Jones</span></td>
                <td className="wd-login-id">001123461S</td>
                <td className="wd-section">S102</td>
                <td className="wd-role">STUDENT</td>
                <td className="wd-last-activity">2023-12-08</td>
                <td className="wd-total-activity">16:39:57</td> </tr>
          {/* Add at least 3 more users such as Bruce Wayne, Steve Rogers, and Natasha Romanoff */}
        </tbody>
      </table>
    </div> );}