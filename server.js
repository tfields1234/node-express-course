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

app.get("/users/:id", function (req, res) {
    console.log(req.params.id);
    res.json({
        success: true,
        message: "got one user",
        user: req.params.id,
    });
});

//The app.listen method will start up the server locally on the port you give as its first argument (in this case the base url is: http://localhost:8000)
app.listen(8000, function () {
    console.log("server is running");
});
