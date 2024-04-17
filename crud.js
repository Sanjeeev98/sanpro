const data_schema = require("./schema")

const bcrypt = require("bcrypt")

const jwt = require("jsonwebtoken");
const errorhandling = require("./error");

const Get_data = async (req, res)=>{

// res.json("hi welcome to my channel");
const find_data = await data_schema.find({});
res.json(find_data);

};

// module.exports = {Get_data};


const Create_data = async(req,res)=>{

    const hass_pass =await bcrypt.hash(req.body.password,7);

    const data = new data_schema({
        name:req.body.name,
        email:req.body.email,
        password:hass_pass,
    })
    const save_data = await data.save();
    res.json(save_data)
}

// module.exports = {Create_data,Get_data};



const Update_data = async(req,res)=>{
    const update_data = await data_schema.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    res.json(update_data)
}

const Delete_data = async(req,res)=>{
    const delete_data = await data_schema.findByIdAndDelete(req.params.id)
    res.json({
                msg:"deleted sucessfully",
                delete_datas :delete_data}
                )
}





const login = async(req,res,next)=>{
    const useremail = await data_schema.findOne({email:req.body.email})

    // if(!useremail) return res.status(404).json("email not valid")     //normal method   
      
    if(!useremail) return next(errorhandling("404" , "email not valid"));  // Error handling

const userpassword = await bcrypt.compare(req.body.password,useremail.password)

if(!userpassword) return res.status(404).json("password not valid")


const token = jwt.sign({id:useremail._id},process.env.TOKEN);


res.json(token);

    // res.json("login successfully")
}







module.exports = {Create_data,Get_data,Update_data,Delete_data,login};




// app.delete("/delete/:id",async(req,res)=>{

//     const del_data = await data_schema.findByIdAndDelete(req.params.id)
//     res.json({
//         msg:"deleted sucessfully",
//         delete_datas :del_data}
//         )
// })
