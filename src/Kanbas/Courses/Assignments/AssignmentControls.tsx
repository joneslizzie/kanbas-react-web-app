import { FaPlus } from "react-icons/fa6";
import MagnifyingGlass from "./MagnifyingGlass";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function AssignmentControls (
  { assignmentTitle, setAssignmentTitle, addAssignment }:
  { assignmentTitle: string; setAssignmentTitle: (title: string) => void; addAssignment: () => void; }
) 
  
{

  const location = useLocation();
  return (
    <div id="wd-assignments-controls" className="d-flex text-nowrap">
      <div className="p-2 flex-grow-1">
        <MagnifyingGlass />
      </div>
      <div className="p-2">
        <button id="wd-add-groups-btn" className="btn btn-lg btn-secondary me-1 float-end">
        <FaPlus className="fs-5"/> Group
        </button>
      </div>
      <div className="p-2">
        <Link to={`${location.pathname}/A000`}>
          <button id="wd-add-assignments-btn" className="btn btn-lg btn-danger me-1 float-end">
            <FaPlus className="fs-5"/> Assignment 
          </button>
        </Link>
      </div>
    </div>
);}