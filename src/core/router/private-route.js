import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AppContext } from "core/contexts";
import { useUser } from "core/hooks";

export const PrivateRoute = ({ component: Component, role, ...rest }) => {
  const { isLoged } = useContext(AppContext);
  const { checkRole } = useUser();
  const isAuthorized = checkRole(role) && isLoged;
  return (
    <Route
      {...rest}
      render={() => (isAuthorized ? <Component /> : <Redirect to="/" />)}
    />
  );
};
