export const useUser = () => {
  const logedUser = localStorage.getItem("user");
  const user = logedUser ? JSON.parse(logedUser) : undefined;

  const checkRole = (role) => user?.role_id === role;
  return { user, checkRole };
};
