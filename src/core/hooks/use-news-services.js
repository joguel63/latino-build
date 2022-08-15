import { useContext } from "react";
import { AppContext } from "core/contexts";
import { useHistory } from "react-router-dom";
import {
  getNews,
  getNew,
  createNew,
  updateNew,
  deleteNew,
} from "core/services";
import { variants } from "core/utils";

export const useNewsServices = () => {
  const { setMessage } = useContext(AppContext);
  const history = useHistory();
  const getAllNews = async (setNews) => {
    getNews().then(({ data }) => !!data && setNews(data));
  };

  const getNewById = async (id, setNews) => {
    getNew(id).then((data) => !!data && setNews(data));
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
  const transFormToFormData = (body) => {
    const formData = new FormData();
    Object.keys(body ?? {}).forEach((key) => {
      if (Array.isArray(body[key])) {
        formData.append(key, JSON.stringify(body[key]));
      } else formData.append(key, body[key]);
    });
    return formData;
  };
  const create = (body) => {
    const formData = transFormToFormData(body);
    createNew(formData).then((data) => {
      if (data) {
        successMessage("Noticia creada con exito");
        history.push("/dashboard/news");
      } else errorMessage();
    });
  };

  const update = (body) => {
    updateNew(body).then(({ data }) => {
      if (data) {
        successMessage("Noticia actualizada con exito");
        history.push("/dashboard/news");
      } else errorMessage();
    });
  };

  const newsDelete = (id, refresh) => {
    deleteNew(id).then(({ error }) => {
      if (!error) successMessage("Noticia eliminada con exito");
      else errorMessage();
      refresh();
    });
  };

  return {
    getAllNews,
    getNewById,
    create,
    update,
    newsDelete,
  };
};
