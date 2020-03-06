let path = require('path');
let fs = require('fs');
let request = require('request');
let chirps = [{
    user: "Chase",
    message: "Hate world"
},
{
    user: "Tanner",
    message: "Goodbye World"
},
{
    user: "User12",
    message: "Dick Cheney made money off of the Iraq War."
},
{
    user: "RoadWorkAhead",
    message: "I sure hope it does!"
},
{
    user:" Jared",
    message: "Hi, my name is Jared, im 19, and i never [REDACTED] learned how to read."
}];

let dataPath = path.join(__dirname, '../data.json');

fs.writeFile(dataPath, JSON.stringify(chirps), 

     (err, data) => {

        var person = JSON.parse(data)

        console.log(person.name)
        console.log(person.shirtColor)
    });