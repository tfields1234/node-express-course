//This first line gives you access to the express library by searching your node_modules for "express".
const express = require("express");
//This next creates an instance of the express constructor, which we will name "app".
const app = express();

const mockUserData = [{ name: "Mark" }, { name: "Jill" }];

//adding mock data to the json file
app.get("/users", function (req, res) {
    res.json({
        success: true,
        message: "successfully got users. Nice!",
        users: mockUserData,
    });
});

// colons are used as variables that be viewed in the params
app.get("/users/:id", function (req, res) {
    console.log(req.params.id);
    res.json({
        success: true,
        message: "got one user",
        user: req.params.id,
    });
});

//A POST request can send data securely through the request body. In order to make POST requests, first we need to include the "body-parser" library from our node_modules (included with express).
const bodyParser = require("body-parser");
app.use(bodyParser.json());

//Let's write a function to handle a POST request made to the 'login' endpoint, as if a user was trying to log in:
app.post("/login", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const mockUsername = "billyTheKid";
    const mockPassword = "superSecret";

    if (username === mockUsername && password === mockPassword) {
        res.json({
            success: true,
            message: "password and username match!",
            token: "encrypted token goes here",
        });
    } else {
        res.json({
            success: false,
            message: "password and username do not match",
        });
    }
});

//The app.listen method will start up the server locally on the port you give as its first argument (in this case the base url is: http://localhost:8000)
app.listen(8000, function () {
    console.log("server is running");
});
