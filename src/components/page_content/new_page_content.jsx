import React from "react";
import { useState } from "react";
import { useGetNewsService } from "core/hooks/use-get-news-service";
import { useEffect } from "react";
import Spinner from "components/spinner";
import moment from "moment";
import Image from "assets/images/news/9.jpg";
import { CommentSection } from "./comment-section";
export default function NewDetailedContent({ id }) {
  const [content, setContent] = useState({});
  const { getFullNewPage } = useGetNewsService();

  //eslint-disable-next-line
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
                alt={picture.url}
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

          <div
            className="col-xl-12 section-container"
            dangerouslySetInnerHTML={{ __html: content.new.body }}
          />
          <div className="col-xl-12">
            <CommentSection comments={content.comments} />
          </div>
        </div>
      </div>
    </div>
  );
}
