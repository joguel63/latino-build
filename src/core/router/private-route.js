import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AppContext } from "core/contexts";
import { useLoginService } from "core/hooks";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoged } = useContext(AppContext);
  const { checkRole } = useLoginService();
  const isAuthorized = checkRole("") && isLoged;
  return (
    <Route
      {...rest}
      render={() => (isAuthorized ? <Component /> : <Redirect to="/" />)}
    />
  );
};
