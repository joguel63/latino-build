import { useLoginService } from "core/hooks";
import React from "react";
import { AppContext } from "../contexts";

export const AppProvider = ({ children }) => {
  const { haveUser } = useLoginService();
  const [isLoged, setIsLoged] = React.useState(haveUser);
  const [message, setMessage] = React.useState();

  const changeMessage = (message) => {
    setMessage(message);
    const timer = setTimeout(() => setMessage(undefined), 2000);
    return () => clearTimeout(timer);
  };

  return (
    <AppContext.Provider
      value={{ isLoged, setIsLoged, message, setMessage: changeMessage }}
    >
      {children}
    </AppContext.Provider>
  );
};
