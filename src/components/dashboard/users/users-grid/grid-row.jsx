import React from "react";

export const GridRow = ({ user, onDelete, handleUpdate }) => {
  const { id, name, last_name, dni, email } = user;
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{last_name}</td>
      <td>{dni}</td>
      <td>{email}</td>
      <td>
        <div style={{ display: "flex", gap: "16px" }}>
          <button className="btn btn-info" onClick={() => handleUpdate(user)}>
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
