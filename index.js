const express = require("express");

// we are storing the downloaded "epress library" in the variable name express using the function "require"

// instant object =======>and again we are storing it in the variable name "app' as instant object

const app = express();


const cors = require("cors");





const mongoose = require("mongoose");
const router = require("./router/router");

const dotenv = require("dotenv");
dotenv.config();


// crud operations ==> 1..create----Post(keywords)
//                     2..read------get(keywords)
//                     3..update----put (keywords)
//                     4..delete---delete (keywords)




// it is a method which is a promise and it is used to connect the database to a server,,
// 2methods ---------1...connect
//                   2...Schema
// mongoose.connect("mongodb+srv://sanjeev123:AMuNnp6PwPyqidat@cluster0.rycjhnf.mongodb.net/crud_db")---Atlas

mongoose.connect("mongodb://127.0.0.1:27017/crud_db")


.then(()=>{
    console.log("server is connected");
})
.catch(()=>{
    console.log("servers is not connected");
})


app.use(cors());

app.use(express.json());

app.use("/summa",router);


app.use((err,req,res,next)=>{

    const errstatus = err.status || 500;
    const errmessage = err.message || "something went wrong";

    return res.status(errstatus).json({ status : errstatus,message :errmessage});
})


// listen function is to create a local server

// app.get("/get",async(req,res) =>{
//     // res.json("hello")
//     // res.send("hello")                        //send method for non string 
    
           

//     const find_data = await data_schema.find();
//     res.json(find_data);
    

// })




// app.post("/create", async(req,res)=>{

//     const hass_pass = await bcrypt.hash(req.body.password,7)

// const data = new data_schema({

// name: req.body.name,
// email:req.body.email,
// password:hass_pass,

// })

// const save_data = await data.save();
// res.json(save_data)

// })




app.listen(3006, ()=>{
    console.log("server is created");
})


//   or we can use a variable name 

// let port = 3005;

// let create_server = port || 5000;

// app.listen(port, ()=>{
//     console.log("server is created",create_server);
// })









