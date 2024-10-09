import { FaPlus } from "react-icons/fa6";
import MagnifyingGlass from "./MagnifyingGlass";

export default function AssignmentControls () {
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
        <button id="wd-add-assignments-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="fs-5"/> Assignment
        </button>
      </div>
    </div>
);}