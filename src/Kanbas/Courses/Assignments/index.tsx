import { BsGripVertical } from "react-icons/bs";
import { FaCaretDown } from "react-icons/fa";
import AssignmentControls from "./AssignmentControls";
import { PiNotePencilDuotone } from "react-icons/pi";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";

export default function Assignments() {
    return (
      <div id="wd-assignments">
        <AssignmentControls /><br /><br />

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
            <ul className="wd-assignments list-group rounded-0">
              <li className="wd-lesson list-group-item p-3 ps-1">
                <div className="d-flex mb-3">
                  <div className="p-2">
                    <BsGripVertical className="me-2 fs-3" />
                    <PiNotePencilDuotone className="text-success me-2 fs-3" />
                  </div>
                  <div className="p-2">
                    <a className="wd-assignment-link"
                        href="#/Kanbas/Courses/1234/Assignments/123">
                          <h4 className="wd-text-strong">A1</h4>
                    </a>
                    <div>
                      <span className="text-danger">Multiple Modules</span> | 
                      <span className="wd-text-strong"> Not available until </span>
                        May 6 at 12:00am |
                      <br />
                      <span className="wd-text-strong">Due</span> May 13 at 11:59pm | 100 pts
                    </div>
                  </div>
                  <div className="ms-auto p-2">
                    <LessonControlButtons />
                  </div>
                </div>
              </li>
            </ul>
            <ul className="wd-assignments list-group rounded-0">
              <li className="wd-lesson  list-group-item p-3 ps-1">
                <div className="d-flex mb-3">
                    <div className="p-2">
                      <BsGripVertical className="me-2 fs-3" />
                      <PiNotePencilDuotone className="text-success me-2 fs-3" />
                    </div>
                    <div className="p-2">
                      <a className="wd-assignment-link"
                          href="#/Kanbas/Courses/1234/Assignments/123">
                          <h4 className="wd-text-strong">A2</h4>
                      </a>
                      <div>
                        <span className="text-danger">Multiple Modules</span> | 
                        <span className="wd-text-strong"> Not available until </span>
                          May 13 at 12:00am |
                        <br />
                        <span className="wd-text-strong">Due</span> May 20 at 11:59pm | 100 pts
                      </div>
                      </div>
                      <div className="ms-auto p-2">
                        <LessonControlButtons />
                      </div>
                  </div>
              </li>
            </ul>
            <ul className="wd-assignments list-group rounded-0">
              <li className="wd-lesson  list-group-item p-3 ps-1">
                <div className="d-flex mb-3">
                  <div className="p-2">
                    <BsGripVertical className="me-2 fs-3" />
                    <PiNotePencilDuotone className="text-success me-2 fs-3" />
                  </div>
                  <div className="p-2">
                    <a className="wd-assignment-link"
                        href="#/Kanbas/Courses/1234/Assignments/123">
                        <h4 className="wd-text-strong">A3</h4>
                    </a>
                    <div>
                      <span className="text-danger">Multiple Modules</span> | 
                      <span className="wd-text-strong"> Not available until </span>
                        May 20 at 12:00am |
                      <br />
                      <span className="wd-text-strong">Due</span> May 27 at 11:59pm | 100 pts
                    </div>
                  </div>
                  <div className="ms-auto p-2">
                    <LessonControlButtons />
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  );}
  