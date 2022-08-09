import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function FormContact() {
  return (
    <Form>
      <Form.Group className="mb-3 input-form" controlId="i-name">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Nombre" />
      </Form.Group>

      <Form.Group className="mb-3 input-form" controlId="i-email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>

      <Form.Group className="mb-3 input-form" controlId="i-asunto">
        <Form.Label>Asunto</Form.Label>
        <Form.Control type="text" placeholder="Asunto" />
      </Form.Group>


      <Form.Group className="mb-3 input-form" controlId="i-mensaje">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Mensaje" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
}