function calculate() {
    let num1 = document.getElementById('numberA').value;
    let num2 = document.getElementById('numberB').value;
    let operator = document.getElementById('op').value;

    let result_tag = document.getElementById("result");
    if (operator === "/" &&  Number(num2) === 0) {
        result_tag.innerText = "Result: Error";
        return;
    }
    fetch(`http://localhost:3000/calculate?a=${num1}&b=${num2}&op=${encodeURIComponent(operator)}`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
        console.log(data)
            
        if (data.error) {
            result_tag.innerText = "Result: Error - " + data.error;

        } else {
            result_tag.innerText = "Result: " + data.Answer;
        }
        })
}