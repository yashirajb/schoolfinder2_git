import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import SchoolCard from './SchoolCard/SchoolCard';
console.log(Container)

//this presentational container does not effect the form, it simply presents the school cards based on what's asked for
//in the fetch request

//the column and row references were created with the help of the following source: https://www.youtube.com/watch?v=8q2zf9pFiQ4

function CardContainer(props){
    const schoolcards = props.schools.map(school =>{
        return(
            <Col sm="3">
                <SchoolCard school={school} />
                {/* handleInput={this.handleInput} */}
            </Col>
        )
    })

    return(
        <Container fluid>
            <Row>
                <div className="searchResults">
                    <h1>Search Results:</h1>
                </div>
                {schoolcards}
            </Row>
        </Container>
    )
}

export default CardContainer; 