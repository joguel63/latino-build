import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { AppContext } from "core/contexts";
import { variants } from "core/utils";
import { ValidateCreateNews } from "core/validators";
import { useNewsServices } from "core/hooks";
import Spinner from "components/spinner";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const NewsForm = () => {
  const { setMessage } = useContext(AppContext);
  const [newsForm, setNewsForm] = useState({});
  const { create, getNewById, update } = useNewsServices();
  const params = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewsForm({ ...newsForm, [name]: value });
  };

  const handleSubmit = () => {
    const error = ValidateCreateNews(newsForm, !!params.id);
    if (!error) !!params.id ? update(newsForm) : create(newsForm);
    else setMessage({ message: error, variant: variants.danger });
  };

  useEffect(() => {
    if (params.id) getNewById(params.id, setNewsForm);
    //eslint-disable-next-line
  }, []);

  if (params.id && !Object.keys(newsForm).length) return <Spinner />;
  return (
    <div className="news-form-container">
      <div className="news-form-header">
        <h2>{!params.id ? "Crear nueva noticia" : "Editar noticia"}</h2>
      </div>
      <div className="news-form-section">
        <div className="news-form-section-header">
          <input
            className="form-control"
            name="title"
            type="text"
            onChange={handleChange}
            placeholder="Titulo"
            defaultValue={newsForm.title ?? ""}
          />
          <input
            className="form-control"
            type="text"
            name="description"
            placeholder="Descripcion"
            onChange={handleChange}
            defaultValue={newsForm.description ?? ""}
          />
          {!params.id && (
            <input
              className="form-control"
              name="picture"
              type="file"
              accept="image/*"
              defaultValue={newsForm.picture}
              onChange={(e) =>
                handleChange({
                  target: { name: "picture", value: e.target.files[0] },
                })
              }
              placeholder="Imagen"
            />
          )}
        </div>
        <ReactQuill
          theme="snow"
          value={newsForm.body ?? ""}
          onChange={(e) => handleChange({ target: { name: "body", value: e } })}
        />
      </div>
      <div className="news-form-actions">
        <Button onClick={handleSubmit}>
          {!params.id ? "Guardar Noticia" : "Actualizar Noticia"}
        </Button>
      </div>
    </div>
  );
};
