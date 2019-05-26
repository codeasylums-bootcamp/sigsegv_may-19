function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    console.log(x);
    console.log(y);
    document.getElementById("overlay").style.top = y-document.getElementById("overlay").style.height;
    document.getElementById("overlay").style.left = x-document.getElementById("overlay").style.width;
}

function on(vers) {
    showCoords(event);
    console.log(document.getElementById(vers).id);
    let stateID =   document.getElementById(vers).id;
    document.getElementById("overlay").innerHTML = "<p style=\"font-weight:bold;font-size:16px\">State : "+info[stateID].title+"</p><p>Majority Party: <span style=\"color:yellow;font-weight:bold;\">"+info[stateID].topParty+"</span></p><p>No Of Seats: "+info[stateID].noOFSeats+"</p>";
    document.getElementById("overlay").style.display = "block";

}

function off() {
    document.getElementById("overlay").style.display = "none";
}


function colorMap(){
    for(var i = 0 ; i < 36 ; i++){
        let stateID =   document.getElementById(i).id;
        if(info[stateID].topParty == "Indian National Congress"){
            document.getElementById(i).style.fill = "green";
            // document.getElementById(i).style.background="linear-gradient(to bottom, #ff6600 0%, #00cc00 94%)";
        }
        else if(info[stateID].topParty == "Bharatiya Janata Party"){
            document.getElementById(i).style.fill = "orange";
            // document.getElementById(i).style.background="linear-gradient(to bottom, #ff6600 0%, #00cc00 94%)";
        }
        else document.getElementById(i).style.fill = "blue";
    }
}

colorMap();


function showData(){
    window.onbeforeunload = function() { return true }
    //gets table
   oTable=  document.getElementsByClassName("table-party")[0];

//gets rows of table
var rowLength = oTable.rows.length;

//loops through rows    
for (i = 0; i < rowLength; i++){

   //gets cells of current row
   var oCells = oTable.rows.item(i).cells;

   //gets amount of cells of current row
   var cellLength = oCells.length;

   //loops through each cell in current row
   for(var j = 0; j < cellLength; j++){
      /* get your cell info here */
      /* var cellVal = oCells.item(j).innerHTML; */
      console.log(oCells.item(j).innerText);
   }
}
}


