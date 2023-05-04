function clearScreen(){
    document.getElementById("result").value = "";
}
function displayValue(value){
    document.getElementById("result").value += value;
}
function calculate(){
    var equation = document.getElementById("result").value;
    var result = eval(equation);
    document.getElementById("result").value = result;
}
