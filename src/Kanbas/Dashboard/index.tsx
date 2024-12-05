import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import * as client from "../Courses/client";
import * as userClient from "../Account/client";
import { useSelector } from "react-redux";

function Dashboard() {
  const [courses, setCourses] = useState<any[]>([]);
  const [course, setCourse] = useState<any>('');
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchCourses = async () => {
    const courses = await client.fetchAllCourses();
    // const courses = await userClient.findMyCourses();
    setCourses(courses);
  };

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
  const [ showenrollmentPage, setEnrollmentPage ] = useState(true);
  const toggleEnrollments = () => {
    setEnrollmentPage(!showenrollmentPage);
  };

  useEffect(() => {
    fetchCourses();
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
                  
                  <button
                    onClick={() => deleteCourse(course._id)}
                    className="btn btn-danger float-end"
                  >
                    Delete
                  </button>
                  <button className="btn btn-warning me-1 float-end" 
                  onClick={() => setCourse(course)}>Edit</button>
                  <h5 className="card-title">{course.name}</h5>

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