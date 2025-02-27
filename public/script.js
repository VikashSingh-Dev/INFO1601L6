// if a record looks like.
let record = {
    id: 1,
    name: "bob's"
    brewery_type: "fire",
    website_url:"https://bobs.com"
 } 
 
 //*note the use of backticks
 //using string interpolation
 //a row in the table would look like;
 
 Let row = `<tr> 
     <td>${record.id}</td>
     <td>${record.name}</td>
     <td>${record.brewery_type}</td>
     <td>${recoard.website_url}</td>    
 </tr>`; 