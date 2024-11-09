import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { enrollStudent, unenrollStudent } from "./reducer";

export default function Dashboard(
  { courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; assignments: any[]; assignment: any; 
    setAssignment: (assignment: any) => void; addNewAssignment: () => void;
    deleteAssignment: (assignment: any) => void; updateAssignment: () => void; })
  {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
    const dispatch = useDispatch();
    const [ showenrollmentPage, setEnrollmentPage ] = useState(true);
    const toggleEnrollments = () => {
      setEnrollmentPage(!showenrollmentPage);
    };
    const enrollCourse = (courseId: string) =>
      dispatch(enrollStudent({ user: currentUser._id, course: courseId }));

  const unenrollCourse = (courseId: string) =>
      dispatch(unenrollStudent(enrollments
          .find((enrollment: { user: string, course: string }) => enrollment && enrollment.user === currentUser._id && enrollment.course === courseId)._id))

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

      {/* Faculty header */}
      {currentUser.role === "FACULTY" &&
        <>
        <h5>New Course
            <button className="btn btn-primary float-end"
                    id="wd-add-new-course-click"
                    onClick={addNewCourse} > Add </button>
            <button className="btn btn-warning float-end me-2"
                    onClick={updateCourse} id="wd-update-course-click"> Update </button>
        </h5><br />
              <input defaultValue={course.name} className="form-control mb-2" 
              onChange={(e) => setCourse({ ...course, name: e.target.value }) }/>
            <textarea defaultValue={course.description} className="form-control"
               onChange={(e) => setCourse({ ...course, description: e.target.value }) }/> 
               <hr />
        <h2 id="wd-dashboard-published">Published Courses {courses.length}</h2> <hr />
      </>}

      {/* Student and TA header */}
      {currentUser.role !== "FACULTY" &&
        <><button className="btn btn-primary float-end"
                    id="wd-add-new-course-click"
                    onClick={toggleEnrollments} > Enrollments </button>
          <h2 id="wd-dashboard-published">Courses {courses.length}</h2> <hr />
        </>}


      <div id="wd-dashboard-courses" className="row">
      <div className="row row-cols-1 row-cols-md-5 g-4">
      {courses && 
      (showenrollmentPage ?
      courses.filter((course) =>
        enrollments.some(
          (enrollment: { user: any; course: any; }) =>
            enrollment.user === currentUser._id &&
            enrollment.course === course._id
           )) : courses)
      .map((course) => (
        <div className="wd-dashboard-course col" style={{ width: "300px" }} key={course._id}>
          <div className="card rounded-3 overflow-hidden">
            <Link to={`/Kanbas/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark" >
              <img src={`/images/${course.image}.png`} width="100%" alt="react img" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  {course.name} </h5>
                <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                  {course.description} </p>

                {/* buttons available for faculty */}
                {currentUser.role === "FACULTY" && <>
                  <button className="btn btn-primary"> Go </button>
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
                        unenrollCourse(course._id);
                      }} className="btn btn-danger float-end"
                      id="wd-delete-course-click">
                      Unenroll
                  </button>
                  <button id="wd-edit-course-click"
                    onClick={(event) => {
                      event.preventDefault();
                      enrollCourse(course._id);
                    }}
                    className="btn btn-warning me-2 float-end" >
                    Enroll
                  </button>
                </>}

              </div>
            </Link>
          </div>
        </div>
    ))}
</div>
</div>
</div>);}
