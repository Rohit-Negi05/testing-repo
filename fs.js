const express = require("express")         //this is used to require express in the project
const server = express();                 //here instance of server is created
//const fs = require("fs")

//let data = require("./data.json")

server.use(express.json())               //here we can access json, present in express


server.post("/login", (req, res) => {
    console.log(req.body);
    const { mail, pass, conpass } = req.body;
    if(!mail || !pass || !conpass){
        res.json({ status: "data is not filled"})
    }else{
        if(conpass === pass){
            res.json({ status: "welcome to the page"})
        }
        else{
            res.json({ status: "pass is not correct"});
        }
    }
});                                                     //post request is send to the server
server.post("/account", (req, res) => {
    const { name, mail, pass, conpass } = req.body;
    if(!name || !mail || !pass || !conpass){
        res.json({ status: "account is not created bcz of incomplete data"})
    }else{
        if(pass === conpass){
            res.json({ status: `welcom ${name} to this world of website`})
        }else{
            res.json({ status: "pass not matched"})
        }
    }
})

  server.get("*", function(req, res){                                                             //here * is used if the url is wrong
    res.status(404).json({
        "Status": "error"
    })                                                                                //status makes the status 404 here string is send 
})                                                                              //we can also send json ex in / route

server.listen(3000, function(){                   //server is start here
    console.log("server has started at 3000!");
});