import React, {Component} from 'react'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';



class SchoolsFilter extends Component{
    constructor(props){
        super(props);
        this.state = {
            long_name: props.school.long_name,
            //?long_name=Abraham Lincoln Elementary School
            school_type: props.school.school_type,
            // ?school_type=Career academy----go through and find all options for school type
            attendance_boundaries: props.school.attendance_boundaries,
            //?attendance_boundaries=N
            zip: props.school.zip,
            //?zip=60602
            summary: props.school.summary,
            phone: props.school.phone,
            //?phone=3122254668
            school_hours: props.school.school_hours,
            grades_offered_all: props.school.grades_offered_all,
            //?grades_offered_all=10,11,12
            dress_code: props.school.dress_code,
            //?dress_code=N
            earliest_drop_off_time: props.school.earliest_drop_off_time,
            //?earliest_drop_off_time=06:00 AM
            after_school_hours: props.school.after_school_hours,
            //?after_school_hours=02:45 PM - 05:30 PM
            transportation_bus: props.school.transportation_bus,
            //?transportation_bus=103
            transportation_el: props.school.transportation_el,
            //?transportation_el=Blue
            college_enrollment_rate_school: props.school.enrollment_rate_school,
            //?college_enrollment_rate_school=0
            student_count_low_income: props.school.student_count_low_income,
            //?student_count_low_income=0 --number datatype, query options available 
            rating_status: props.school.rating_status,
            //?rating_status=Good Standing
            rating_statement: props.school.rating_statement
            //?rating_statement=This school did not have enough data for a 2015-2016 Performance Policy Rating.

        }
    }

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name] : e.currentTarget.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Update from button submit")
        this.props.filterSchools(this.props.school.school_id, this.state)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                School Name: <input type="text" name="long_name" onChange={this.handleChange} value={this.state.long_name}/>
                Type of School: <input type="text" name="school_type" onChange={this.handleChange} value={this.state.school_type}/>
                <FormGroup>
        <Label for="exampleSelectMulti">Type of School</Label>
        <Input
          type="select"
          name="school_type"
          id="exampleSelectMulti"
          onChange={this.handleChange}
          value={this.state.school_type}
          multiple
        >
          <option>Neighborhood</option>
          <option>Charter</option>
          <option>Magnet</option>
          <option>Small</option>
          <option>Citywide-Option</option>
          <option>Selective Enrollment</option>
          <option>Regional gifted center </option>
          <option>Special Education</option>
          <option>Military academy</option>
          <option>Classical</option>
          <option>Contract</option>
          <option>Career academy</option>
        </Input>
      </FormGroup>
                Attendance Boundaries: <input type="text" name="attendance_boundaries" onChange={this.handleChange} value={this.state.attendance_boundaries}/>
                Zipcode: <input type="text" name="zip" onChange={this.handleChange} value={this.state.zip}/>
                School Summary: <input type="text" name="summary" onChange={this.handleChange} value={this.state.summary}/>
                School Phone Number: <input type="text" name="phone" onChange={this.handleChange} value={this.state.phone}/>
                School Day Hours <input type="text" name="school_hours" onChange={this.handleChange} value={this.state.school_hours}/>
                Grades: <input type="text" name="grades_offered_all" onChange={this.handleChange} value={this.state.grades_offered_all}/>
                Dress Code: <input type="text" name="dress_code" onChange={this.handleChange} value={this.state.dress_code}/>
                Earliest Drop-Off Time: <input type="text" name="earliest_drop_off_time" onChange={this.handleChange} value={this.state.earliest_drop_off_time}/>
                After School Hours: <input type="text" name="after_school_hours" onChange={this.handleChange} value={this.state.after_school_hours}/>
                Nearest Metro Bus: <input type="text" name="transportation_bus" onChange={this.handleChange} value={this.state.transportation_bus}/>
                Nearest Elevated Train: <input type="text" name="transportation_el" onChange={this.handleChange} value={this.state.transportation_el}/>
                Graduation Rate(if applicable): <input type="text" name="graduation_rate_school" onChange={this.handleChange} value={this.state.graduation_rate_school}/>
                Number of Low Income Students: <input type="text" name="student_count_low_income" onChange={this.handleChange} value={this.state.student_count_low_income}/>
                School Rating: <input type="text" name="rating_statement" onChange={this.handleChange} value={this.state.rating_statement}/>
                <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default SchoolsFilter; 