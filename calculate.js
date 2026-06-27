const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const Port = 3000

function Cal(a, b, op) {
    let numberA = Number (a);
    let numberB = Number (b);
    if (isNaN(numberA) || isNaN(numberB))
        return {error : "invalid numbers"};
    let result ;
    switch (op) {
        case "+" : result = numberA + numberB; break;
        case "-" : result = numberA - numberB; break;
        case "*" : result = numberA * numberB; break;
        case "/" : result = numberA / numberB; break;
        default: return {error : "invalid operator"};
    }
    return result;
}

app.get('/calculate', (req, res) => {
    let a = req.query.a;
    let b = req.query.b;
    let op = req.query.op;

    let result = Cal(a, b, op);
    if (result.error) {
        return res.status(404).json({
            "error": result.error
        })
    }

    res.json({
        "Answer": result
    })
})

app.listen(3000, () => {
    console.log("Server starts successfully")
})
