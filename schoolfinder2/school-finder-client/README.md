# Chicago Public School Finder App 2.0

## Application Goal: 

Original Application Goal from 1st iteration: 

The Chicago School Finder app's ultimate goal is to enable a user to input a keyword in one of (or in) multiple search boxes and return all public K-12 schools that match the keyword entered. This app was developed with a particular user in mind in an attempt to alleviate stressors associated with being a lower-income caregiver who resides in a large urban area. A common problem lower-income caregivers of school-aged children experience is having limited time, money, and/or mobility to make a well-informed decision about what school(s) the children in their care should attend. The Chicago School Finder App increases the caregiver's ability to quickly find or eliminate schools based on the school's zipcode, the school's rating, whether the school has a dress code (uniform) policy, or if a school is proximate to public transit.  

Application Goal for Version 2.0: 

With version 2.0, The Chicago School Finder App's ultimate goal is still to enable a user to input a keyword (or search term) into multiple search boxes and return all K-12 public schools that match the keyword (or search term) entered. This iterated version of the app does just that. A user is able to enter multiple search terms and submit once, enabling the app to present filtered school results to the user. The intended user for the first version is still the intended user for the iterated version, although anyone who needs to search for filtered Chicago schools can use the app. 

## API Used: 

API Used for 1st iteration: 

The API used for this project was through the city of Chicago website (https://data.cityofchicago.org/). The app uses AJAX to make requests from the Chicago API to the Chicago Public School Finder App, focusing on the following search criteria: 
 
 - Zipcode
 - School Rating
 - Dress Code
 - Elevated Train Accessibility
 - Metro Bus Accessibility

 API Used for Version 2.0:

The API used for version 2.0 was the same as the API used for the 1st iteration, although the search criteria has been slightly altered to improve filtering performance. The iterated version focuses on the following search criteria:

 
 - Elevated Train Accessibility 
 - School Category
 - School Rating
 - School Type
 - Dress Code


 Both Zipcode and Metro Bus accessibility search criteria were eliminated for the second iteration of the app as their search results typically yielded only one to a few schools, which often created the impression that the users other inputted criteria failed to return results. Eliminating zipcode and metro bus search terms enables the user to see more search results, which they can then examine to find nearest zipcode and the nearest Metro Bus(es). 
 
## Other Frameworks used:
 
Frameworks used for 1st iteration: 

The app primarily uses bootstrap for styling, more specifically for the creation of the forms used throughout the app. The app also utilizes the JQuery javascript library to enable the app to properly display data retrieved from the Chicago API onto the browser after each AJAX request is made. 

Frameworks used for version 2.0: 

The second iteration of the app uses React and Reactstrap (for styling)


## Changes/Improvements :

Changes needed and suggested improvements for 1st iteration: 

One way this app could be immediately improved is by incorporating the use of a scroll feature for all returned schools. Another useful improvement would be to create the ability for users to capture the school(s) that match the total sum of their search inputs. 

Changes needed and suggested improvements for version 2.0: 

The second iteration of the app successfully created the ability for users to capture the schools that match the total sum of their search criteria. The app still does not utilize the continuous scroll feature for all retureend schoos



## Wireframes :

Wireframes for version 2.0: 

