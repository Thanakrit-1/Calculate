const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const Port = 3000

app.get('/add', (req, res) => {
    let numA = Number(req.query.a);
    let numB = Number(req.query.b);
    if(isNaN(numA) || isNaN(numB)) {
        return res.json({ error: "กรอกตัวเลขให้ถูก"});
    }
    let result = numA + numB;
    res.json({ Answer: result});
});
app.get('/subtract', (req, res) => {
    let numA = Number(req.query.a);
    let numB = Number(req.query.b);
    if(isNaN(numA) || isNaN(numB)) {
        return res.json({ error: "กรอกตัวเลขให้ถูก"});
    }
    let result = numA - numB;
    res.json({ Answer: result});
});
app.get('/multiply', (req, res) => {
    let numA = Number(req.query.a);
    let numB = Number(req.query.b);
    if(isNaN(numA) || isNaN(numB)) {
        return res.json({ error: "กรอกตัวเลขให้ถูก"});
    }
    let result = numA * numB;
    res.json({ Answer: result});
});
app.get('/divide', (req, res) => {
    let numA = Number(req.query.a);
    let numB = Number(req.query.b);
    if(isNaN(numA) || isNaN(numB)) {
        return res.json({ error: "กรอกตัวเลขให้ถูก"});
    }
    if (numB === 0) {
        return res.json({ error: "ห้ามหารด้วย 0"});
    }
    let result = numA / numB;
    res.json({ Answer: result});
});

app.listen(3000, () => {
    console.log("Server starts successfully")
})
