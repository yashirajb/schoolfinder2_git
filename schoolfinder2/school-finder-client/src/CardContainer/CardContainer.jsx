import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import SchoolCard from './SchoolCard/SchoolCard';
console.log(Container)

function CardContainer(props){
    const schoolcards = props.schools.map(function(school){
        return(
            <Col sm="3">
                <SchoolCard school={school} />
            </Col>
        )
    })

    return(
        <Container fluid>
            <Row>
                {schoolcards}
            </Row>
        </Container>
    )
}

export default CardContainer; 