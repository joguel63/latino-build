import React from "react";
import { Field, Formik, Form } from "formik";
import { Modal, Button } from "react-bootstrap";
import { validateLogin } from "core/validators";
import { useLoginService } from "core/hooks";

export const LoginModal = (props) => {
  const { loginUser } = useLoginService();
  const { show, onHide } = props;
  const initialValues = { email: "", password: "" };

  const handleSubmit = (values, { setSubmitting }) => {
    loginUser(values);
    setSubmitting(false);
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Formik
        initialValues={initialValues}
        validate={validateLogin}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>Inicio de sesion</Modal.Header>
            <Modal.Body className="modal-login-body">
              <Field
                type="email"
                placeholder="Correo Electronico"
                className="form-control"
                autoComplete="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                required
              />
              {errors.email && touched.email && errors.email}
              <Field
                type="password"
                className="form-control"
                placeholder="Contraseña"
                autoComplete="current-password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                required
              />
              {errors.password && touched.password && errors.password}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="outline-dark" onClick={onHide}>
                Cerrar
              </Button>
              <Button
                variant="primary"
                /* onClick={onHide} */ type="submit"
                disabled={isSubmitting}
              >
                Iniciar Sesion
              </Button>
            </Modal.Footer>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};
