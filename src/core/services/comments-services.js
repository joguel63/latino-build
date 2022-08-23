import { DELETE, GET, POST } from "core/utils/crud";

export const createComment = async (comment) => {
  const response = await POST("/news-comments", comment);
  return response;
};

export const deleteComment = async (id) => {
  const response = await DELETE(`/news-comments/${id}`);
  return response;
};

export const getCommentsByNew = async (id) => {
  const response = await GET(`/comments-by-new/${id}`);
  return response;
};
