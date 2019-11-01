import React, {Component} from 'react'



class FormInput extends Component{
    constructor(){
        super();
        this.state = {
            // transportation_el : null,
            // school_type :"",
            dress_code : null,
            zip : null
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
        {/* <form onSubmit = {this.handleSubmit}>
        <div class="form-group">
            <label htmlFor="transportation_el">Select Nearest El Train:</label>
            <select name="transportation_el" onChange={this.handleChange}>
       

                <option value="">No Selection</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Orange">Orange</option>
                <option value="Green">Green</option>
                <option value="Brown">Brown</option>
                <option value="Pink">Pink</option>
            </select>
        <input type="submit" value="Submit"/> 
        </div>
   
    </form> */}
            <br />
        {/* <form onSubmit = {this.handleSubmit}>
        <div class="form-group2">
            <label htmlFor="school_type">Select School Type:</label>
            <select name="school_type" onChange={this.handleChange}>

                <option value="">No Selection</option>
                <option value="Neighborhood">Neighborhood</option>
                <option value="Charter">Charter</option>
                <option value="Magnet">Magnet</option>
                <option value="Small">Small</option>
                <option value="Citywide-Option">Citywide Option</option>
                <option value="Selective enrollment">Selective Enrollment</option>
                <option value="Regional gifted center">Regional Gifted Center</option>
                <option value="Special Education">Special Education</option>
                <option value="Military academy">Military Academy</option>
                <option value="Classical">Classical</option>
                <option value="Contract">Contract</option>
                <option value="Career academy">Career Academy</option>
            </select>
            <input type="submit" value="Submit"/> 
        </div>
        </form> */}

        <br/>

        <form onSubmit = {this.handleSubmit}>
        <div class="form-group3">
            <label htmlFor="dress_code">Select Dress Code Preference:</label>
            <select name="dress_code" onChange={this.handleChange}>

                <option value="">No Selection</option>
                <option value="Y">Yes</option>
                <option value="N">No</option>
            </select>
            <input type="submit" value="Submit"/> 
        </div>
        
    </form>

    <form onSubmit = {this.handleSubmit}>
        <div class="form-group4">
            <label htmlFor="zip">Select Zipcode:</label>
            <select name="zip" onChange={this.handleChange}>

                <option value="">No Selection</option>
                <option value="60602">60602</option>
                <option value="60605">60605</option>
                <option value="60607">60607</option>
                <option value="60608">60608</option>
                <option value="60609">60609</option>
                <option value="60610">60610</option>
                <option value="60612">60612</option>
                <option value="60613">60613</option>
                <option value="60614">60614</option>
                <option value="60615">60615</option>
                <option value="60616">60616</option>
                <option value="60617">60617</option>
                <option value="60618">60618</option>
                <option value="60619">60619</option>
                <option value="60620">60620</option>
                <option value="60621">60621</option>
                <option value="60622">60622</option>
                <option value="60623">60623</option>
                <option value="60624">60624</option>
                <option value="60625">60625</option>
                <option value="60626">60626</option>
                <option value="60627">60627</option>
                <option value="60628">60628</option>
                <option value="60629">60629</option>
                <option value="60630">60630</option>
                <option value="60631">60631</option>
                <option value="60632">60632</option>
                <option value="60633">60633</option>
                <option value="60634">60634</option>
                <option value="60635">60635</option>
                <option value="60636">60636</option>
                <option value="60637">60637</option>
                <option value="60638">60638</option>
                <option value="60639">60639</option>
                <option value="60640">60640</option>
                <option value="60641">60641</option>
                <option value="60642">60642</option>
                <option value="60643">60643</option>
                <option value="60644">60644</option>
                <option value="60645">60645</option>
                <option value="60646">60646</option>
                <option value="60647">60647</option>
                <option value="60649">60649</option>
                <option value="60651">60651</option>
                <option value="60652">60652</option>
                <option value="60653">60653</option>
                <option value="60655">60655</option>
                <option value="60656">60656</option>
                <option value="60657">60657</option>
                <option value="60659">60659</option>
                <option value="60660">60660</option>
                <option value="60661">60661</option>
                <option value="60707">60707</option>
                <option value="60827">60827</option>

            </select>
        <input type="submit" value="Submit"/> 
        </div>
        </form>

        <br/>

    </div>
        )
    }
 
}







export default FormInput;