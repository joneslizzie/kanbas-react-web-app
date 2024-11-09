import { Routes, Route, Navigate } from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./style.css";
import * as db from "./Database";
import { useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";

export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  });
  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
  };
  const deleteCourse = (courseId: any) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  const [assignments, setAssignments] = useState<any[]>(db.assignments);
  const [assignment, setAssignment] = useState<any>({
    _id: "1234", title: "New Assignment", course: "Course",
    available_date: "2024-11-04", due_date: "2023-12-15", description: "New Description",
    point: "5",
  });
  const addNewAssignment = () => {
    setAssignments([...assignments, { ...assignments, _id: new Date().getTime().toString() }]);
  }
  const deleteAssignment = (assignmentId: any) => {
    setAssignment(assignments.filter((assignment) => assignment._id !== assignmentId));
  };
  const updateAssignment = () => {
    setAssignments(
      courses.map((a) => {
        if (a._id === assignment._id) {
          return assignment;
        } else {
          return a;
        }
      })
    );
  };

  return (
    <div id="wd-kanbas">

          <KanbasNavigation />

          <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route path="/Dashboard" 
            element={<ProtectedRoute><Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}
              assignments={assignments}
              assignment={assignment}
              setAssignment={setAssignment}
              addNewAssignment={addNewAssignment}
              deleteAssignment={deleteAssignment}
              updateAssignment={updateAssignment}
              /></ProtectedRoute>} />
          <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} />
            </ProtectedRoute>} />
          <Route path="/Calendar" element={<h1>Calendar</h1>} />
          <Route path="/Inbox" element={<h1>Inbox</h1>} />
        </Routes>
        </div>
    </div>
  );
}
