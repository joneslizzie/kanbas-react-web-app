import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import * as client from "../Courses/client";
import * as userClient from "../Account/client";
import { useSelector } from "react-redux";
// import { enrollStudent, unenrollStudent } from "./reducer";

function Dashboard() {
  const [courses, setCourses] = useState<any[]>([]);
  const [course, setCourse] = useState<any>('');
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  //const dispatch = useDispatch();
  //const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const fetchCourses = async () => {
    const courses = await client.fetchAllCourses();
    // const courses = await userClient.findMyCourses();
    setCourses(courses);
  };
  const findAllCourses = async () => {
    const courses = await client.fetchAllCourses();
    setCourses(courses);
  }
  const enrollCourse = async (courseId: string) => {
    await userClient.enrollInCourse(courseId);
    fetchCourses();
  }
  const unenrollCourse = async (courseId: string) => {
    await userClient.unenrollFromCourse(courseId);
    fetchCourses();
  } 

  /*  const enrollCourse = (courseId: string) =>
      dispatch(enrollStudent({ user: currentUser._id, course: courseId }));

  const unenrollCourse = (courseId: string) =>
      dispatch(unenrollStudent(enrollments
          .find((enrollment: { user: string, course: string }) => enrollment && enrollment.user === currentUser._id && enrollment.course === courseId)._id));
*/
  const deleteCourse = async (courseId: string) => {
    try {
      await client.deleteCourse(courseId);
      setCourses(courses.filter((course) => course._id !== courseId));
    } catch (error) {
      console.log(error);
    }
  };

  const updateCourse = async () => {
    try {
      await client.updateCourse(course);
      setCourses(courses.map((c) => (c._id === course._id ? course : c)));
    } catch (error) {
      console.log(error);
    }
  };

  const addCourse = async () => {
    const newCourse = await client.createCourse(course);
    setCourses([newCourse, ...courses]);
  };
  const [ showenrollmentPage, setShowenrollmentPage ] = useState(true);
  const toggleEnrollments = () => {
    setShowenrollmentPage(!showenrollmentPage);
  };

  useEffect(() => {
    if(showenrollmentPage) {
      findAllCourses();
    } else {
      fetchCourses();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
          </button><button onClick={addCourse} className="btn btn-success">
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
                <img src={`/images/${course.image}.png`} className="card-img-top" alt="..." />
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