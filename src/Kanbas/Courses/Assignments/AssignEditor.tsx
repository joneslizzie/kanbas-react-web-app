import { HiOutlineXMark } from "react-icons/hi2";

export default function AssignEditor() {
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
                <input type="date"
                    id="wd-due-date"
                    value="2024-05-13" className="form-control mb-2"/>
                
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="wd-available-from">Available from</label>
                        </div>
                        <div className="col-6">
                            <label htmlFor="wd-available-until">Until</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <input type="date"
                            id="wd-available-from"
                            value="2024-05-06" className="form-control mb-2"/>
                        </div>
                        <div className="col-6">
                            <input type="date"
                            id="wd-available-until"
                            value="2024-05-20" className="form-control mb-2"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}