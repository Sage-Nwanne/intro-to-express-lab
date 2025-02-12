const express = require('express')

const app = express();



// 1) http://localhost:3000/greetings/:Sage
app.get('/greetings/:name', (req,res) =>{
    const firstName = req.params.name
    res.send(`<h1>Hello there, ${firstName}!</h1>`)
    
});


// 2) route w/ url '/roll/:number', if param equal number, generate rando # between 0 and user input
app.get('/roll/:number'), (req,res) => {
    isANumber = req.params.number
    randoGeneratedNumb = Math.random() * isANumber

    if (typeof isANumber === 'number') {
        res.send(`You rolled a ${randoGeneratedNumb}.`)
    }
    else{
        res.send('You must specify a number.')
    }
}



// 3) route w/ url localhost3000/collectibles?name=Sage&price=32 ***** unfinished *****
app.get('/collectibles/:index', (req,res) =>{

    const collectibles = [
        { name: 'shiny ball', price: 5.95 },
        { name: 'autographed picture of a dog', price: 10 },
        { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
      ];
    

    const name = req.query.name;
    const age = req.query.age;
if ( req.params.index === /*not sure what to put here*/ x ) {
    req.send(`So, you want the ${name}? For ${price}, it can be yours!`)
}
else{
    req.send('This item is not in stock. Check back soon!')
}



    res.send(`<h1>Hello there, ${firstName}!</h1>`)
    
});



// 4) create a route /shoes that filter()s  the list of shoes on querey parameters. 
// Min price- excludes shoes below this price...... max price- excludes shoes above this price....... type- shows shoes of specified type..... no params- full list of shoes



app.listen(3000,() => {
    console.log('Listening on port 3000');
});