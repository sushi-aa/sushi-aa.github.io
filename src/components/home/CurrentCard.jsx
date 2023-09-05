import React from 'react';
import Skeleton from "react-loading-skeleton";

import { 
    Col,
    Card
 } from "react-bootstrap";

const CurrentCard = ({data}) => {
    return ( 
        <Col md={12}>
            <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
                <Card.Body>
                <Card.Title as="h5">{data.month + " " + data.year || <Skeleton />} </Card.Title>
                <hr />
                <Card.Text>{data.description || <Skeleton count={3} />} </Card.Text>
                <Card.Text>{data.description2} </Card.Text>
                <Card.Text>{data.description3} </Card.Text>
                </Card.Body>
            </Card>
        </Col>
     );
}
 
export default CurrentCard;