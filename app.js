var myArray = [];

function Alpha(partNumber, text,location) {
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
let person7 = new Alpha("D9239051220000","LOADING AREA LIGHT ON/OFF","BULK CARGO")
myArray.push(person4,person5,person6,person7)



/*
$.ajax({
  method:'GET',
  url:'https://reqres.in/api/users',
  success:function(response){
   let  help= response.data
    
   buildTable(help) 
  }
})
*/






function buildTable(data) {
  let table = document.getElementById("myTable")
table.innerHTML=""

  for (let i = 0; i < data.length; i++) {

    var row = `<tr>
            <td>${data[i].location}</td>
            <td>${data[i].text}</td>
            <td>${data[i].partNumber}</td>
            </tr>`

    table.innerHTML += row;
  }

}

function searchTable(xray,data)
{
  var filteredData = []
for( let i =0 ;i<data.length;i++){
  let name = data[i].text.toLowerCase()

  if(name.includes(xray))
  {filteredData.push(data[i])}
}
console.log(filteredData)
return filteredData;
}


buildTable(myArray)
let myfunction = function(){
  let xray = document.getElementById("search-input")
  xray = xray.value.toLowerCase();

  console.log(xray)
 var data = searchTable(xray,myArray)
  buildTable(data)
}
 document.getElementById("search-input").addEventListener("keyup",myfunction)