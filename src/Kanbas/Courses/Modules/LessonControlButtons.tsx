import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";
import { useState } from "react";

export default function LessonControlButtons(
  { assignmentId, deleteAssignment }: { assignmentId: string; deleteAssignment: (assignmentId: string) => void; }
) {
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleDeleteClick = () => {
    setShowConfirmModal(true);
  };

  const confirmDelete = () => {
    deleteAssignment(assignmentId);
    setShowConfirmModal(false);
  };


  return (
    <div className="float-end">
      <FaTrash className="text-danger me-2 mb-1" onClick={handleDeleteClick} />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
      {showConfirmModal && (
        <div className="modal show d-block">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Deletion</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowConfirmModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to remove this assignment?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowConfirmModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={confirmDelete}
                >
                  Delete
                </button>
              </div>
          </div>
        </div>
      </div>)}
    </div>
);}
