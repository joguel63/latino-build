import { AppContext } from "core/contexts";
import React, { useContext } from "react";
import { Toast } from "react-bootstrap";

export const HiddenAlert = () => {
  const { message, setMessage } = useContext(AppContext);
  const show = Object.keys(message ?? {}).length;
  const handleClose = () => setMessage();

  const getColor = () => {
    switch (message?.variant) {
      case "danger":
        return "#dc3545";
      case "success":
        return "#198754";
      case "warning":
        return "#ffc107";
      default:
        return "none";
    }
  };

  return (
    <div
      position="bottom-center"
      style={{
        zIndex: 2000,
        color: "white",
        position: "absolute",
        top: "90vh",
        left: "3%",
      }}
    >
      <Toast
        autohide
        delay={2500}
        onClose={handleClose}
        show={!!show}
        style={{ backgroundColor: getColor() }}
      >
        <Toast.Body>{message?.message ?? ""}</Toast.Body>
      </Toast>
    </div>
  );
};
