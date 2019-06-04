const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
 
app = express();
 
app.use(cookieParser());
 
app.set("trust proxy", 1);
app.use(session({
    secret: "IITKCSESOC2019",
    saveUninitialized: false,
    resave: false,
    cookies : {secure: true}
}));
 
app.get("/", function(req, res) {
    res.send(req.cookies);
});
 
app.get("/first", function(req, res) {
    res.send(req.cookies);
});
 
app.get("/third", function(req, res) {
    res.send(req.cookies);
});
 
app.get("/showCookie", function(req, res) {
    res.send(JSON.stringify(req.cookies));
});
 
app.get("/setCookie", function(req, res) {
    res.cookie("username", "fakeuser");
    res.cookie("magic", Math.floor(Math.random()*1000));
    res.send("Done");
});
 
app.get("/counter", function(req, res) {
    // console.log(req.session);
    var username;
    if(req.session.username)
        username = req.session.username;
    else
        username = "Guest User";
   
    if(req.session.count) {
        req.session.count++;
        res.send(username + ", You have visited "+req.session.count+ " times");
    } else {
        req.session.count = 1;
        res.send(username + ", Initialized a session for you.");
    }
    // req.session.save();
});
 
app.get("/auth", function(req, res) {
    var username = req.query.username;
    var password = req.query.password;
    if(username == "hemant" && password == "1234") {
        req.session.username = username;
        req.session.magic = "" + Math.floor(Math.random()*1000) + "" + password;
        res.send("Successfully Authenticated");
    } else {
        res.send("Authnetication Failed");
    }
});
 
app.get("/logout", function(req, res) {
    req.session.destroy();
    res.send("Successfully Logged out");
});
 
app.listen(3009);
 
/*
https://pastebin.com/kFTevJme
 
npm install express-session
*/