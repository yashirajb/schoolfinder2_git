import React, {Component} from 'react'



class FormInput extends Component{
    constructor(){
        super();
        this.state = {
            // transportation_el : null,
            // school_type :null,
            // dress_code : null,
            // // zip : null,
            // // transportation_bus: null
            // // rating_statement: null
            // overall_rating : null 
            

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
            <div className="FormInputTop">
            <div className='findaschool'>
            <h1>Find a school:</h1>
            </div>
            </div>
            <br />
            <br/>
        <form onSubmit = {this.handleSubmit}>
        <div className="custom-select">
            <label htmlFor="transportation_el"><div className="eltrain">Select Nearest El Train:</div></label>
            <select name="transportation_el" onChange={this.handleChange}>
       
       <br/>
       <br/>

                <option value="">No Selection</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Orange">Orange</option>
                <option value="Green">Green</option>
                <option value="Brown">Brown</option>
                <option value="Pink">Pink</option>
            </select>
            <br />
            <br/>
        <input className="schoolelbutton" type="submit" value="Submit Individual Selection"/>
        </div>
    </form>
    <br />
    <br/>

    <form onSubmit = {this.handleSubmit}>
        <div className="custom-select">
            <label htmlFor="primary_category"><div className="schoolcategory">Select School Category:  </div></label>
            {/* <br/> */}
            <select name="primary_category" onChange={this.handleChange}>
       

                <option value="">No Selection</option>
                <option value="ES">Elementary School</option>
                <option value="MS">Middle School</option>
                <option value="HS">High School</option>

            </select>
            <br/>
            <br />
        <input className="schoolcategorybutton" type="submit" value="Submit Individual Selection"/> 
        </div>
   
    </form>
            <br />
            <br/>
            <form onSubmit = {this.handleSubmit}>
        <div className="custom-select">
            {/* <label htmlFor="rating_statement">Select Rating Statement:</label>
            <select name="rating_statement" onChange={this.handleChange}> */}
            <label htmlFor="overall_rating"><div className="schoolrating">Select School Rating:</div></label>
            <select name="overall_rating" onChange={this.handleChange}>
       

                <option value="">No Selection</option>
                {/* <option value="Level 1+">Highest Performing School</option> */}
                <option value="Level 1">Level 1, High Performing School</option>
                {/* <option value="Level 2+">Middle Performing School</option> */}
                <option value="Level 2">Level 2, Low Performing School</option>
                {/* <option value="Level 3+">Lower Performing School</option> */}
                <option value="Level 3">Level 3, Lowest Performing School</option>
                <option value="Inability to Rate">No Performance Data</option>
               
                {/* <option value="This school received a Level 1+ rating, which is the highest rating at CPS. This rating is based on the CPS School Quality Rating Policy (SQRP).  To learn more, visit:  http://cps.edu/sqrp .">Highest Performing School</option>
                <option value="This school received a Level 1 rating, which is a high rating at CPS. This rating is based on the CPS School Quality Rating Policy (SQRP).  To learn more, visit:  http://cps.edu/sqrp .">High Performing School</option>
                <option value="This school received a Level 2+ rating, which is a middle rating at CPS. This rating is based on the CPS School Quality Rating Policy (SQRP).  To learn more, visit:  http://cps.edu/sqrp .">Middle Performing School</option>
                <option value="This school received a Level 2 rating, which is a low rating at CPS. This rating is based on the CPS School Quality Rating Policy (SQRP).  To learn more, visit:  http://cps.edu/sqrp .">Low Performing School</option>
                <option value="This school received a Level 3 rating, which is the lowest rating of academic performance at CPS. This rating is based on the CPS School Quality Rating Policy (SQRP).  To learn more, visit:  http://cps.edu/sqrp .">Lowest Performing School</option>
                <option value="This school did not have enough data for a 2015-2016 Performance Policy Rating.">No Performance Data</option> */}
            </select>
            <br/>
            <br />
        <input className="schoolratingbutton" type="submit" value="Submit Individual Selection"/>  
        </div>
   
    </form>
    
        <br />
        <br/>

        <form onSubmit = {this.handleSubmit}>
        <div className="custom-select">
            <label htmlFor="school_type"><div className="schooltype"> Select School Type:</div></label>
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
            <br/>
            <br />
            <input className="schooltypebutton" type="submit" value="Submit Individual Selection"/>  
        </div>
       
        </form>



{/* <form onSubmit = {this.handleSubmit}>
        <div class="form-group5">
            <label htmlFor="transportation_bus">Select Nearest Metro Bus:</label>
            <select name="transportation_bus" onChange={this.handleChange}>

                <option value="">No Selection</option>
                
                <option value="9">9</option>
                <option value="34">34</option>
                <option value="47">47</option>
                <option value="82">82</option>
                <option value="8A, 108">8A, 108</option>
                <option value="21, 94">21, 94</option>
                <option value="34, 111, 119">34, 111, 119</option>
                <option value="66, 85">66, 85</option>
                <option value="12, 18, 52">12, 18, 52</option>
                <option value="49, 70">49, 70</option>
                <option value="9, 65, 66">9, 65, 66</option>
                <option value="9, 65, 66">9, 65, 66</option>
                <option value="8, 67">8, 67</option>
                <option value="8A">8A</option>
                <option value="52A">52A</option>

               
              
            </select>
            <input type="submit" value="Submit"/> 
        </div>
        
    </form> */}


        <br/>
        <br/>

        <form onSubmit = {this.handleSubmit}>
        <div className="custom-select">
            <label htmlFor="dress_code"> <div className="dresscode">Select Dress Code Preference:</div></label>
            <select name="dress_code" onChange={this.handleChange}>

                <option value="">No Selection</option>
                <option value="Y">Yes</option>
                <option value="N">No</option>
            </select>
            <br />
            <br/>
            <input className="schooldressbutton"type="submit" value="Submit Individual Selection"/> 

            <br/>
            <br/>
        </div>
        
        <br />
        {/* <div className="submitAll">

        <input type="submit" value="Submit All Selections"/>

     </div> */}

     <br />
     <br />
            <div className="submitAll">
            <input className="submitbutton" type="submit" value="Submit All Selections"/>  
            </div>


    </form>

  


    {/* <form onSubmit = {this.handleSubmit}>
        <div className="form-group4">
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
        </form> */}

        <br/>
        <br/>

        <div className="searchresults"> Search results: </div>

    </div>
        )
    }
 
}







export default FormInput;