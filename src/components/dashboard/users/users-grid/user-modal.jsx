import React from "react";
import { Formik, Form } from "formik";
import { Modal, Button } from "react-bootstrap";
import { validateCreateUser } from "core/validators";
import { useUsersServices } from "core/hooks";
import { CreateUser } from "./forms/create-user";

export const UserModal = (props) => {
  const { create, update } = useUsersServices();
  const { show, onHide, refreshUsers, user } = props;
  const initialValues = user ?? {
    role_id: "",
    name: "",
    last_name: "",
    dni: "",
    email: "",
    address: "",
    membership_number: "",
    birthdate: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    if (user) update(values, onHide, refreshUsers);
    else create(values, onHide, refreshUsers);
    setSubmitting(false);
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Formik
        initialValues={initialValues}
        validate={validateCreateUser}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, isSubmitting, ...rest }) => (
          <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
              {!!user ? "Editar" : "Crear"} Usuario
            </Modal.Header>
            <Modal.Body className="user-form-container">
              <CreateUser {...rest} isEdit={!!user} />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="outline-dark" onClick={onHide}>
                Cancelar
              </Button>
              <Button variant="primary" type="submit" disabled={isSubmitting}>
                {!!user ? "Editar" : "Crear"} Usuario
              </Button>
            </Modal.Footer>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};
