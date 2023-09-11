const express=require("express");
const app=express();
const notes=require("./Data/Notes.js")
const dotenv=require("dotenv")
const cors=require("cors")
dotenv.config()
app.use(cors())

const port=process.env.PORT || 5000

app.get("/",(req,res)=>{
    res.send("Hello")
})


app.get("/api/notes",(req,res)=>{
   res.send(notes).pretty()

})

app.get("/api/notes/:id",(req,res)=>{
   const note=notes.find((n)=>n._id===req.params.id);
   res.send(note)
})



app.listen(port,
    console.log(`The port is running at ${port}`))