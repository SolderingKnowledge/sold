import React from "react";
import { Alert as Msg } from "react-bootstrap";

const Alert = ({variant, children}) => {
    return (
        <Msg variant={variant}>
            {children}
        </Msg>
    )
}

Alert.defaultProps = {
    variant: "info"
}

export default Alert;