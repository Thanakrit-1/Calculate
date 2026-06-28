function calculate() {
    let num1 = document.getElementById('numberA').value;
    let num2 = document.getElementById('numberB').value;
    let operator = document.getElementById('op').value;
    let result_tag = document.getElementById("result");

    let path = "";
    if (operator === "+") path = "add";
    else if (operator === "-") path = "subtract";
    else if (operator === "*") path = "multiply";
    else if (operator === "/") path = "divide";
    
    fetch("http://localhost:3000/" + path + "?a=" + num1 + "&b=" + num2)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
        console.log(data)
            
        if (data.error) {
            result_tag.innerText = "Error: " + data.error;

        } else {
            result_tag.innerText = "Result: " + data.Answer;
        }
    })
}