import React, {Component} from 'react'



class FormInput extends Component{
    constructor(){
        super();
        this.state = {
            // attendance_boundaries: ""
            transportation_el : null 
        }

    }
 
    handleChange = (e) => {
        //e pararmeter is used when responding to an event on the page
        //state will update after e.target(which represents the input) is entered. We'll then add e.target.name 
        console.log(e.target.value);
        //attach this function to the input so that when the input changes it triggers this handleChange method. This function will respond to the change event
        this.setState({
       //we have access to the name property inside the input and what the user has filled in (value), so: 
       [e.target.name] : e.target.value     

        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state.attendance_boundaries);
        this.props.handleFormInput(this.state)
    }

    render(){
    return(
        <div>
            <h1>Find a school:</h1>
            <br />
        <form onSubmit = {this.handleSubmit}>
        <div class="form-group">
            <label htmlFor="transportation_el">Select Nearest El Train:</label>
            <select name="transportation_el" onChange={this.handleChange}>
            {/* <input name="transportation_el" onChange={this.handleChange}/> */}
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Orange">Orange</option>
                <option value="Green">Green</option>
                <option value="Brown">Brown</option>
                <option value="Pink">Pink</option>
            </select>
        <input type="submit" value="Submit"/> 
        </div>
        {/* <label htmlFor="attendance_boundaries">Attendance Boundaries</label>
        <input type="text" name="attendance_boundaries" onChange={this.handleChange}/>
        <input type="submit" value="Input Attendance Boundary Preference"/> */}
    </form>
    </div>
    )
}
 




}







export default FormInput;