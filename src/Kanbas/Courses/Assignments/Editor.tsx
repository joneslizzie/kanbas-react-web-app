/* eslint-disable @typescript-eslint/no-unused-vars */
import { useParams } from "react-router-dom";
import AssignEditor from "./AssignEditor";
import SubmissionEditor from "./SubmissionEditor"
import * as db from "../../Database";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import * as assignmentsClient from "../client";
import { setAssignments } from "../Assignments/reducer";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const dispatch = useDispatch();
  const { assignment } = useSelector((state: any) => state.assignmentReducer);

  const fetchAssignment = async () => {
    try {
      const assignment = await assignmentsClient.findAssignmentsForCourse(cid as string);
      if(!assignment) {
        setAssignments('');
      } else {
        dispatch(setAssignments(assignment));
      }
    } catch (error) {
      console.log('new assignment');
    }
  };
  
  const [title, setTitle] = useState(assignment?.title || '');
  const [description, setDescription] = useState(assignment?.description || 'New Assignment Description');
  const [points, setPoints] = useState(assignment?.points || 0);
  const [group, setGroup] = useState("ASSIGNMENTS");
  const [gradeDisplay, setGradeDisplay] = useState("PERCENTAGE");
  const handleSave = async () => {
    const newAssignment = {
      _id: title,
      course: cid,
      title,
      description,
      points,
      group,
      gradeDisplay
    };

    dispatch(addAssignment(newAssignment));
    window.location.href = `#/Kanbas/Courses/${cid}/Assignments`;
  };
  const saveAssignment = async (assignment: any) => {
    await assignmentsClient.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
    // 
    window.location.href = `#/Kanbas/Courses/${cid}/Assignments`;
  };


    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name" >
            {assignment?.title || 'Assignment Name'}
        </label><br />
        <input id="wd-name" placeholder={`${aid}`} style={{width: '100%'}} 
        onChange={(a) => setTitle(a.target.value)}/><br /><br />
        <textarea
            id="wd-description"
            className="form-control me-1 text-start"
            style={{ width: '100%' }}
            value={description}
            onChange={(a) => setDescription(a.target.value)}
            placeholder="New Assignment Description"
        />


        <br /><br />
        <div className="d-flex justify-content-evenly">

          <div className="p-2">
            <div className="d-flex align-items-stretch justify-content-end">
              <div className="p-2">
                  <label htmlFor="wd-points">Points</label>
                  </div>
                <div className="p-2 flex-shrink-1">
                  <input id="wd-points" placeholder={`${assignment?.points || "0"}`}  
                  className="form-control mb-3 me-2" style={{width: '375px'}}
                  onChange={(a) => setPoints(a.target.value)}/>
            </div>
          </div>

          <div className="p-2">
            <div className="d-flex align-items-stretch justify-content-end">
              <div className="p-2">
                <label htmlFor="wd-group">Assignment Group</label>
              </div>
              <div className="p-2 flex-shrink-1">
              <select id="wd-group"  className="form-select mb- d-flex justify-content-end"  
                style={{width: '375px'}} onChange={(a) => setGroup(a.target.value)}>
                  <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                  <option value="OTHER">OTHER</option>
              </select>
              </div>
            </div>
          </div>

          <div className="p-2">
            <div className="d-flex align-items-stretch justify-content-end">
              <div className="p-2">
                <label htmlFor="wd-display-grade-as">Display Grade as</label>
              </div>
              <div className="p-2 flex-shrink-1">
              <select id="wd-display-grade-as"  className="form-select mb-2" 
              style={{width: '375px'}} onChange={(a) => setGradeDisplay(a.target.value)}>
                  <option selected value="PERCENTAGE">Percentage</option>
                  <option value="NUMBER">Number</option>
                  <option value="Letter">Letter</option>
              </select>
              </div>
            </div>
          </div>
          <div className="p-2">
            <SubmissionEditor />
          </div>
          <div className="p-2">
            <AssignEditor />
          </div>

          
        
        </div>
        </div>

        <hr />
              <br />
              <div className="d-flex justify-content-end">
                <button id="wd-cancel" className="btn btn-secondary w-30 me-1" 
                onClick={() => {window.location.href = `#/Kanbas/Courses/${cid}/Assignments`}}>Cancel</button> 
                <button id="wd-save" className="btn btn-danger w-30"
                onClick={saveAssignment}>Save</button>
              </div>
    </div>
);}
  