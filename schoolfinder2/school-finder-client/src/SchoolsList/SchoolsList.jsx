import React from 'react';


function SchoolsList(props){
    const schools = props.schools.map(function(school){
        return(
            <li key={school.id}>
            <h2>{school.long_name}</h2>
            <h2>{school.school_type}</h2>
            <h2>{school.attendance_boundaries}</h2>
            <h2>{school.location_zip  }</h2>
            <h2>{school.summary}</h2>
            <h2>{school.phone}</h2>
            <h2>{school.school_hours}</h2>
            <h2>{school.grades_offered_all}</h2>
            <h2>{school.dress_code}</h2>
            <h2>{school.earliest_drop_off_time}</h2>
            <h2>{school.after_school_hours}</h2>
            <h2>{school.transportation_bus}</h2>
            <h2>{school.transportation_el}</h2>
            <h2>{school.college_enrollement_rate_school}</h2>
            <h2>{school.student_count_low_income}</h2>



            </li>
        )
    })
    return(
        <div>
            {schools}
        </div>
    )
}

export default SchoolsList;