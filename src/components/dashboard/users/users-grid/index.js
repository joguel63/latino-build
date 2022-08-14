import React, { useEffect } from "react";
import { useUsersServices } from "core/hooks";
import { Button, Table } from "react-bootstrap";
import { GridRow } from "./grid-row";
import { UserModal } from "./user-modal";
import Spinner from "components/spinner";

export const Users = () => {
  const [users, setUsers] = React.useState();
  const [userSelected, setUserSelected] = React.useState();
  const [show, setShow] = React.useState(false);
  const { getAllUsers, userDelete } = useUsersServices();

  const onHide = () => {
    setUserSelected(undefined);
    setShow(false);
  };
  const refreshUsers = () => {
    getAllUsers(setUsers);
  };

  const handleUpdate = (user) => {
    setUserSelected(user);
    setShow(true);
  };
  const onDelete = (id) => {
    userDelete(id, refreshUsers);
  };
  useEffect(() => {
    getAllUsers(setUsers);
    //eslint-disable-next-line
  }, []);

  if (!users) return <Spinner />;
  return (
    <div className="user-grid-container">
      <Button
        variant="primary"
        className="create-user-button"
        onClick={() => setShow(true)}
      >
        Nuevo Usuario
      </Button>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Cedula</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.data.map((user) => (
            <GridRow
              user={user}
              key={user.id}
              handleUpdate={handleUpdate}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </Table>
      <UserModal
        show={show}
        onHide={onHide}
        refreshUsers={refreshUsers}
        user={userSelected}
      />
    </div>
  );
};
