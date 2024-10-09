import { Link } from "react-router-dom";
import { PiNotePencilDuotone } from "react-icons/pi";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
      <div className="row row-cols-1 row-cols-md-5 g-4">

        <div className="wd-dashboard-course col" style={{ width: "270px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
              <img src="/images/swe.jpg" width={"100%"} height={160} alt="react" />
                <div  className="card-body">
                <h5  className="wd-dashboard-course-title card-title">
                  CS1234 React JS
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
                </p>
                <button  className="btn btn-primary" 
                onClick={() => window.open("/#/Kanbas/Courses/1234/Home")} >
                  <PiNotePencilDuotone />
                </button>
                </div>
                </Link>
          </div>
        </div>
        


        <div className="wd-dashboard-course col" style={{ width: "270px " }}>
          <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1001/home">
              <img src="/images/architecture.png" width={"100%"} height={160} alt="architecture" />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  ARCH1001
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Intro to Architecture
                </p>
                <button  className="btn btn-primary"
                onClick={() => window.open("/#/Kanbas/Courses/1234/Home")}> 
                  <PiNotePencilDuotone />
                </button>
              </div>
              </Link>              
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "270px " }}>
          <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/3000/home">
              <img src="/images/number-theory.png" width={"100%"} height={160} alt="number-theory"/>
                <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  MATH3000
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Number Theory
                </p>
                <button className="btn btn-primary"
                onClick={() => window.open("/#/Kanbas/Courses/1234/Home")}>
                  <PiNotePencilDuotone />
                </button>
                </div>
                </Link>
            </div>
        </div>


        <div className="wd-dashboard-course col" style={{ width: "270px " }}>
          <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/4500/home">
              <img src="/images/write.png" width={"100%"} height={160} alt="write" />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  ENGW4500
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Advanced Writing
                </p>
                <button className="btn btn-primary"
                onClick={() => window.open("/#/Kanbas/Courses/1234/Home")}>
                  <PiNotePencilDuotone />
                </button>
              </div>
            </Link>
            </div>
        </div>


        <div className="wd-dashboard-course col" style={{ width: "270px " }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/5001/home">
                <img src="/images/cryptography.png" width={"100%"} height={160} alt="cryptography" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    MATH5001
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Cryptography
                  </p>
                  <button className="btn btn-primary"
                  onClick={() => window.open("/#/Kanbas/Courses/1234/Home")}> 
                    <PiNotePencilDuotone />
                  </button>
            </div>
            </Link>
            </div>
        </div>


        <div className="wd-dashboard-course col" style={{ width: "270px " }}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/5543/home">
              <img src="/images/web-dev.png" width={"100%"} height={160} alt="web-dev" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5543
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Web Development
                  </p>
                  <button className="btn btn-primary"
                  onClick={() => window.open("/#/Kanbas/Courses/1234/Home")}>
                    <PiNotePencilDuotone />
                  </button>
                </div>
                </Link>
              </div>
        </div>


        <div className="wd-dashboard-course col" style={{ width: "270px " }}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/2200/home">
              <img src="/images/speak.jpeg" width={"100%"} height={160} alt="speak"/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    COMM2200
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Public Speaking
                  </p>
                  <button className="btn btn-primary"
                  onClick={() => window.open("/#/Kanbas/Courses/1234/Home")}>
                    <PiNotePencilDuotone />
                  </button>
                </div>
                </Link>
          </div>
      </div>

    </div>
  </div>
  </div>
);}
