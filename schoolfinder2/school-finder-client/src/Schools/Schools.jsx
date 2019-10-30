import React, {Component} from 'react'
import SchoolsList from '../SchoolsList/SchoolsList';
import CardContainer from '../CardContainer/CardContainer';
import SchoolsFilter from '../SchoolsList/SchoolsFilter/SchoolsFilter';




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
    //this only mounts once---any other rendering is because state is changing 
} 
getSchools = async () => {
    const schools = await fetch('https://data.cityofchicago.org/resource/8i6r-et8s.json?is_high_school=N&transportation_el=Blue&');
    const parsedResponse = await schools.json()
    console.log(parsedResponse);
    this.setState({
        schools: parsedResponse
    })
}



//********************** Create ************************/

//This won't work, it's to put stuff inside of the database, I can't do that on a third party api...



//********************** Read *************************/
// getSchools = async () => {
//     const schools = await fetch("https://data.cityofchicago.org/resource/8i6r-et8s.json?school_type=Career academy");
//     const parsedResponse = await schools.json()
//     console.log(parsedResponse);
//     //this.setState schedueles an update to a component's state object. When state changes, the component responds by re-rendering
//     this.setState({
//         schools: parsedResponse
//     })
// }
//*********************** Update ***********************/
// filterSchools = async () => {
//     console.log("user made change in form and submitted, waiting for fetch")
//     const filterASchool = await fetch("https://data.cityofchicago.org/resource/8i6r-et8s.json?school_type=Career academy")
// //         // // method: "GET",
// //         // body: JSON.stringify(formData),
// //         // headers: {
// //         //     "Content-Type": "application/json"
//         // }
// //     })
//     const filteredSchools = await filterASchool.json();
//     //the jquery equivalent of populating the DOM with Ajax data (filteredSchools)
//     console.log(filteredSchools)
//     //componenent's state object should now be updated (via setState)
//     this.setState({
//             schools: filteredSchools
// //         schools: this.state.schools.map(function(school){
// //             if(school.school_id !== school_id){
// //                 return school
// //             }else{
// //                 return parsedResponse
// //             }
// //         })   
//     })
// }



render(){
    return (
        <h1>
            {/* <SchoolsList schools={this.state.schools} filterSchools={this.filterSchools}  /> */}
            {/* <SchoolsFilter schools={this.state.schools}  /> */}
            <CardContainer schools={this.state.schools} />
            {/* <CardContainer /> */}
           
        </h1>
    )
}


}

export default Schools;