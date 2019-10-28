import React, {Component} from 'react'
import {Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button} from 'reactstrap';
console.log(Card)
class SchoolCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            long_name: this.props.school.long_name,
            school_type: this.props.school.school_type,
            attendance_boundaries: this.props.school.attendance_boundaries,
            zip: this.props.school.zip,
            summary: this.props.school.summary,
            phone: this.props.school.phone,
            school_hours: this.props.school.school_hours,
            grades_offered_all: this.props.school.grades_offered_all,
            dress_code: this.props.school.dress_code,
            earliest_drop_off_time: this.props.school.earliest_drop_off_time,
            after_school_hours: this.props.school.after_school_hours,
            transportation_bus: this.props.school.transportation_bus,
            transportation_el: this.props.school.transportation_el,
            graduation_rate_school: this.props.school.graduation_rate_school,
            student_count_low_income: this.props.school.student_count_low_income
        };
    }

    render(){
        console.log("props from SchoolCard being passed")
        return(
            <div>
                <Card>
                    <CardImg top width="100%" src="https://i.imgur.com/ThFIm2Y.jpg" alt="Chicago School"></CardImg>
                    <CardBody>
                        <div className="cardName">
                            <CardTitle>{this.props.school.long_name}</CardTitle>
                        </div>
                        <br />
                        <br />
                        <div className="cardSchoolType">
                            <CardSubtitle>School Type: {this.props.school.school_type}</CardSubtitle>
                        </div>
                        <br />
                        <br />
                        <div className="cardSchoolAttendance">
                        <CardText>Attendance Bounds: {this.props.school.attendance_boundaries}</CardText>
                        </div>
                        <br />
                        <br />
                        <div className="cardLocationZip">
                        <CardText>Zipcode: {this.props.school.zip}</CardText>
                        </div>
                        <br />
                        <br />
                        <div className="cardSchoolSummary">
                        <CardText>School Mission: {this.props.school.summary}</CardText>
                        </div>
                        <br />
                        <br />
                        <div className="cardPhoneNumber">
                        <CardText>School Phone: {this.props.school.phone}</CardText>
                        </div>
                        <br />
                        <br />
                        <div className="cardSchoolHours">
                        <CardText>School Hours of Operation: {this.props.school.school_hours}</CardText>
                        </div>
                        <br />
                        <br />
                        <div className="cardGradesOffered">
                        <CardText>Grades: {this.props.school.grades_offered_all}</CardText>
                        </div>
                        <br />
                        <br />
                        <div className="cardDressCode">
                        <CardText>Uniforms Required? {this.props.school.dress_code}</CardText>
                        </div>
                        <br />
                        <br />
                        <div className="cardDropOff">
                        <CardText>Earliest time to drop off child(ren): {this.props.school.earliest_drop_off_time}</CardText>
                        </div>
                        <br />
                        <br />
                        <div className="cardAfterSchool">
                        <CardText>After School Hours (if offered): {this.props.school.after_school_hours}</CardText>
                        </div>
                        <br />
                        <br />
                        <div className="cardMetroBus">
                        <CardText>Nearest Metro Bus(es): {this.props.school.transportation_bus}</CardText>
                        </div>
                        <br />
                        <br />
                        <div className="cardMetroEl">
                        <CardText>Nearest Elevated Train: {this.props.school.transportation_el}</CardText>
                        </div>
                        <br />
                        <br />
                        <div className="cardGraduationRate">
                        <CardText>Graduation Rate(if applicable): {this.props.school.graduation_rate_school}</CardText>
                        </div>
                        <br />
                        <br />
                        <div className="cardLowIncome">
                        <CardText>Low income student count: {this.props.school.student_count_low_income}</CardText>
                        </div>
                        <br />
                        <br />
                        
                    </CardBody>
                </Card>
            </div>  
   
        )
    }
}

export default SchoolCard; 