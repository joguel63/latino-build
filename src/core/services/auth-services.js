import { POST } from "core/utils/crud";

export const login = async (body) => {
  const response = await POST("/login", body);
  return response;
};
