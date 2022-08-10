import React from "react";

export default function NewsPageNavigation({ page, next, prev }) {
  return (
    <div className="col-xl-12">
      <div className="navigator">
        <ul>
          <li>
            <a href={prev}>{"<"}</a>
          </li>
          <li>{page}</li>
          <li>
            <a href={next}>{">"}</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
