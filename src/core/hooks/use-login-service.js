import { useContext } from "react";
import { AppContext } from "core/contexts";
import { login } from "core/services";
import { variants } from "core/utils";

export const useLoginService = () => {
  const { setIsLoged, setMessage } = useContext(AppContext);

  const haveUser = !!localStorage.getItem("user");

  const errorMessage = () => {
    setMessage({
      message: "Usuario o contraseña incorrectos",
      variant: variants.danger,
    });
  };

  const loginUser = (user) => {
    login(user).then(({ data }) => {
      if (data) {
        localStorage.setItem("user", JSON.stringify(data));
        setIsLoged(true);
      } else errorMessage();
    });
  };

  const logoutUser = () => {
    localStorage.removeItem("user");
    setIsLoged(false);
  };

  return { loginUser, logoutUser, haveUser };
};
