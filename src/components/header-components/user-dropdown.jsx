import React from "react";
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Palette from "assets/css/palete";

export const UserDropdown = () => {
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
        <Dropdown.Item href="#/action-1">My Profile</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Notifications</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Event Created</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Event Attended</Dropdown.Item>
        <Dropdown.Item href="#/action-5">Elements</Dropdown.Item>
        <Dropdown.Item href="#/action-6">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
