import React from "react";
import Card from "react-bootstrap/Card";

export default function NewsDisplay({ title, src, link }) {
  return (
    <Card>
      <Card.Img className="newsImg" variant="top" src={src}></Card.Img>
      <Card.Body>
        <Card.Title className="titleLink">
          <a className="titleLink" href={link}>
            {title}
          </a>
        </Card.Title>
        <Card.Text></Card.Text>
      </Card.Body>
    </Card>
  );
}
