const express = require('express');
const app = express();

app.set('view engine', 'ejs');
//app.set('views', path.join(_dirname, '/views'))//Setting path for views dir (necessary)

app.get('/', (req, res) => {
    //res.send("Hi")
    res.render("home.ejs")
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random()*10) + 1;
    res.render('random.ejs',{rand: num})
})

app.listen(7000, () => {
    console.log("LISTENING ON PORT 7000")
})