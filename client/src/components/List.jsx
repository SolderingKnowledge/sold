import React from 'react'
import list from "../list.json"; 
import {Row, Col} from "react-bootstrap";
import Details from "./Details"

const List = () => {
    const listJsxed = list.map( (item, idx) => {
        return(
            <Col sm={12} md={6} lg={4} xl={3} key={idx}>
                <Details item={item} />
            </Col>
        )
    });
    return (
        <Row>
            {listJsxed}
        </Row>
    )
}

export default List
