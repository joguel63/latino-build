import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function NewsDisplay({ title, src, link, content}) {
  return (
    <Card>
      <Card.Img className="newsImg" variant="top" src={src} alt={title}></Card.Img>
      <Card.Body>
        <Card.Title className="titleLink">
          <Link className="titleLink" to={`/news_detailed/${link}`}>{title}</Link>
        </Card.Title>
        <Card.Text></Card.Text>
      </Card.Body>
    </Card>
  );
}
