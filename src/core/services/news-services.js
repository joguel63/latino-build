import { DELETE, GET, PUT, POSTFILE } from "core/utils/crud";

export const getNews = async () => {
  const response = await GET("/news");
  return response;
};

export const getNew = async (id) => {
  const response = await GET(`/news/${id}`);
  return response.data;
};

export const createNew = async (news) => {
  const response = await POSTFILE("/news", news);
  return response;
};

export const updateNew = async (news) => {
  const request = {
    body: JSON.stringify(news.body),
    description: news.description,
    title: news.title,
  };
  const response = await PUT(`/news/${news.id}`, request);
  return response;
};

export const deleteNew = async (id) => {
  const response = await DELETE(`/news/${id}`);
  return response;
};
