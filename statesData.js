
var info = [
    {
        "title":"Andaman and Nicobar Islands", 
        "population":"253045"
    },
    {
        "title":"Andhra Pradesh", 
        "population":"253045"
    },
    {
        "title":"Arunachal Pradesh", 
        "population":"253045"
    },
    {
        "title":"Assam", 
        "population":"253045"
    },
    {
        "title":"Bihar", 
        "population":"253045"
    },
    {
        "title":"Chandigarh", 
        "population":"253045"
    },
    {
        "title":"Chhatisgarh", 
        "population":"253045"
    },
    {
        "title":"Daman and Diu", 
        "population":"253045"
    },
    {
        "title":"Delhi", 
        "population":"253045"
    },
    {
        "title":"Dadra and Nagar Haveli", 
        "population":"253045"
    },
    {
        "title":"Goa", 
        "population":"253045"
    },
    {
        "title":"Gujarat", 
        "population":"253045"
    },
    {
        "title":"Himachal Pradesh", 
        "population":"253045"
    },
    {
        "title":"Haryana", 
        "population":"253045"
    },
    {
        "title":"Jharkhand", 
        "population":"253045"
    },
    {
        "title":"Jammu and Kashmir", 
        "population":"253045"
    },
    {
        "title":"Karnataka", 
        "population":"253045"
    },
    {
        "title":"Kerala", 
        "population":"253045"
    },
    {
        "title":"Lakshadweep", 
        "population":"253045"
    },
    {
        "title":"Maharashtra", 
        "population":"253045"
    },
    {
        "title":"Meghalaya", 
        "population":"253045"
    },
    {
        "title":"Manipur", 
        "population":"253045"
    },
    {
        "title":"Madhya Pradesh", 
        "population":"253045"
    },
    {
        "title":"Mizoram", 
        "population":"253045"
    },
    {
        "title":"Nagaland", 
        "population":"253045"
    },
    {
        "title":"Odisha", 
        "population":"253045"
    },
    {
        "title":"Punjab", 
        "population":"253045"
    },
    {
        "title":"Puducherry", 
        "population":"253045"
    },
    {
        "title":"Rajasthan", 
        "population":"253045"
    },
    {
        "title":"Sikkim", 
        "population":"253045"
    },
    {
        "title":"Telangana", 
        "population":"253045"
    },
    {
        "title":"Tamil Nadu", 
        "population":"253045"
    },
    {
        "title":"Tripura", 
        "population":"253045"
    },
    {
        "title":"Uttar Pradesh", 
        "population":"253045"
    },
    {
        "title":"Uttarakhand", 
        "population":"253045"
    },
    {
        "title":"West Bengal", 
        "population":"253045"
    }
]

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
    document.getElementById("overlay").innerHTML = "<p>State : "+info[document.getElementById(vers).id].title+"</p>"+info[document.getElementById(vers).id].population+"</p>";
    document.getElementById("overlay").style.display = "block";

}

function off() {
    document.getElementById("overlay").style.display = "none";
}

document.getElementById("28").style.fill = "orange";
