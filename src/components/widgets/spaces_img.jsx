import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { Card } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function SpaceImg({ src, title, description, link }) {
  const [show, setShow] = useState(false);
  const handleShow = (val) => setShow(val);

  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className="peoples-photo-single">
        <img
          className="img-fluid spaces-image"
          src={src}
          alt={title ?? ""}
          onClick={() => handleShow(true)}
        />
        <Modal show={show} onHide={() => handleShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card className="popup">
              <Card.Img className="newsImg" variant="top" src={src}></Card.Img>
              <Card.Body>
                <Card.Title className="titleLink"></Card.Title>
                <Card.Text>
                  <p>{description ?? "No hay descripción que mostrar"}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => handleShow(false)}>
              Cerrar
            </Button>
            <Link to={`/scheduleSpace/${title}`}>
              <Button variant="primary" onClick={() => handleShow(false)}>
              Ver horarios
              </Button>
            </Link>
          </Modal.Footer>
        </Modal>
        <h4>{title ?? ""}</h4>
      </div>
    </div>
  );
}
