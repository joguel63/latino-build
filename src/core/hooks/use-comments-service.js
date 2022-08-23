import { createComment, deleteComment, getCommentsByNew } from "core/services";

export const useCommentsService = () => {
  const getComments = (id, setComments) => {
    getCommentsByNew(id).then(({ data }) => {
      if (!!data) {
        if (setComments) setComments(data);
      }
    });
  };

  const create = (body, callback) => {
    createComment(body).then(({ data }) => {
      if (!!data) {
        if (callback) callback();
      }
    });
  };

  const commentDelete = (id, callback) => {
    deleteComment(id).then(({ data }) => {
      if (!!data) {
        if (callback) callback();
      }
    });
  };

  return {
    create,
    commentDelete,
    getComments,
  };
};
