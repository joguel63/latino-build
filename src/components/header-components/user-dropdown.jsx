import React from "react";
import { useHistory } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useLoginService, useUser } from "core/hooks";
import Palette from "assets/css/palete";
import { roles } from "core/utils";

export const UserDropdown = () => {
  const { logoutUser } = useLoginService();
  const { checkRole } = useUser();
  const history = useHistory();
  const navigateTo = (path) => history.push(path);

  return (
    <Dropdown className="custom-dropdown">
      <Dropdown.Toggle variant="success" as="div" className="d-inline-block">
        <FontAwesomeIcon
          icon={faCircleUser}
          size="2x"
          color={Palette.primary.dark}
        />
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu-right">
        <Dropdown.Item onClick={() => navigateTo("/profile")}>
          Perfil
        </Dropdown.Item>
        <Dropdown.Item onClick={() => navigateTo("/payment")}>
          Deuda
        </Dropdown.Item>
        {checkRole(roles.admin) && (
          <Dropdown.Item onClick={() => navigateTo("/dashboard")}>
            Administracion
          </Dropdown.Item>
        )}
        {/*   <Dropdown.Item href="#/action-4">Event Attended</Dropdown.Item>
        <Dropdown.Item href="#/action-5">Elements</Dropdown.Item> */}
        <Dropdown.Item onClick={logoutUser}>Cerrar Sesión</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
