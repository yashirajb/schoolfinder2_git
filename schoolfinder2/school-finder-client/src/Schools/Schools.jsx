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
getSchools = async () => {
    const schools = await fetch('https://data.cityofchicago.org/resource/8i6r-et8s.json?school_id=400009');
    const parsedResponse = await schools.json()
    console.log(parsedResponse);
    this.setState({
        schools: parsedResponse
    })
}
render(){
    return (
        <h1>
            <SchoolsList schools={this.state.schools} />
        </h1>
    )
}


}

export default Schools;