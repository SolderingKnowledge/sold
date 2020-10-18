import React from "react";
import { Spinner as CircleSpinner } from "react-bootstrap";

const Spinner = () => {
    return (
        <CircleSpinner 
            animation="border"
            role="status"
            style={{width: "100px", height: "100px", margin: "auto", display: "block"}}>
            <span className="sr-only">Loading..</span>
        </CircleSpinner>
    )
}

export default Spinner;