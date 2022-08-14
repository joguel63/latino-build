import React from "react";
import { Spinner as ReactSpinner } from "react-bootstrap";

const Spinner = () => {
  return (
    <div
      style={{
        minHeight: "70vh",
        position: "relative",
      }}
    >
      <ReactSpinner
        animation="border"
        role="status"
        variant="success"
        style={{ position: "absolute", top: "50%", left: "50%" }}
      />
    </div>
  );
};

export default Spinner;
