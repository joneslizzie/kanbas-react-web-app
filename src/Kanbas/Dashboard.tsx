import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/swe.jpg" width={200} alt="react" />
            
              <h5>
                 CS1234 React JS
              </h5>
              </Link>
              <div>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button onClick={() => window.open("/#/Kanbas/Courses/1234/Home")} > Go </button>
            </div>
        </div>

        <div className="wd-dashboard-course">
        <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1001/home">
            <img src="/images/architecture.png" width={200} alt="architecture" />
              <h5>
                 ARCH1001
              </h5>
              </Link>
              <div>
              <p className="wd-dashboard-course-title">
                Intro to Architecture
              </p>
              <button onClick={() => window.open("/#/Kanbas/Courses/1234/Home")}> Go </button>
            </div>
      </div>

      <div className="wd-dashboard-course">
        <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/3000/home">
            <img src="/images/number-theory.png" width={200} alt="number-theory"/>
              <h5>
                 MATH3000
              </h5>
              </Link>
              <div>
              <p className="wd-dashboard-course-title">
                Number Theory
              </p>
              <button onClick={() => window.open("/#/Kanbas/Courses/1234/Home")}> Go </button>
            </div>

      </div>

      <div className="wd-dashboard-course">
        <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/4500/home">
            <img src="/images/write.png" width={200} alt="write" />
              <h5>
                 ENGW4500
              </h5>
              </Link>
              <div>
              <p className="wd-dashboard-course-title">
                Advanced Writing
              </p>
              <button onClick={() => window.open("/#/Kanbas/Courses/1234/Home")}> Go </button>
            </div>
      </div>

      <div className="wd-dashboard-course">
        <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/5001/home">
            <img src="/images/cryptography.png" width={200} alt="cryptography" />
              <h5>
                 MATH5001
              </h5>
              </Link>
              <div>
              <p className="wd-dashboard-course-title">
                Cryptography
              </p>
              <button onClick={() => window.open("/#/Kanbas/Courses/1234/Home")}> Go </button>
            </div>
      </div>

      <div className="wd-dashboard-course">
        <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/5543/home">
            <img src="/images/web-dev.png" width={200} alt="web-dev" />
              <h5>
                 CS5543
              </h5>
              </Link>
              <div>
              <p className="wd-dashboard-course-title">
                Web Development
              </p>
              <button onClick={() => window.open("/#/Kanbas/Courses/1234/Home")}> Go </button>
            </div>
      </div>

      <div className="wd-dashboard-course">
        <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/2200/home">
            <img src="/images/speak.jpeg" width={200} alt="speak"/>
              <h5>
                 COMM2200
              </h5>
              </Link>
              <div>
              <p className="wd-dashboard-course-title">
                Public Speaking
              </p>
              <button onClick={() => window.open("/#/Kanbas/Courses/1234/Home")}> Go </button>
            </div>
      </div>
      </div>
    </div> );}
