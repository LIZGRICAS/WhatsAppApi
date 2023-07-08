//logica del bot

const fs = require("fs");
const { title } = require("process");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));
//const whatsappServices = require("../services/whatsappServices"); utilizados para ejemplo
//const samples = require("../shared/sampleModels"); utilizados para ejemplo
const processMessage = require("../shared/processMessage");

const VerifyToken = (req, res) => {
    
    try{
        var accesToken = "apiwtsp_uorgighhsy"
        var token = req.query["hub.verify_token"];
        var challenge = req.query["hub.challenge"];

        if(challenge != null && token != null && token == accesToken){
            res.send(challenge);
        }else {
            res.status(400).send();
        }
    }catch(e){
        res.status(400).send();
    }
};

const ReceivedMessage = (req, res) => {
    try {
        var entry = (req.body["entry"])[0];
        var changes = (entry["changes"])[0];
        var value = changes["value"];
        var messageObject = value["messages"];

        if(typeof messageObject != "undefined"){
            var messages = messageObject[0];
            var number = messages["from"];
            var text = GetTextUser(messages);

            myConsole.log(text);
            /* automatizar las respuestas que se desean devolver al usuario*/

            /*ejemplo de envio mensajes
           if(text == "Text"){

            var data = samples.SampleText("hola usuario", number);
            whatsappServices.SendMessageWhatsApp(data);
           }
           else if(text == "Image"){
            var data = samples.SampleImage(number);
            whatsappServices.SendMessageWhatsApp(data);
           }
           else if(text == "Video"){
            var data = samples.SampleVideo(number);
            whatsappServices.SendMessageWhatsApp(data);
           }
           else if(text == "Audio"){
            var data = samples.SampleAudio(number);
            whatsappServices.SendMessageWhatsApp(data);
           }
           else if(text == "Document"){
            var data = samples.SampleDocument(number);
            whatsappServices.SendMessageWhatsApp(data);
           }
           else if(text == "Button"){
            var data = samples.SampleButtons(number);
            whatsappServices.SendMessageWhatsApp(data);
           }
           else if(text == "List"){
            var data = samples.SampleList(number);
            whatsappServices.SendMessageWhatsApp(data);
           }
           else if(text == "Location"){
            var data = samples.SampleLocation(number);
            whatsappServices.SendMessageWhatsApp(data);
           }
           else if(text == "Sticker"){
            var data = samples.SampleSticker(number);
            whatsappServices.SendMessageWhatsApp(data);
           }
           else {
            var data = samples.SampleText("no es clara la solicitud", number);
            whatsappServices.SendMessageWhatsApp(data);
           }      }*/

           if(text !== ""){
            processMessage.Process(text, number);
           }
        }

        res.send("EVENT_RECEIVED");
    }catch(e){
        myConsole.log(e);
        res.send("EVENT_RECEIVED");
    }
};


function GetTextUser(messages){
    var text = "";
    var typeMessge = messages["type"];
    if(typeMessge == "text"){
        text = (messages["text"])["body"];
    }

    else if (typeMessge == "interactive") {
        var interactiveObject = messages["interactive"];
        var typeInteractive = interactiveObject["type"];
        if (typeInteractive == "button_reply"){
            text = (interactiveObject["button_reply"])["title"];
        }
        else if (typeInteractive == "list_reply"){
            text = (interactiveObject["list_reply"])["title"];
        }else{
            myConsole.log("Sin mensaje");
        }
    }else{
        myConsole.log("Sin mensaje")
    }
    return text;
}

module.exports = {
    VerifyToken,
    ReceivedMessage
};