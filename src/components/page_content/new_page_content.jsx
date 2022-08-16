import React from "react";
import { useState } from "react";
import { useGetNewsService } from "core/hooks/use-get-news-service";
import { useEffect } from "react";
import Spinner from "components/spinner";
import CommentDisplay from "components/widgets/comment_display";

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
          <div className="col-xl 3">
            <h4>{content.new.created_at}</h4>
          </div>
          <div className="col-xl-12">
            <p>{content.new.description}</p>
          </div>
          {content.new.body.map((paragraph, index) => {
            return (
              <div id={index} className="col-xl-12">
                <h3>{paragraph.title}</h3>
                <p>{paragraph.paragraph}</p>
              </div>
            );
          })}
          {content.pictures.map((picture,index)=>{
            return(
              <img id={index} src={picture.url} lang={picture.name}></img>
            )
          })}
          {content.comments.map((comment,index)=>{
            return <CommentDisplay id={index} user={""} comment={comment.comment_text} date={new Date()}/>
          })}
        </div>
      </div>
    </div>
  );
}
