export default function SubmissionEditor() {
    return (
        <div className="d-flex align-items-stretch mb-3 justify-content-end">
            <div className="p-2">
                <label htmlFor="wd-submission-type">Submission Type</label>
            </div>

            <div className="btn btn-md btn-editor p-2 me-1 text-start">
                <div className="container"  style={{width: '360px'}}>
                    <div className="p-2">
                    <select id="wd-submission-type" className="form-select mb-2">
                        <option selected value="ONLINE">Online</option>
                        <option value="PAPER">Paper</option>
                        <option value="OTHER">Other</option>
                    </select>
                    <div className="p-2">
                        <label className="wd-text-strong">Online Entry Options</label>
                    </div>

                    <div className="p-2">
                    <div className="form-check">
                        <input type="checkbox" name="check-entry" id="wd-text-entry" 
                            className="form-check-input mb-2"/>
                        <label htmlFor="wd-text-entry" className="form-label">Text Entry</label><br/>
                        <input type="checkbox" name="check-entry" id="wd-website-url" 
                            className="form-check-input"/>
                        <label htmlFor="wd-website-url" className="form-label">Website URL</label><br/>
                        <input type="checkbox" name="check-entry" id="wd-media-recordings" 
                            className="form-check-input"/>
                        <label htmlFor="wd-media-recordings" className="form-label">Media Recordings
                        </label><br/>
                        <input type="checkbox" name="check-entry" id="wd-student-annotation" 
                            className="form-check-input"/>
                        <label htmlFor="wd-student-annotation" className="form-label">Student Annotations
                        </label><br/>
                        <input type="checkbox" name="check-entry" id="wd-file-upload" 
                            className="form-check-input"/>
                        <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
                        
                    </div> 
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}