import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import { findUsersForCourse } from "./client";
import { useEffect, useState } from "react";

export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  // const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  const [people, setPeople] = useState<any[]>([]);

  useEffect(() => {
    const fetchPeople = async () => {
        if (cid) {
          const users = await findUsersForCourse(cid);
          setPeople(users);
      }
    };
    fetchPeople();
    }, []);

    return (
      <div id="wd-courses">
        <h2  className="text-danger"> 
          <FaAlignJustify className="me-4 fs-4 mb-1" />
          {cid} &gt; {pathname.split("/")[4]}</h2>
        <hr />
        <div className="d-flex">
          <div className="d-none d-md-block">
            <CoursesNavigation />
          </div>
          <div className="flex-fill">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={< Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={< Assignments />} />
              <Route path="Assignments/:aid" element={<AssignmentEditor />} />
              <Route path="People" element={<PeopleTable users={people} />} />
            </Routes>
          </div>
        </div>
      </div>
  );}
  