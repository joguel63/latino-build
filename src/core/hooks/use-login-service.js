import { useContext } from "react";
import { AppContext } from "core/contexts";

export const useLoginService = () => {
  const { setIsLoged } = useContext(AppContext);

  const haveUser = !!localStorage.getItem("user");

  const loginUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setIsLoged(true);
  };

  const logoutUser = () => {
    localStorage.removeItem("user");
    setIsLoged(false);
  };

  const checkRole = (role) => true;

  return { loginUser, logoutUser, haveUser, checkRole };
};
