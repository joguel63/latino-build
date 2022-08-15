import { GET } from "core/utils/crud"

export const getNews = async (body) => {
    const response = await GET("/news");
    return response;
}

export const getFullNew = async (id) =>{
    const response = await GET(`/full-news/${id}`);
    return response;
}