import React from "react";
import { AppContext } from "../contexts";

export const AppProvider = ({ children }) => {
  const [isLoged, setIsLoged] = React.useState(false);
  return (
    <AppContext.Provider value={{ isLoged, setIsLoged }}>
      {children}
    </AppContext.Provider>
  );
};
