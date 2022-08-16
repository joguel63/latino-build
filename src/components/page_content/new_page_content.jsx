import React from "react";
import { useState } from "react";
import { useGetNewsService } from "core/hooks/use-get-news-service";
import { useEffect } from "react";
import Spinner from "components/spinner";
import CommentDisplay from "components/widgets/comment_display";
import moment from "moment";
import Image from "assets/images/news/9.jpg";
export default function NewDetailedContent({ id }) {
  const [content, setContent] = useState({});
  const { getFullNewPage } = useGetNewsService();

  useEffect(() => getFullNewPage(id, setContent), []);

  if (Object.keys(content).length === 0) return <Spinner />;

  return (
    <div className="content-body">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <h1>{content.new.title}</h1>
          </div>
          <div className="col-xl 1">
            <h4>{moment(content.new.created_at).format("DD/MM/YYYY")}</h4>
          </div>
          <div className="col-xl-12 mt-1 mb-4">
            {content.pictures.map((picture, index) => (
              <img
                id={index}
                key={index}
                src={picture.url}
                onError={(e) => {
                  e.target.src = Image;
                }}
                lang={picture.name}
                width="100%"
              ></img>
            ))}
          </div>

          <div className="col-xl-12">
            <p>{content.new.description}</p>
          </div>
          {content.new.body.map((paragraph, index) => {
            return (
              <div key={index} className="col-xl-12 section-container">
                <h3 className="new-subtitle">{paragraph.title}</h3>
                <p className="new-content">{paragraph.paragraph}</p>
              </div>
            );
          })}

          {content.comments.map((comment, index) => {
            return (
              <CommentDisplay
                key={index}
                user={""}
                comment={comment.comment_text}
                date={new Date()}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
