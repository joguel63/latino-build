import React from "react";
import { Button } from "react-bootstrap";
import { LoginModal } from "./login-modal";

export const LoginButton = () => {
  const [show, setShow] = React.useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Iniciar Sesion
      </Button>
      <LoginModal show={show} onHide={handleClose} />
    </>
  );
};
