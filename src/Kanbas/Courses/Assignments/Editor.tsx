import AssignEditor from "./AssignEditor";
import SubmissionEditor from "./SubmissionEditor"

export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">
            Assignment Name
        </label><br />
        <input id="wd-name" placeholder="A1" style={{width: '100%'}}/><br /><br />
        <div id="wd-description" className="btn btn-md btn-editor me-1 text-start" 
        style={{width: '100%'}}>
          <br />The assignment is <span className="text-danger">available online</span><br /><br />
          Submit a link to the landing page of your Web application running on <br />Netlify. <br /><br />
          The landing page should include the following: <br /><br />
          <ul>
            <li>
              Your full name and section
            </li>
            <li> 
              Links to each of the lab assignments 
            </li>
            <li>
              Link to the Kanbas application 
            </li>
            <li>
              Links to all relevant source code repositories 
              </li>
          </ul> <br /><br />
          The Kanbas application should include a link to navigate back to the landing <br />page.
        </div>


        <br /><br />
        <div className="d-flex justify-content-end">

          <div className="p-2">
            <div className="d-flex align-items-stretch justify-content-end">
              <div className="p-2">
                  <label htmlFor="wd-points">Points</label>
                  </div>
                <div className="p-2 flex-shrink-1">
                  <input id="wd-points" value={100}  
                  className="form-control mb-3 me-2" style={{width: '375px'}}/>
            </div>
          </div>

          <div className="p-2">
            <div className="d-flex align-items-stretch justify-content-end">
              <div className="p-2">
                <label htmlFor="wd-group">Assignment Group</label>
              </div>
              <div className="p-2 flex-shrink-1">
              <select id="wd-group"  className="form-select mb- d-flex justify-content-end"  
                style={{width: '375px'}}>
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
              style={{width: '375px'}}>
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
                <button id="wd-cancel" className="btn btn-secondary w-30 me-1">Cancel</button> 
                <button id="wd-save" className="btn btn-danger w-30">Save</button>
              </div>
    </div>
);}
  