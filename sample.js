const express = require ('express')

const app = express()

const PORT = 5000;

app.listen(PORT,()=>{
    console.log(`this is sample${PORT}`)
    console.log('how is it ')
})

app.use('/main',(req,res)=>{
    res.send("<h1>Hello World welcome ")
})