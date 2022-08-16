import React from "react";
import { Card } from "react-bootstrap";

export default function CommentDisplay({user,comment,date}){
    return(
        <Card>
            <Card.Title>{user}</Card.Title>
            <Card.Body>{comment}</Card.Body>
            <Card.Footer>{date}</Card.Footer>
        </Card>
    )
}