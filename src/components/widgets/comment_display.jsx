import moment from "moment";
import React from "react";
import { Card } from "react-bootstrap";

export default function CommentDisplay({ comment: info }) {
  console.log(info);
  const { user, comment_text, created_at } = info;
  return (
    <Card>
      <Card.Body className="d-flex justify-content-between">
        <div>
          {`${user.name ?? ""} ${user.last_name ?? ""}` + " ha comentado:"}
        </div>
        <div className="text-black-50 ">{`El ${moment(created_at ?? "").format("DD/MM/YYYY LTS")}`}</div>
      </Card.Body>
      <Card.Body className="pt-0">{comment_text}</Card.Body>
    </Card>
  );
}
