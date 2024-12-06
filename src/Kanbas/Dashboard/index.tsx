import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import * as client from "../Courses/client";
import * as userClient from "../Account/client";
import { useDispatch, useSelector } from "react-redux";
import { enrollStudent, unenrollStudent } from "./reducer";

function Dashboard({courses, course, setCourse, addNewCourse, deleteCourse, updateCourse, enrolling, setEnrolling, updateEnrollment}:
  {   courses: any[];
    course: any;
    setCourse: (course: any) => void;
    addNewCourse: () => void;
    deleteCourse: (course: any) => void;
    updateCourse: () => void; enrolling: boolean; setEnrolling: (enrolling: boolean) => void;
    updateEnrollment: (courseId: string, enrolled: boolean) => void;}
) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const [ showenrollmentPage, setShowenrollmentPage ] = useState(true);
  const toggleEnrollments = () => {
    setShowenrollmentPage(!showenrollmentPage);
  };


  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      {currentUser.role === "FACULTY" &&
      <><input
          type="text"
          placeholder="Course Name"
          value={course.name}
          onChange={(e) => setCourse({ ...course, name: e.target.value })} /><button onClick={updateCourse} className="btn btn-success">
            Update
          </button><button onClick={addNewCourse} className="btn btn-success">
            Add
          </button></>}

      {/* Student and TA header */}
      {currentUser.role !== "FACULTY" &&
        <><button className="btn btn-primary float-end"
                    id="wd-add-new-course-click"
                    onClick={toggleEnrollments} > Enrollments </button>
          <h2 id="wd-dashboard-published">Courses {courses.length}</h2> <hr />
        </>}

      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course, index) => (
            <div className="col" style={{ width: 300 }}>
              <div className="card">
                <img src={`/images/${course.number}.png`} className="card-img-top" alt="..." />
                <div className="card-body">
                  
                  {/* buttons available for faculty */}
                {currentUser.role === "FACULTY" && <>
                  <button onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }} className="btn btn-danger float-end"
                      id="wd-delete-course-click">
                      Delete
                  </button>
                  <button id="wd-edit-course-click"
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}
                    className="btn btn-warning me-2 float-end" >
                    Edit
                  </button></>}

                {/* buttons for other users */}
                {currentUser.role !== "FACULTY" && <>
                  <button className="btn btn-primary"> Go </button>
                  <button onClick={(event) => {
                        event.preventDefault();
                        updateEnrollment(course._id, !course.enrolled);
                      }} className="btn btn-danger float-end"
                      id="wd-delete-course-click">
                      Unenroll
                  </button>
                  <button id="wd-edit-course-click"
                    onClick={(event) => {
                      event.preventDefault();
                      updateEnrollment(course._id, !course.enrolled);
                    }}
                    className="btn btn-warning me-2 float-end" >
                    Enroll
                  </button>
                </>}

                  <Link
                    key={course._id}
                    to={`/Kanbas/Courses/${course._id}`}
                    className="btn btn-primary"
                  >
                    {course.name}
                  </Link>
                  <p className="card-text">
                    {course.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
