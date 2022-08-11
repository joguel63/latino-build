import {
  createUser,
  deleteUser,
  getUsers,
  getUser,
  updateUser,
} from "core/services";

export const useUsersServices = () => {
  const getAllUsers = async (setUsers) => {
    getUsers().then((users) => setUsers(users));
  };

  const getUserById = async (id) => {
    getUser(id).then((user) => console.log(user));
  };

  const create = (body, onHide) => {
    const request = {
      ...body,
      password: body.dni,
      email_verified_at: new Date(),
    };

    createUser(request).then((response) => onHide());
  };

  const update = (body, onHide) => {
    updateUser(body).then((response) => onHide());
  };

  const userDelete = (id) => {
    deleteUser(id).then((response) => console.log(response));
  };

  return {
    getAllUsers,
    getUserById,
    create,
    update,
    userDelete,
  };
};
