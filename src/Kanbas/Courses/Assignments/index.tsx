/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { BsGripVertical } from "react-icons/bs";
import { FaCaretDown } from "react-icons/fa";
import AssignmentControls from "./AssignmentControls";
import { PiNotePencilDuotone } from "react-icons/pi";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { format } from 'date-fns';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addAssignment, deleteAssignment, setAssignments } from "./reducer";
import * as assignmentsClient from "../client";

export default function Assignments() {
  const { cid } = useParams();
  const [assignmentTitle, setAssignmentTitle] = useState("");
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  const fetchAssignments = async () => {
    const assignments = await assignmentsClient.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };
  const removeAssignment = async (assignmentId: string) => {
    await assignmentsClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);
  const createAssignmentForCourse = async () => {
    if (!cid) return;
    const newAssignment = { name: assignmentTitle, course: cid };
    const assignment = await assignmentsClient.createModuleForCourse(cid, newAssignment);
    dispatch(addAssignment(assignment));
  };

  

    return (
      <div id="wd-assignments">
        <AssignmentControls setAssignmentTitle={setAssignmentTitle} assignmentTitle={assignmentTitle}
          addAssignment={createAssignmentForCourse}/><br /><br />

        <ul id="wd-modules" className="list-group rounded-0">
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="p-3 bg-secondary">
            <h4 className="wd-text-strong"> 
              <BsGripVertical className="me-2 fs-3" />
              <FaCaretDown className="me-2 fs-5"/>
              ASSIGNMENTS
              <ModuleControlButtons />
            </h4>
            </div>
            {assignments
                  .map((assignment: any) => (
                    <ul className="wd-assignments list-group rounded-0">
                    <li className="wd-lesson list-group-item p-3 ps-1">
                    <div className="d-flex mb-3">
                        <div className="p-2">
                          <BsGripVertical className="me-2 fs-3" />
                          <PiNotePencilDuotone className="text-success me-2 fs-3" />
                        </div>
                        <div className="p-2">
                        <a className="wd-assignment-link"
                          href={`#/Kanbas/Courses/${cid}/Assignments/${assignment.number}`}>
                          <h4 key={assignment._id} className="wd-text-strong">
                            {assignment.title}
                          </h4>
                        </a>
                        <div>
                      <span className="text-danger">Multiple Modules</span> | 

                      {assignment.available_date && (new Date(assignment.available_date)) ? (
                        <span>
                          <b> Not Available until </b>
                          {format(new Date(assignment.available_date), "MMMM d 'at' hh:mma") + ' |'}
                        </span>
                      ) : (
                        <span>Invalid Date</span>
                      )}
                      <br />
                      <span className="wd-text-strong">Due </span> 
                      {assignment.available_date && (new Date(assignment.available_date)) ? (
                        <span>
                          {format(new Date(assignment.due_date), "MMMM d 'at' hh:mma") + ' | '}
                        </span>
                      ) : (
                        <span>Invalid Date</span>
                      )}
                      {assignment.points} pts
                    </div>
                    </div>
                  
                    <div className="ms-auto p-2">
                      <LessonControlButtons assignmentId={assignment._id} 
                      deleteAssignment={(assignmenteId) => removeAssignment(assignmenteId)}/>
                    </div>
                  </div>
                  </li>
                  </ul>
              ))
            }
          </li>
        </ul>
      </div>
  );}
  