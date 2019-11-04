import React, {Component} from 'react'
import {Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button} from 'reactstrap';
import FormInput from '../../FormInput';
console.log(Card)
class SchoolCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            // transportation_el : null,
            // school_type :null,
            // dress_code : null,
            // // zip : null,
            // // transportation_bus: null
            // // rating_statement: null
            // overall_rating : null 

            // transportation_el : this.props.school.transportation_el,
            // school_type : this.props.school.school_type,
            // dress_code : this.props.school.dress_code,
            // overall_rating : this.props.overall_rating


            //im passing in props from the CardContainer
            long_name: this.props.school.long_name,
            //?long_name=Abraham Lincoln Elementary School
            school_type: this.props.school.school_type,
            // ?school_type=Career academy----go through and find all options for school type
            attendance_boundaries: this.props.school.attendance_boundaries,
            //?attendance_boundaries=N
            zip: this.props.school.zip,
            //?zip=60602
            summary: this.props.school.summary,
            //?summary=``
            phone: this.props.school.phone,
            //?phone=3122254668
            school_hours: this.props.school.school_hours,
            //?school_hours=07:30 AM - 02:30 PM
            grades_offered_all: this.props.school.grades_offered_all,
            ////?grades_offered_all=10,11,12
            dress_code: this.props.school.dress_code,
            ////?dress_code=N
            earliest_drop_off_time: this.props.school.earliest_drop_off_time,
            //?earliest_drop_off_time=06:00 AM
            after_school_hours: this.props.school.after_school_hours,
            //?after_school_hours=02:45 PM - 05:30 PM
            transportation_bus: this.props.school.transportation_bus,
            //?transportation_bus=103
            transportation_el: this.props.school.transportation_el,
            //?transportation_el=Blue
            graduation_rate_school: this.props.school.graduation_rate_school,
            //?college_enrollment_rate_school=0
            student_count_low_income: this.props.school.student_count_low_income,
            //?student_count_low_income=0 --number datatype, query options available 
            rating_status: props.school.rating_status,
            //?rating_status=Good Standing
            rating_statement: this.props.school.rating_statement,
            //?rating_statement=This school did not have enough data for a 2015-2016 Performance Policy Rating.
            primary_category: this.props.school.primary_category
        };
    }

    render(){
        
        console.log("schoolcards will render next")
      
    
        return(
            <div className="schoolCards">
                {/* <FormInput handleFormInput={props.handleFormInput}/> */}
                <Card>
                    <CardImg top width="100%" src="https://i.imgur.com/ThFIm2Y.jpg" alt="Chicago School"></CardImg>
                    <CardBody>
                        <div className="cardName">
                            <CardTitle ><small>{this.props.school.long_name}</small></CardTitle>
                        </div>
                        <br />
                        <div className="cardSchoolType">
                            <CardSubtitle><small>School Type: {this.props.school.school_type}</small></CardSubtitle>
                        </div>
                        <br />
                        <div className="cardSchoolAttendance">
                        <CardText><small>Attendance Bounds: {this.props.school.attendance_boundaries}</small></CardText>
                        </div>
                        <br />
                        <div className="cardLocationZip">
                        <CardText><small>Zipcode: {this.props.school.zip}</small></CardText>
                        </div>
                        <br />
                        <div className="cardSchoolSummary">
                        <CardText><small>School Mission: {this.props.school.summary}</small></CardText>
                        </div>
                        <br />
                        <div className="cardPhoneNumber">
                        <CardText><small>School Phone: {this.props.school.phone}</small></CardText>
                        </div>
                        <br />
                        <div className="cardSchoolHours">
                        <CardText><small>School Hours of Operation: {this.props.school.school_hours}</small></CardText>
                        </div>
                        <br />
                        <div className="cardGradesOffered">
                        <CardText><small>Grades: {this.props.school.grades_offered_all}</small></CardText>
                        </div>      
                        <br />
                        <div className="cardDressCode">
                        <CardText><small>Uniforms Required? {this.props.school.dress_code}</small></CardText>
                        </div>     
                        <br />
                        <div className="cardDropOff">
                        <CardText><small>Earliest time to drop off child(ren): {this.props.school.earliest_drop_off_time}</small></CardText>
                        </div>   
                        <br />
                        <div className="cardAfterSchool">
                        <CardText><small>After School Hours (if offered): {this.props.school.after_school_hours}</small></CardText>
                        </div>
                        <br />
                        <div className="cardMetroBus">
                        <CardText><small>Nearest Metro Bus(es): {this.props.school.transportation_bus}</small></CardText>
                        </div>
                        <br />
                        <div className="cardMetroEl">
                        <CardText><small>Nearest Elevated Train: {this.props.school.transportation_el}</small></CardText>
                        </div>   
                        <br />
                        <div className="cardGraduationRate">
                        <CardText><small>Graduation Rate(if applicable): {this.props.school.graduation_rate_school}</small></CardText>
                        </div>     
                        <br />
                        <div className="cardLowIncome">
                        <CardText><small>Low income student count: {this.props.school.student_count_low_income}</small></CardText>
                        </div>
                        <br />
                        <div className="cardRatingStatus">
                        <CardText><small>School Rating Status: {this.props.school.rating_status}</small></CardText>
                        </div>
                        <br />
                        <div className="cardRatingStatement">
                        <CardText><small>School Rating Statement: {this.props.school.rating_statement}</small></CardText>
                        </div>
                        <br />
                    </CardBody>
                </Card>
            </div>  

        )
    }
}

export default SchoolCard; 