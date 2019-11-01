import React, {Component} from 'react'
import SchoolsList from '../SchoolsList/SchoolsList';
import CardContainer from '../CardContainer/CardContainer';
import SchoolsFilter from '../SchoolsList/SchoolsFilter/SchoolsFilter';
import FormInput from '../FormInput';




class Schools extends Component {
    constructor(){
        super();
        this.state = {
            schools: []
        }
}


handleFormInput = (formData) => {
    console.log(formData);
    this.getSchools(formData) 
    this.setState({
        // attendance_boundaries: formData.attendance_boundaries
        // transportation_el: formData,
        // school_type: formData
        formData : formData
        // transportation_el: formData

    })

}
// componentDidMount(){
//     console.log("component is mounting")
//     this.getSchools()
//     // this only mounts once---any other rendering is because state is changing 
// } 
getSchools = async (formData) => {

    // code snippet below created with help from: https://howchoo.com/g/nwywodhkndm/how-to-turn-an-object-into-query-string-parameters-in-javascript
    const searchString = Object.keys(formData).map(key => key + '=' + formData[key]).join('&');
    const schools = await fetch(`https://data.cityofchicago.org/resource/8i6r-et8s.json?${searchString}`);
    console.log(searchString)
    // const schools = await fetch(`https://data.cityofchicago.org/resource/8i6r-et8s.json?${attendance}&${type}&${zipCode}&${dress}&${dropOff}&${metroBus}&${elTrain}&${rating}`);
    // const schools = await fetch(`https://data.cityofchicago.org/resource/8i6r-et8s.json?${attendance}`);
    const parsedResponse = await schools.json()
    console.log(parsedResponse);
    //I need a variable to store what's returned after requested fetch criteria has been filtered
    //now I need to get fetchFilter to render on the page and it needs to connect with the schoolcards in the CardContainer
    // this.setState({
    //     schools: parsedResponse
    // //     schools: this.state.schools.map(function(school){
    // //         if(school.school_id !== school_id){
    // //             return school
    // //         }else{
    // //             return parsedResponse
    //         // }
    //     // })  
    // })
}

// somehow use the {schoolcards} and connect it to the filter url seach results


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
        // schools: this.state.schools.map(function(school){
        //     if(school.school_id !== school_id){
        //         return school
        //     }else{
        //         return parsedResponse
        //     }
        // })   
//     })
// }



render(){
    return (
        <h1>
            {/* <SchoolsList schools={this.state.schools} filterSchools={this.filterSchools}  /> */}
            {/* <SchoolsFilter schools={this.state.schools}  /> */}
            <FormInput handleFormInput= {this.handleFormInput} />
            <br />
            <br />
            <CardContainer schools={this.state.schools} />
            {/* <CardContainer /> */}
         
           
        </h1>
    )
}


}

export default Schools;