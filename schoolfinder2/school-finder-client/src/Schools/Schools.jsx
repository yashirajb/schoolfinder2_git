import React, {Component} from 'react'
import SchoolsList from '../SchoolsList/SchoolsList';




class Schools extends Component {
    constructor(){
        super();
        this.state = {
            schools: []
        }
}

componentDidMount(){
    console.log("component is mounting")
    this.getSchools()
} 
// getSchools = async () => {
//     const schools = await fetch('https://data.cityofchicago.org/resource/8i6r-et8s.json?school_id=400009');
//     const parsedResponse = await schools.json()
//     console.log(parsedResponse);
//     this.setState({
//         schools: parsedResponse
//     })
// }
getSchools = async () => {
    const schools = await fetch('https://data.cityofchicago.org/resource/8i6r-et8s.json');
    const parsedResponse = await schools.json()
    console.log(parsedResponse);
    this.setState({
        schools: parsedResponse.data
    })
}

filterSchools = async (formData) => {
    const filterASchool = await fetch('https://data.cityofchicago.org/resource/8i6r-et8s.json?school_id', {
        method: "PUT",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const parsedResponse = await filterASchool.json();
    console.log(parsedResponse)
    this.setState({
        schools: this.state.schools.map(function(school){
            if(school.school_id !==school_id){
                return school
            }else{
                return parsedResponse.data
            }
        })   
    })
}



render(){
    return (
        <h1>
            <SchoolsList schools={this.state.schools} filterSchools={this.filterSchools} />
        </h1>
    )
}


}

export default Schools;