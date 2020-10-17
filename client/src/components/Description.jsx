import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import {Row, Col, Image, ListGroup, Card, Button} from "react-bootstrap";
import Rating from "./Rating";
// import list from "../list.json";
import axios from "axios";

function Description({match}) {
    const [item, setItem] = useState({});

    useEffect(()=>{
        const fetchItem = async ()=> {
            const {data} = await axios.get(`/api/list/${match.params.id}`);
            console.log("myRes", data);
            setItem(data);
        }
        fetchItem();
    }, [match]);// useEffect it is the same as componentDidMount();

    // const item = list.find(i => i.id === match.params.id);
    return (
        <>
            <Link className="btn btn-light my-3" to="/">{/* go back to homescreen */}
                Go back
            </Link>
            <Row>
                <Col md={6}>
                    <Image src={item.img} alt={item.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{item.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating rating={item.rating} numReviews={item.numReviews} color="red" />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            {item.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            {item.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Price: 
                                    </Col>
                                    <Col>
                                        <strong>{item.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Status: 
                                    </Col>
                                    <Col>
                                        {item.inStock > 0 ? "In Stock" : "Out of Stock"}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className="btn-block" type="button" disabled={item.inStock == 0}
                                >Add to cart</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Description
