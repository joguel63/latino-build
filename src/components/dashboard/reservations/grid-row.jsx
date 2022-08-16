import React from "react";
import moment from "moment";
import { Form } from "react-bootstrap";
import { useReservationServices } from "core/hooks";

export const GridRow = ({ item, onDelete, refresh }) => {
  const { id, reserved_areas, start_date, end_date, user, approved } = item;
  const { update } = useReservationServices();

  const handleChangeStatus = (e) => {
    const status = !!approved ? 0 : 1;
    update({ id: id, approved: status }, refresh);
  };
  return (
    <tr>
      <td style={{ verticalAlign: "middle" }}>{id}</td>
      <td style={{ verticalAlign: "middle" }}>
        {reserved_areas[0]?.area?.name ?? ""}
      </td>
      <td style={{ verticalAlign: "middle" }}>
        {user.name + " " + user.last_name}
      </td>
      <td style={{ verticalAlign: "middle" }}>
        {moment(start_date ?? "").format("DD/MM/YYYY LTS")}
      </td>
      <td style={{ verticalAlign: "middle" }}>
        {moment(end_date ?? "").format("DD/MM/YYYY LTS")}
      </td>
      <td style={{ verticalAlign: "middle" }}>
        <div>
          <Form.Check
            checked={!!approved}
            name="approved"
            id="custom-switch"
            onChange={handleChangeStatus}
            label=""
          />
        </div>
      </td>
      <td style={{ verticalAlign: "middle" }}>
        <button className="btn btn-danger" onClick={() => onDelete(id)}>
          Eliminar
        </button>
      </td>
    </tr>
  );
};
