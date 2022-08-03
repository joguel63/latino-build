import React from "react";
import { Field, Formik, Form } from "formik";
import { Modal, Button } from "react-bootstrap";

export const LoginModal = (props) => {
  const { show, onHide } = props;
  const initialValues = { email: "", password: "" };
  return (
    <Modal show={show} onHide={onHide}>
      <Formik
        initialValues={initialValues}
        onSubmit={() => console.log("enviando data")}
      >
        <Form>
          <Modal.Header closeButton>Inicio de sesion</Modal.Header>
          <Modal.Body className="modal-login-body">
            <Field
              type="email"
              placeholder="Correo Electronico"
              className="form-control"
              autoComplete="email"
              name="email"
              required
            />
            <Field
              type="password"
              className="form-control"
              placeholder="Contraseña"
              autoComplete="current-password"
              name="password"
              required
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-dark" onClick={onHide}>
              Close
            </Button>
            <Button variant="primary" /* onClick={onHide} */ typw="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Formik>
    </Modal>
  );
};
