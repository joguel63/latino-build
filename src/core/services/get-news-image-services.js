import	GET from "core/utils/crud"

export const getNewImagen = async (body) => {
    const response = await GET("/IMGENDPOINTAURL");
    return response;
}