import React from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useCommentsService, useUser } from "core/hooks";
import CommentDisplay from "components/widgets/comment_display";
import Spinner from "components/spinner";

export const CommentSection = ({ comments: data }) => {
  const { user } = useUser();
  const { id } = useParams();
  const [comments, setComments] = React.useState(data);
  const [comment, setComment] = React.useState();
  const { create, getComments } = useCommentsService();

  const handleChange = (e) => setComment(e.target.value);

  const refreshComments = () => {
    setComments([]);
    getComments(id, setComments);
  };

  const handleSubmit = () => {
    if (comment) {
      const body = {
        comment_text: comment,
        new_id: id,
        user_id: user.id,
      };

      create(body, refreshComments);
      setComment("");
    }
  };

  return (
    <>
      <h3 style={{ margin: "32px 0" }}>Comentarios</h3>
      <div className="col-xl-12">
        <Card>
          <Card.Body className="d-flex justify-content-between">
            Agrega un comentario
          </Card.Body>
          <Card.Body className="pt-0">
            <textarea
              className="form-control"
              rows={5}
              value={comment}
              onChange={handleChange}
            />
          </Card.Body>

          <Card.Body className="pt-0 d-flex justify-content-end">
            <button className="btn btn-primary" onClick={handleSubmit}>
              Comentar
            </button>
          </Card.Body>
        </Card>
      </div>
      <div className="col-xl-12 mb-3 d-flex justify-content-end">
        <Button onClick={refreshComments}>Refrescar</Button>
      </div>
      {!!comments?.length ? (
        <div className="col-xl-12">
          {comments?.map((comment, index) => {
            return <CommentDisplay key={index} comment={comment} />;
          })}
        </div>
      ) : (
        <Spinner height={5} />
      )}
    </>
  );
};
