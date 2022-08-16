import { DELETE, GET, POST, PUT } from "core/utils/crud";

export const getReservations = async () => {
  const response = await GET(`/reservations`);
  return response;
};

export const getReservation = async (id) => {
  const response = await GET(`/reservations/${id}`);
  return response;
};

export const createReservation = async (reservation) => {
  const response = await POST(`/reservations`, reservation);
  return response;
};

export const updateReservation = async (reservation) => {
  const response = await PUT(`/reservations/${reservation.id}`, reservation);
  return response;
};

export const deleteReservation = async (id) => {
  const response = await DELETE(`/reservations/${id}`);
  return response;
};
