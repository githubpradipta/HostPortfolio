const express = require('express')
const path = require('path')
require('dotenv').config();
const projectRoute =require("./Routes/projectRouter");
const contactRoute =require("./Routes/contactRouter");
const connection = require("./Model/Connection");
const cors = require('cors')

const app=express()
app.use(express.json())
app.use(cors())

app.use("/api/v1",projectRoute);
app.use("/api/v1",contactRoute);
app.use(express.static(path.join(__dirname + "/client/build")));


// app.get("*",(req,res)=>{
//     res.sendFile(path.join(__dirname + '/client/build/index.html'))
// })



const PORT=process.env.PORT || 10000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
