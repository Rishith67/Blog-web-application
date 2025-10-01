import express from "express";
import bodyParser from "body-parser";
const app = express();
let names=[];
let data = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/",(req,res)=>{
    res.render("home.ejs",{
        name : names,
        data
    });
});
app.get("/about",(req,res)=>{
    res.render("about.ejs");
});
app.get("/post",(req,res)=>{
    res.render("post.ejs");
});
app.post("/submit",(req,res)=>{
    
    console.log(req.body["user"] + " " + req.body["content"]);
    names.push(req.body["user"]);
    data.push(req.body["content"]);

    res.render("home.ejs" , {
        name : names,
        data : data
    });
});
app.listen(3000,()=>{
    console.log("Server is running at port 3000");
});