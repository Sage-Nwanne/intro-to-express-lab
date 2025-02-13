const express = require('express')
const app = express();
const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];
const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
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
    const index= req.params.index;

if ( !collectibles[index]) {
    req.send('This item is not in stock. Check back soon!')
}
else{
 req.send(`So, you want the ${collectibles[index].name}? For ${collectibles[index].price}, it can be yours!`)   
}
});

// error: req.send is not a function!!!!!!!!!!!!




// 4) create a route /shoes that filter()s  the list of shoes on querey parameters. 
// Min price- excludes shoes below this price...... max price- excludes shoes above this price....... type- shows shoes of specified type..... no params- full list of shoes


app.get('/shoes', (req,res) => {
    if (req.query['min-price']) {
        const expensiveshoes = shoes.filter(shoe => shoe .price > req.query['min-price']);
        res.send(expensiveshoes);
        
    } else if (req.query['max-price']) {
        const cheapShoes = shoes.filter(shoe => shoe.price < req.query['max-price']);
        res.send(cheapShoes);
    } else if (req.query.type) {
        const typeOfShoes = shoes.filter(shoe => shoe.type === req.query.type);
        res.send(typeOfShoes);
     } else {
        res.send(shoes);
    }
   
});


// callback function couldve been wrote like this :      const typeOfShoes = shoes.filter((shoe) => {
//     shoe.type === req.query.type
// })
















app.listen(3000,() => {
    console.log('Listening on port 3000');
});