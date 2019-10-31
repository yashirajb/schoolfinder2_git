import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import SchoolCard from './SchoolCard/SchoolCard';
console.log(Container)

//this presentational container does not effect the form, it simply presents the school cards based on what's asked for
//in the fetch request

function CardContainer(props){
    const schoolcards = props.schools.map(school =>{
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