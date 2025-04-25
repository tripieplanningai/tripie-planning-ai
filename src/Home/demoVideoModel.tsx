import React from "react";
import { Modal } from "react-bootstrap";
import "./home.css";
interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal show={isOpen} onHide={onClose} centered size="lg">
      <Modal.Header
        closeButton
    className="video-modal-header"
      >
        <Modal.Title>
          <h4 className="fw-bold brand">Demo Video</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ padding: 0, height: "50vh"}}>
        <div style={{ width: "100%", height: "100%"}}>
          <iframe
            src="https://www.youtube.com/embed/f9qvVsxjZVw"
            title="Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: "100%", height: "100%", border:"none" }}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default VideoModal;
