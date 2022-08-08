import { AppContext } from "core/contexts";
import React, { useContext } from "react";
import Alert from "react-bootstrap/Alert";

export const HiddenAlert = () => {
  const { message } = useContext(AppContext);
  const show = Object.keys(message ?? {}).length;
  return (
    <Alert show={show} variant={message?.variant ?? ""}>
      {message?.message ?? ""}
    </Alert>
  );
};
