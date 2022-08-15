import React from "react";
import { useState } from "react";
import { useGetNewsService } from "core/hooks/use-get-news-service";
import { useEffect } from "react";
import Spinner from "components/spinner";

export default function NewDetailedContent({ id }) {
  const [content, setContent] = useState({});
  const { getFullNewPage } = useGetNewsService();

  useEffect(() => getFullNewPage(id, setContent), []);

  if (Object.keys(content).length === 0) return <Spinner />;

   console.log(content.new);

  return (
    <div className="content-body">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <h2>{content.new.title}</h2>
          </div>
          <div className="col-xl 3">
            <h4>{content.new.created_at}</h4>
          </div>
          <div className="col-xl-12">
            <p>{content.new.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
