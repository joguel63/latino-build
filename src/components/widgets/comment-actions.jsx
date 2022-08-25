import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown } from "react-bootstrap";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";


export const CommentActions = ({ comment, onDelete }) => {

  const handleDelete = () => {
    onDelete(comment?.id);
  };
  return (
    <Dropdown className="custom-dropdown">
      <Dropdown.Toggle variant="success" as="div" className="d-inline-block">
        <FontAwesomeIcon
          icon={faEllipsisVertical}
          size="1x"
          /*   color={Palette.primary.dark} */
        />
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu-right">
        <Dropdown.Item onClick={handleDelete}>Borrar comentario</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
