import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app=express();
const port= 3000;
const API_URL="https://api.clashroyale.com/v1/players/%23";
const bearerToken= "Enter Your Bearer Token";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.post("/track", async(req,res)=>{
    const inputTag= req.body.playerTag.replace("#","");
    try{
        const result= await axios.get(API_URL+inputTag+"/upcomingchests",{
            headers: {Authorization: `Bearer ${bearerToken}`}
        });

        const response= await axios.get("https://api.clashroyale.com/v1/players/%23"+inputTag, {
            headers: {Authorization: `Bearer ${bearerToken}`}
        });

        res.render("result.ejs",{
            tag: response.data.name,
            chests: result.data.items,
        });
    }catch(error){
        res.send(404,error.message);
    }


    
});

app.listen(port,()=>{
    console.log(`Server is running on ${port}.`);
});