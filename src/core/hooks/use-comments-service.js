import { useContext } from "react";
import { AppContext } from "core/contexts";
import { createComment, deleteComment, getCommentsByNew } from "core/services";
import { variants } from "core/utils";

export const useCommentsService = () => {
  const { setMessage } = useContext(AppContext);
  const errorMessage = () => {
    setMessage({
      message: "No se pudo crear el comentario",
      variant: variants.danger,
    });
  };
  const successMessage = (message) => {
    setMessage({
      message: message,
      variant: variants.success,
    });
  };

  const getComments = (id, setComments, loading) => {
    getCommentsByNew(id).then(({ data }) => {
      if (!!data) {
        if (setComments) setComments(data);
      }

      if (loading) loading(false);
    });
  };

  const create = (body, callback) => {
    createComment(body).then(({ data }) => {
      if (!!data) {
        successMessage("Comentario creado con exito");
        if (callback) callback();
      } else errorMessage();
    });
  };

  const commentDelete = (id, callback) => {
    deleteComment(id).then(({ data }) => {
      if (!!data) {
        successMessage("Comentario eliminado con exito");
        if (callback) callback();
      } else errorMessage();
    });
  };

  return {
    create,
    commentDelete,
    getComments,
  };
};
