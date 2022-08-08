import { createContext } from "react";

export const AppContext = createContext({
  isLoged: undefined,
  setIsLoged: undefined,
  message: undefined,
  setMessage: undefined,
});
