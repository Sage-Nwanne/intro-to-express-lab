const express = require('express')
const app = express();
const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];



// 1) http://localhost:3000/greetings/:Sage
app.get('/greetings/:username', (req,res) => {
    const firstName = req.params.username
    res.send(`<h1>Hello there, ${firstName}!</h1>`)
});



// 2) route w/ url '/roll/:number', if param equal number, generate rando # between 0 and user input
app.get('/roll/:number', (req,res) => {
    isANumber = req.params.number

    if (isNaN(isANumber)) {
          res.send('You must specify a number.')
    } else {
        let randomNumber = Math.ceil(Math.random() * isANumber);
        res.send(`You rolled a ${randomNumber}`)
    }
}  )

    

// 3) route w/ url localhost3000/collectibles/:index--- if index is in array {....}, if not {....}
app.get('/collectibles/:index', (req,res) =>{

    res.send(req.params.index);

if ( !collectibles[req.params.index]) {
    req.send('This item is not in stock. Check back soon!')
}
else{
 req.send(`So, you want the ${collectibles.name}? For ${collectibles.price}, it can be yours!`)   
}
});



// 4) create a route /shoes that filter()s  the list of shoes on querey parameters. 
// Min price- excludes shoes below this price...... max price- excludes shoes above this price....... type- shows shoes of specified type..... no params- full list of shoes



app.listen(3000,() => {
    console.log('Listening on port 3000');
});