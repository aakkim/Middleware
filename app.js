const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({extended: false }));

// Set EJS as templating engine
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));
console.log('views', path.join(__dirname, 'views'));

//create a route for the home page
//The GET route for the form

app.get('/', (req, res) => {
    res.render('index');

});

//create route for user to enter the numbers
app.post("/calculate", (req, res) => {
    const { num1,num2} = req.body;
    const sum = Number(num1) + Number(num2);
    const difference = Number(num1)-Number(num2);
    const product = Number(num1) * Number(num2);
    const quotient = Number(num1) / Number(num2);
    res.render("result", {sum,difference,product,quotient});
});

//start the server on port 4000
//Note we are advertising the service on port number 4000 and not 3000 this time
var port = 4000

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});



