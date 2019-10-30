$(document).ready(function(){

    // $('body').append("<p>JQ Works!</p>")
    //********************** */
    let schools = [];
    $('#zipcode-search').submit(function(e){
            e.preventDefault();
            // console.log("form is good!")
            const zipcodeData = $('#zip-search-request').val();
            //Const zipcodeData = 
            // console.log(zipcodeData);
            const schoolRequest = {
            url: `https://data.cityofchicago.org/resource/76dk-7ieb.json?&location_zip=${zipcodeData}`, 
            success: (data)=>{
                for(let i=0; i < data.length; i ++){
                    const schoolDistrict = data[i]; 
                    console.log(schoolDistrict);
                    console.log(schoolDistrict.long_name);
                    if(i === 0){
                       
                        $('.firstSchool').append(schoolDistrict.long_name)
                    }
                    if(i === 1){
                
                        $('.firstSchool2').append(schoolDistrict.long_name)
                    }
                    if(i === 2){
                    
                        $('.firstSchool3').append(schoolDistrict.long_name)
                    };
                //     switch(schoolDistrict) {
                //         case 0:
                //         case 1:
                //         case 2:
                //         case 3:
                //         case 4:
                //         case 5:
                //             result = $('.firstSchool').append("all done");
                //       }
                // }
    
            
    
    
                // if(appendNow === zipcodeData)
                // console.log($('#zipcode').text(appendNow.location_zip))
              
                // var appendNow = data[i];
                // console.log(appendNow)
                // $('#zipcode').text(appendNow.location_zip);
            // schools.push(data)
            // const appendNow = 
            // console.log(appendNow)
            // console.log(data[i].location_zip);
                // $('#zipcode').text()
                // const eachZip = 
                // zipcodeData.append(eachZip)
    
        },
    
    
        error: ()=>{
            console.log('bad request');
    
        }
    
        
    
       }     
        
    
    $.ajax(schoolRequest)
    
    });

});