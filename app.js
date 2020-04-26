
var juliet ;
var beta;
var charlie ;
var myArray = [];
var help;
var requiredArray =[];
const myTable= document.getElementById('myTable');
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");




// Table building part after receiving data

function buildTable(data,callback) {
  let table = document.getElementById("myTable")
  table.innerHTML = ""

  for (let i = 0; i < data.length; i++) {

    var row = `<tr>
            <td>${data[i].location}</td>
            <td>${data[i].placardText}</td>
            <td>${data[i].partNo}</td>
            <td  ><img  class = "modal-class" src="./indigologo.png" alt="yaha kuch tha" ></td>
            </tr>`

    table.innerHTML += row;
  }
  callback()
}

// Table building part after receiving data

//getting the data out of the JSON recving function after receiving the data to call again 
function getData(alpha){

  for(let i = 0; i<alpha.length;i++)
  {
    requiredArray.push(alpha[i])
  }
}






//JSON getting the data from JSon File 

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready:
    //document.getElementById("demo").innerHTML = xhttp.responseText;
    // console.dir(xhttp.responseText)
    var requiredObject = JSON.parse(xhttp.responseText);
     help = requiredObject
  //console.log(requiredObject)

  getData(requiredObject)
    buildTable(help,getClassName);
    
  }
   
}
xhttp.open("GET", "placardDataRev1.json", true);
xhttp.send();

;
//JSON getting the data from JSon File 

// the searching part when input is recieved from user 
function searchTable(xray, data) {
  var filteredData = []
  for (let i = 0; i < data.length; i++) {
    let name = data[i].placardText.toLowerCase()

    if (name.includes(xray)) {
      filteredData.push(data[i])
    }
  }
  console.log(filteredData)
  return filteredData;
}
// the searching part when input is recieved from user 

// Event listener add ing the search function :
let myfunction = function () {
  let xray = document.getElementById("search-input")
  xray = xray.value.toLowerCase();

  console.log(xray)
  var data = searchTable(xray, requiredArray)
  buildTable(data,getClassName)
  console.dir(getClassName())
}

document.getElementById("search-input").addEventListener("keyup",myfunction)
//////Event listener add ing the search function :


// adding a modal to the images 
// there are two steps getting the class names 
// step 2 making the modal pop on click 

var getClassName = function(){

var zulu =  document.getElementsByClassName("modal-class");
var arrayZULU = [...zulu]

var arrayFinal = arrayZULU.map(function(x){x.addEventListener("click" ,function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
)})

console.dir(arrayFinal)
return arrayZULU ;

}

// I got my class names from zulu it is html collection which is live //


// JS for the modal from w3 schools



// Get the image and insert it inside the modal - use its "alt" text as a caption
// this part needs to be put in getClass Name function 
//var img = document.getElementById("myImg");


function modalLinkfunc(img){

img.addEventListener("click" ,function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
)
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.addEventListener("click",function() {
  modal.style.display = "none";
})





/*function Alpha(partNumber, text,location) {
  this.partNumber = partNumber;
  this.location = location;
  this.text = text;
}
let person1 = new Alpha("D2557295024300", "NO CARGO LOADING ABOVE THIS STRIP", "FWD CARGO")
let person2 = new Alpha("D2557295030600", "MAX. LOADING HEIGHT", "FWD CARGO")
let person3 = new Alpha("D2621002420100", "PLACARD, FIRE EXTINGUISHING", "FWD CARGO")

myArray.push(person1, person2, person3)
let person4 = new Alpha("D2557295120600", "NET ARRANGEMENT COMPARTMENT 1 ", "FWD CARGO")
let person5 = new Alpha("002083-03","LIGHTING CARGO COMPT. ON/OFF","FWD CARGO");
let person6 = new Alpha("D9259002420400","LIGHTING CARGO COMPT. ON/OFF","AFT CARGO");
let person7 = new Alpha("D9239051220000","LOADING AREA LIGHT ON/OFF","BULK CARGO");
let person8 = new Alpha("D2557295021000","11","FWD CARGO")
let person9 = new Alpha("S700M1479-224D","WARNING FAN COWL FULL OPENING INSTRUCTIONS SLATS MUST BE RETRACTED AND INHIBITED BEFORE YOU FULLY OPEN THE FAN COWL","NEO PW ENGINE")
let person10 = new Alpha("S700M1751-97D","LOOK","NEO PW ENGINE")
myArray.push(person4,person5,person6,person7,person8,person9,person10)




$.ajax({
  method:'GET',
  url:'https://reqres.in/api/users',
  success:function(response){
    help= response.data
    myArray=help
//console.dir(help)
  }
})

console.log(myArray)

*/
