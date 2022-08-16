import { useContext } from "react";
import { AppContext } from "core/contexts";
import { useHistory } from "react-router-dom";
import {
  getReservation,
  createReservation,
  deleteReservation,
  getReservations,
  updateReservation,
} from "core/services";
import { variants } from "core/utils";

export const useReservationServices = () => {
  const { setMessage } = useContext(AppContext);
  const history = useHistory();

  const getAllReservations = async (setReservations) => {
    getReservations().then(({ data }) => !!data && setReservations(data?.data));
  };

  const getReservationById = async (id, setReservations) => {
    getReservation(id).then((data) => !!data && setReservations(data));
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

  const create = (body) => {
    createReservation(body).then((data) => {
      if (data) {
        successMessage("Noticia creada con exito");
        history.push("/dashboard/news");
      } else errorMessage();
    });
  };

  const update = (body, refresh) => {
    updateReservation(body).then(({ data }) => {
      if (data) {
        successMessage("Se ha actualizado la reservacion");
        refresh();
      } else errorMessage();
    });
  };

  const reservationDelete = (id, refresh) => {
    deleteReservation(id).then(({ error }) => {
      if (!error) successMessage("Noticia eliminada con exito");
      else errorMessage();
      refresh();
    });
  };

  return {
    getAllReservations,
    getReservationById,
    create,
    update,
    reservationDelete,
  };
};
