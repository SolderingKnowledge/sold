import React from 'react';
import {Card} from "react-bootstrap"
import Rating from "./Rating"
import {Link} from "react-router-dom";

function Details({item}) {
    // const {name} = props;
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/item/${item._id}`}>
                <Card.Img src={item.img} variant="top" />
            </Link>
            <Card.Body>
                <Link to={`/item/${item._id}`}>
                    <Card.Title as="div">
                        <strong>{item.name}</strong>
                    </Card.Title>
                </Link>
            </Card.Body>
            <Card.Text as="div">
                <Rating rating={item.rating} numReviews={item.numReviews} color={undefined} />
                {/* <div className="my-3">
                    {item.rating} from {item.numReviews} reviews
                </div> */}
            </Card.Text>
            <Card.Text as="h3">${item.price}</Card.Text>
        </Card>
    )
}

export default Details
