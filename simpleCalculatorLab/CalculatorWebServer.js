const express = require('express');
const app = express();
const calculateMod = require('./calculator.js')

//


app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.get('/', function(req , res){
    res.sendFile(__dirname + '/simpleCalculator.html')
})

app.post('/calculate', (req, res ) =>{
    const number1 = parseFloat(req.body.first);
    const number2 = parseFloat(req.body.second);
    const operation = req.body.operation;
    let result = calculateMod.calculate(number1,number2, operation);
    res.redirect(`/result?result=${result}`)
})

app.get('/result', (req, res) => {
    let result = req.query.result
    res.send(`The Answer is: ${result}<br><a href="/">Another calculation</a>`)
  })

app.listen(3000, function() {
    console.log('Server is listening on port 3000');
});