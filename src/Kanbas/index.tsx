/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Routes, Route, Navigate } from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard/index";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./style.css";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
import { useEffect, useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import { useSelector } from "react-redux";

export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchCourses = async () => {
   try {
     const courses = await courseClient.fetchAllCourses();
     setCourses(courses);
   } catch (error) {
     console.error(error);
   }
 };

  const fetchAssignments = async () => {
    try {
      const assignments = await courseClient.findAssignmentsForCourse(course.id);
      setAssignments(assignments);
    } catch (error) {
      console.error(error);
    }
  };
  const findAllCourses = async () => {
    try {
    const courses = await userClient.findAllCourses();
    setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCourses();
    fetchAssignments();
  }, [currentUser]);
  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  });
  const addNewCourse = async () => {
    const newCourse = await courseClient.createCourse(course);
    setCourses([ ...courses, newCourse ]);
  };
  const deleteCourse = async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = async () => {
    await courseClient.updateCourse(course);
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
  const [assignments, setAssignments] = useState<any[]>([]);
  const [assignment, setAssignment] = useState<any>({
    _id: "1234", title: "New Assignment", course: "Course",
    available_date: "2024-11-04", due_date: "2023-12-15", description: "New Description",
    point: "5",
  });
  const addNewAssignment = async () => {
    const newAssignment = await courseClient.createAssignmentForCourse(assignment, course.id);
    setAssignments([ ...assignments, newAssignment ]);
  }
  const deleteAssignment = async (assignmentId: any) => {
    const status = await courseClient.deleteAssignment(assignmentId);
    setAssignments(assignments.filter((assignment) => assignment._id !== assignmentId));
  };
  const updateAssignment = () => {
    setAssignments(
      assignments.map((a) => {
        if (a._id === assignment._id) {
          return assignment;
        } else {
          return a;
        }
      })
    );
  };

  return (
    <Session>
    <div id="wd-kanbas">

          <KanbasNavigation />

          <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route path="/Dashboard" 
            element={<ProtectedRoute><Dashboard
              /></ProtectedRoute>} />
          <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} />
            </ProtectedRoute>} />
          <Route path="/Calendar" element={<h1>Calendar</h1>} />
          <Route path="/Inbox" element={<h1>Inbox</h1>} />
        </Routes>
        </div>
    </div>
    </Session>
  );
}
