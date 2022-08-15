import React from "react";
import { Button, Card } from "react-bootstrap";

export const NewsSection = ({ id, newsForm, setNewsForm }) => {
  const currentSection = newsForm.body.find((section) => section.id === id);
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newBody = newsForm.body.map((item) =>
      item.id === id ? { ...item, [name]: value } : item
    );
    setNewsForm({ ...newsForm, body: newBody });
  };
  const removeSection = () => {
    const newBody = newsForm.body.filter((section) => section.id !== id);
    setNewsForm({
      ...newsForm,
      body: newBody,
    });
  };
  return (
    <Card>
      <Card.Body className="news-sections-header">
        <input
          className="form-control news-sections-header-input"
          type="text"
          placeholder="Titulo"
          name="title"
          onChange={handleChange}
          defaultValue={currentSection?.title ?? ""}
        />
        <Button variant="danger" onClick={removeSection}>
          Eliminar seccion
        </Button>
      </Card.Body>
      <Card.Body>
        <textarea
          className="form-control"
          rows="3"
          placeholder="Parrafo"
          name="paragraph"
          onChange={handleChange}
          defaultValue={currentSection?.paragraph ?? ""}
        />
      </Card.Body>
    </Card>
  );
};
