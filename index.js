
const express = require('express')
const app = express()
const port = 5001
const bodyParser = require('body-parser');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Node Todo API is running on port: ${port}`)
})


app.post('/', function(req,res){
    return res.send("Smirnov")
});