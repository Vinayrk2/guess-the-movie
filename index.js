const express = require('express')
const app = express()

app.use(express.static('./public/'))

app.get('getmovie',(req,res)=>{
    const fs = require('fs');
    const jsonData = fs.readFileSync('data.json', 'utf8');
    const data = JSON.parse(jsonData);
    console.log(data)
    res.json(data)
})

app.listen(3000)