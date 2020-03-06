let path = require('path');
let fs = require('fs');
let request = require('request');
let dataPath = path.join(__dirname, './pop.json');
let arr = [];

request("https://reddit.com/r/popular.json", (err, response, body) => {
    if (err) console.log(err)
    JSON.parse(body).data.children.forEach(e => {
        let obj = {
            title: e.data.title,
            author: e.data.author,
            url: e.data.url
        }
        console.log(obj)
        arr.push(obj)
    });

    
    fs.writeFileSync(dataPath, JSON.stringify(arr),
    
        (err) => {
    
            console.log(err)
    
        });
});