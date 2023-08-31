import React from 'react';
import CurrentCard from "./CurrentCard";
import {
    Container,
    Row,
    Jumbotron
} from "react-bootstrap";

const Currently = ({currently}) => {
    return (  
        <section className="section">
            <Container>
                <Jumbotron fluid id="currently" className="bg-white">
                    <h2 className="display-4 mb-5 text-center">
                        {currently.heading}
                    </h2>
                    <Row>
                        {
                            currently.data.map(data => {
                                return <CurrentCard key={data.year} data={data} />
                            })
                        }
                    </Row>
                </Jumbotron>
            </Container>
        </section>
    );
}
 
export default Currently;