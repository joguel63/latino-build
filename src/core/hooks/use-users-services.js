import { AppContext } from "core/contexts";
import {
  createUser,
  deleteUser,
  getUsers,
  getUser,
  updateUser,
} from "core/services";
import { variants } from "core/utils";
import { useContext } from "react";

export const useUsersServices = () => {
  const { setMessage } = useContext(AppContext);
  const getAllUsers = async (setUsers) => {
    getUsers().then((users) => setUsers(users));
  };

  const getUserById = async (id) => {
    getUser(id).then((user) => console.log(user));
  };

  const errorMessage = () => {
    setMessage({
      message: "Ocurrio un error con su solicitud",
      variant: variants.danger,
    });
  };
  const successMessage = (message) => {
    setMessage({
      message: message,
      variant: variants.success,
    });
  };
  const create = (body, onHide, refresh) => {
    const request = {
      ...body,
      password: body.dni,
      email_verified_at: new Date(),
    };

    createUser(request).then(({ data }) => {
      if (data) successMessage("Usuario creado con exito");
      else errorMessage();
      refresh();
      onHide();
    });
  };

  const update = (body, onHide, refresh) => {
    updateUser(body).then(({ data }) => {
      if (data) successMessage("Usuario actualizado con exito");
      else errorMessage();
      refresh();
      onHide();
    });
  };

  const userDelete = (id, refresh) => {
    deleteUser(id).then(({ error }) => {
      if (!error) successMessage("Usuario eliminado con exito");
      else errorMessage();
      refresh();
    });
  };

  return {
    getAllUsers,
    getUserById,
    create,
    update,
    userDelete,
  };
};
