import { HiOutlineXMark } from "react-icons/hi2";
import { useParams } from "react-router-dom";
import * as db from "/Users/jones/2024/fall/webdev/kanbas-react-web-app/src/Kanbas/Database";
import { format } from 'date-fns';
import { FaCalendarAlt } from "react-icons/fa";

export default function AssignEditor() {
    const { aid } = useParams();
    const assignment = db.assignments.find((assignment) => assignment._id === aid);
    console.log(assignment);
    return (
        <div className="d-flex align-items-stretch mb-3 justify-content-end">
            <div className="p-2">
                <label htmlFor="wd-assign-to">Assign to </label>
            </div>

            <div className="btn btn-md btn-editor p-2 me-1 text-start">
                <div className="container">
                <div className="input-group mb-2">
                    <input id="wd-assign-to" className="form-control mb-2" 
                    value="Everyone" />
                    <span className="input-group-text bg-white mb-2">
                        <HiOutlineXMark />
                    </span>
                </div>
                <label htmlFor="wd-due-date">Due</label>
                <div className="input-group mb-2">
                    <input id="wd-due-date"
                    value={assignment && assignment.due_date 
                        ? format(new Date(assignment.due_date), "MMMM d ',' yyyy ',' hh:mma") 
                        : ''} className="form-control mb-2"/>
                    <span className="input-group-text bg-white mb-2">
                        <FaCalendarAlt />
                    </span>
                </div>
                
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="wd-available-from">Available from</label>
                        </div>
                        <div className="col-6">
                            <label htmlFor="wd-available-until">Until</label>
                        </div>
                    </div>
                    <div className="row" style={{ maxWidth: '360px'}}>
                        <div className="col-6">
                        <div className="input-group mb-2 col-6">
                            <input id="wd-available-from"
                            value={assignment && assignment.available_date 
                                ? format(new Date(assignment.available_date), "MMMM d ',' yyyy ',' hh:mma") 
                                : ''} className="form-control mb-2"/>
                            <span className="input-group-text bg-white mb-2">
                                <FaCalendarAlt />
                            </span>
                        </div>
                        </div>
                        <div className="col-6">
                        <div className="input-group mb-2 col-6">
                            <input id="wd-available-until"
                            value={''} className="form-control mb-2"/>
                            <span className="input-group-text bg-white mb-2">
                                <FaCalendarAlt />
                            </span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}