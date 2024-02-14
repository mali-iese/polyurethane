var m;
function polyurethane(){
getDetails()
let d = 1300
let v = (m/d)*1000
let p = v*0.1;
var resultContainer = document.getElementById("result-container");
resultContainer.innerHTML=" ";
var resultHeading = document.createElement("h2");
resultHeading.innerHTML = "Volume of polyurethane is " + v + "mL      AND         " + "PARAFFIN OIL NEEDED IS " + p + "mL";
resultContainer.appendChild(resultHeading);
}
function getDetails(){
    m = document.getElementById("polyUrethane").value;
        return m
}