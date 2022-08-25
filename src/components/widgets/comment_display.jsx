import moment from "moment";
import React from "react";
import { Card } from "react-bootstrap";
import { CommentActions } from "./comment-actions";
import { roles } from "core/utils";
import { useUser } from "core/hooks";

export default function CommentDisplay({ comment: info, onDelete }) {
  const { checkRole, user: userLoged } = useUser();
  const { user, comment_text, created_at } = info;
  const logedUserWhoComment = userLoged?.id === user?.id;
  return (
    <Card>
      <Card.Body className="d-flex justify-content-between">
        <div>
          {
            `${user.name ?? ""} ${user.last_name ?? ""}` +
              " ha comentado:" /*eslint-disable-line*/
          }
        </div>
        <div className="text-black-50 ">{`El ${moment(created_at ?? "").format(
          "DD/MM/YYYY LTS"
        )}`}</div>
      </Card.Body>
      <Card.Body className="pt-0">{comment_text}</Card.Body>
      {(checkRole(roles.admin) || logedUserWhoComment) && (
        <Card.Body className="pt-0 d-flex justify-content-end">
          <CommentActions comment={info} onDelete={onDelete} />
        </Card.Body>
      )}
    </Card>
  );
}
