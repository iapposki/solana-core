require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;


app.get('/status', (req,res) => {
    res.send('Node server is runnning.')
})


app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})
