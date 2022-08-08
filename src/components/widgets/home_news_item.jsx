import React from "react";

export default function HomeNewsItem({ src, label, alt }) {
  return (
    <div className="col-xl-12">
      <div className="imgDiv">
        <img className="cropped" src={src} alt={alt} />
        <h2 className="">{label}</h2>
      </div>
    </div>
  );
}
