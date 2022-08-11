import { DELETE, GET, POST, PUT } from "core/utils/crud";

export const getUsers = async () => {
  const response = await GET("/users");
  return response.data;
};

export const getUser = async (id) => {
  const response = await GET(`/users/${id}`);
  return response.data;
};

export const createUser = async (user) => {
  const response = await POST("/users", user);
  return response;
};

export const updateUser = async (user) => {
  const response = await PUT(`/users/${user.id}`, user);
  return response;
};

export const deleteUser = async (id) => {
  const response = await DELETE(`/users/${id}`);
  return response;
};
