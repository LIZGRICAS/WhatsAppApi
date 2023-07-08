const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));
const https = require("https");
const clave = require("../tokens/toke_facebook");

function SendMessageWhatsApp (data){


    const options = {
        host: "graph.facebook.com",
        path: "/v17.0/101784356313414/messages",
        method: "POST",
        body: data,
        headers: {
            "Content-Type":"application/json",
            Authorization: "Bearer" + clave 
        }

    };

    const req = https.request(options, res => {
        res.on("data", d=>{
            process.stdout.write(d);
        });
    }); 
  
    req.on("error", error=>{
        console.error(error);
    });

    req.write(data);
    req.end()

}

module.exports = {
    SendMessageWhatsApp
};