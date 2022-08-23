import React from "react";
import { Spinner as ReactSpinner } from "react-bootstrap";

const Spinner = ({ height = 70 }) => {
  return (
    <div
      style={{
        minHeight: `${height}vh`,
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
