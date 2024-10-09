import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";

export default function ModuleControlButtons () {
  return (
    <div id="wd-assignments-controls" className="text-nowrap float-end">
        <div id="wd-assignments-weight" className="btn btn-md btn-assignment me-1">
        40% of Total
        </div>
        <FaPlus className="fs-5 me-1"/>
        <IoEllipsisVertical className="fs-5"/>
    </div>
);}