import Spinner from "components/spinner";
import { useReservationServices } from "core/hooks";
import React from "react";
import { Table } from "react-bootstrap";
import { GridRow } from "./grid-row";

export const Reservations = () => {
  const { getAllReservations, reservationDelete } = useReservationServices();
  const [reservations, setReservations] = React.useState([]);

  const refreshReservations = () => {
    getAllReservations(setReservations);
  };

  const onDelete = (id) => {
    reservationDelete(id, refreshReservations);
  };

  React.useEffect(() => {
    getAllReservations(setReservations);
    //eslint-disable-next-line
  }, []);

  if (!reservations.length) return <Spinner />;
  return (
    <div className="user-grid-container">
      <h1>Listado de Reservaciones</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Id</th>
            <th>Area</th>
            <th>Usuario</th>
            <th>Fecha de Inicio</th>
            <th>Fecha Final</th>
            <th>Aprovacion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <GridRow
              item={reservation}
              key={reservation.id}
              onDelete={onDelete}
              refresh={refreshReservations}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};
