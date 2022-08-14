import { useLoginService } from "core/hooks";
import React from "react";
import { AppContext } from "../contexts";

export const AppProvider = ({ children }) => {
  const { haveUser } = useLoginService();
  const [isLoged, setIsLoged] = React.useState(haveUser);
  const [message, setMessage] = React.useState();

  return (
    <AppContext.Provider value={{ isLoged, setIsLoged, message, setMessage }}>
      {children}
    </AppContext.Provider>
  );
};
