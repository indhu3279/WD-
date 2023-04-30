const express = require("express");
//executing Express
const app = express()
// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST!!")
//     res.send("Hello, We got you!")
// })//react parses the http req made and stores it in first argument 'req'
//'res' responds to the request (it has many methods in it)
app.get('/cats', (req, res) => {
    res.send("Meow!!")
})
app.get("/dogs", (req, res) => {
    res.send("Woof!!")
})
app.get("/", (req, res) => {
    res.send("THis is the home page")
})
app.post("/cats", (req, res)=> {
    res.send("Post request to /cats!! this is the responce!");
})
app.get("*", (req, res) => {
    res.send("I don't know the path!")
})//If we put this first it'll return the same for any request made
app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080")
})

//This is what actually we do
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit`)
})
app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`Viewing Post Id: ${postId}' on ${subreddit} subreddit`)
}) 

//Working with query strings
app.get('/search', (req, res) => {
    const {q} = req.query;
    if (!q) {
        res.send('Nothing found if nothing searched')
    }
    res.send(`Search results for: ${q}`)
})