import express from 'express'

const app = express()
const port = process.env.PORT || 2090
app.get("/jokes",(req,res)=>{
    const objectsArray = [
        { id: 1, content: "This is random content 1" },
        { id: 2, content: "Here goes random content 2" },
        { id: 3, content: "Another piece of random content 3" },
        { id: 4, content: "Yet more random content 4" },
        { id: 5, content: "Random content 5, because why not?" }
      ];
      
      
      
    res.send(objectsArray)
})

app.listen(port,()=>{
    console.log("hi server is ready");
    
})