//logica de negocio
const whatsappModel = require("../shared/whatsappModel");
const whatsappServices = require("../services/whatsappServices");

function Process(textUser, number){
    textUser = textUser.toLowerCase();
    var models = [];
    //hola que tal
    if (textUser.includes("hola")){
        //Saludar
        var model = whatsappModel.MessageText("Hola, un gusto saludarte", number);
        models.push(model);
        var modelList = whatsappModel.MessageList(number);
        models.push(modelList);
    }   
    else if (textUser.includes("gracias")){
        //agradecimiento
        var model = whatsappModel.MessageText("Gracias a ti por escribirnos", number);
        models.push(model);
    }
    else if (textUser.includes("adios")||
    textUser.includes("adiós")||
    textUser.includes("bye")||
    textUser.includes("chao")
    ){
        //agradecimiento
        var model = whatsappModel.MessageText("Te esperamos de nuevo!", number);
        models.push(model);
    }
    else if (textUser.includes("personalizar")){
        //personalizar
        var model = whatsappModel.MessageText("Ingresa a nuestro estudio de diseño para personalizar: ", number);
        models.push(model);
    }
    else if (textUser.includes("colecciones")){
        //colecciones
        var modelColeccion = whatsappModel.MessageButtons(number);
        models.push(modelColeccion);
    }
    else if (textUser.includes("contactar")){
        //contacto asesor
        var model = whatsappModel.MessageText("*Centro de contacto:*\n+573008333775 ", number);
        models.push(model);
    }
    else {
        //no entiendo
        var model = whatsappModel.MessageText("No comprendo lo que dices", number);
        models.push(model);
    }
    models.forEach(model => {
        whatsappServices.SendMessageWhatsApp(model);
    });
}

module.exports = {
    Process
};