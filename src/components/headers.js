import React from 'react';
import {Col, Row} from "react-bootstrap";

function Headers(){
    return (
        <Row>
            <Col md={6}>
                <h5><b>Header 5</b></h5>
                <p>14.5 pt, bold</p>
                <h6><b>Header 6</b></h6>
                <p>12 pt, bold</p>
            </Col>
        </Row>
    );
}

export default Headers;