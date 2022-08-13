import { GET } from "core/utils/crud"

export const getNews = async (body) => {
    const response = await GET("/news");
    return response;
}