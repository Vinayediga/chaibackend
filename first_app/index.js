require('dotenv').config()
 


const express = require('express')
//have all the methods of express
const app = express()
//listening location
const port = 2080

//listens at "/" and gives response by callback function
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/amazon',(req,res)=>{
    res.send('hi it is amazon here')
    
})


//listen at specific port and run an callback function in response
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
  console.log("hi");
  
})

