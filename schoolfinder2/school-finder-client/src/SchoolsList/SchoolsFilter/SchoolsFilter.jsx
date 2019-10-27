import React, {Component} from 'react'


class SchoolFilter extends Component{
    constructor(props){
        super(props);
        this.state = {
            long_name: props.school.long_name,
            school_type: props.school.school_type,
            attendance_boundaries: props.school.attendance_boundaries,
            location_zip: props.school.location_zip,
            summary: props.school.summary,
            phone: props.school.phone,
            school_hours: props.school.school_hours,
            grades_offered_all: props.school.grades_offered_all,
            dress_code: props.school.dress_code,
            earliest_drop_off_time: props.school.earliest_drop_off_time,
            after_school_hours: props.school.after_school_hours,
            transportation_bus: props.school.transportation_bus,
            transportation_el: props.school.transportation_el,
            college_enrollment_rate_school: props.school.enrollment_rate_school,
            student_count_low_income: props.school.student_count_low_income
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name] : e.currentTarget.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Update")
        this.props.filterSchools(this.props.school.school_id, this.state)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                School Name: <input type="text" name="long_name" onChange={this.handleChange} value={this.state.long_name}/>
                Type of School: <input type="text" name="school_type" onChange={this.handleChange} value={this.state.school_type}/>
                Attendance Boundaries: <input type="text" name="attendance_boundaries" onChange={this.handleChange} value={this.state.attendance_boundaries}/>
                Zipcode: <input type="text" name="location_zip" onChange={this.handleChange} value={this.state.location_zip}/>
                School Summary: <input type="text" name="summary" onChange={this.handleChange} value={this.state.summary}/>
                School Phone Number: <input type="text" name="phone" onChange={this.handleChange} value={this.state.phone}/>
                School Day Hours <input type="text" name="school_hours" onChange={this.handleChange} value={this.state.school_hours}/>
                Grades: <input type="text" name="grades_offered_all" onChange={this.handleChange} value={this.state.grades_offered_all}/>
                Dress Code: <input type="text" name="dress_code" onChange={this.handleChange} value={this.state.dress_code}/>
                Earliest Drop-Off Time: <input type="text" name="earliest_drop_off_time" onChange={this.handleChange} value={this.state.earliest_drop_off_time}/>
                After School Hours: <input type="text" name="after_school_hours" onChange={this.handleChange} value={this.state.after_school_hours}/>
                Nearest Metro Bus: <input type="text" name="transportation_bus" onChange={this.handleChange} value={this.state.transportation_bus}/>
                Nearest Elevated Train: <input type="text" name="transportation_el" onChange={this.handleChange} value={this.state.transportation_el}/>
                College Enrollment Statistics: <input type="text" name="college_enrollement_rate_school" onChange={this.handleChange} value={this.state.college_enrollement_rate_school}/>
                Number of Low Income Students: <input type="text" name="student_count_low_income" onChange={this.handleChange} value={this.state.student_count_low_income}/>

                <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default SchoolsFilter; 