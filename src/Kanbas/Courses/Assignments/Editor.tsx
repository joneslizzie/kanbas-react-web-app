import { useParams } from "react-router-dom";
import AssignEditor from "./AssignEditor";
import SubmissionEditor from "./SubmissionEditor"
import * as db from "../../Database";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import * as coursesClient from "../client";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const dispatch = useDispatch();
  const assignment = db.assignments.find((assignment) => assignment._id === aid);
  
  const [title, setTitle] = useState(assignment?.title || 'new');
  const [description, setDescription] = useState(assignment?.description || 'New Assignment Description');
  const [points, setPoints] = useState(assignment?.points || 0);
  const [group, setGroup] = useState("ASSIGNMENTS");
  const [gradeDisplay, setGradeDisplay] = useState("PERCENTAGE");
  const handleSave = async () => {
    const newAssignment = {
      number: aid,
      course: cid,
      title,
      description,
      points,
      group,
      gradeDisplay
    };

    if (aid === "A000") {
      if (!cid) return;
      const assignment = await coursesClient.createAssignmentForCourse(
        cid,
        newAssignment
      );
      dispatch(addAssignment(assignment));
    } else {
      const updatedAssignment = {
        ...assignment,
        ...newAssignment,
      };
      await coursesClient.updateAssignment(updatedAssignment);
      dispatch(updateAssignment(updatedAssignment));
    }

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
                onClick={handleSave}>Save</button>
              </div>
    </div>
);}
  