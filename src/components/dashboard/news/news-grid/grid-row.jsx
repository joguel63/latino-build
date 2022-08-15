import React from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";

export const GridRow = ({ item, onDelete, handleUpdate }) => {
  const { id, title, description, created_at } = item;
  const history = useHistory();

  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{description}</td>
      <td>{moment(created_at ?? "").format("DD/MM/YYYY LTS")}</td>
      <td>
        <div style={{ display: "flex", gap: "16px" }}>
          <button
            className="btn btn-info"
            onClick={() => history.push(`/dashboard/news/edit/${id}`)}
          >
            Editar
          </button>
          <button className="btn btn-danger" onClick={() => onDelete(id)}>
            Eliminar
          </button>
        </div>
      </td>
    </tr>
  );
};
