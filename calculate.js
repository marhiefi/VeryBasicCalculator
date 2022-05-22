
function Calculate(){
    let firstNumber = document.getElementById("fNumber").value;
    let secondNumber = document.getElementById("sNumber").value;
    let selectOp = document.getElementById("operator").value;
    let total 

    if (firstNumber != '' || secondNumber != '') {
        if ((isNaN(firstNumber) || isNaN(secondNumber))){
        alert(`Fill Both Fields With Valid Numbers.
No Special Characters or Letters Allowed.`)
        } 
    }

    if (firstNumber == null || firstNumber == "" ||
    secondNumber == null || secondNumber == "") {
    alert(`Fill Both Fields With Valid Numbers to Perform Calculation.
No Empty Fields Allowed.`);
    return false
    }
    
    if (selectOp === '+') {
        total = Number(firstNumber) + Number(secondNumber);
    }
    else if (selectOp === "-") {
        total = Number(firstNumber) - Number(secondNumber);
    }
    else if (selectOp === "*") {
        total = Number(firstNumber) * Number(secondNumber);
    }
    else if (selectOp === "/") {
        total = Number(firstNumber) / Number(secondNumber);
    }
    else  alert("Please Select A Valid Operator");

    document.getElementById("total").value = total;
}