function SampleText (textResponse, number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "text":{
            "body": textResponse
        },
        "type": "text"
    });

    return data;
}

function SampleImage (number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "image",
        "image":{
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/image_whatsapp.png"
        }
    });

    return data;
}

function SampleAudio (number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type":"audio",
        "audio": {
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/audio_whatsapp.mp3"
        }
    });

    return data;
}

function SampleDocument (number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "document",
        "document": {
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/document_whatsapp.pdf",
            "caption": "Título de documento"
        }
    });

    return data;
}

function SampleVideo (number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "video",
        "video": {
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/video_whatsapp.mp4",
            "caption": "Título de video"
        }
    });

    return data;
}

function SampleSticker(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "sticker",
        "sticker": {
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/video_whatsapp.wepb"
        }
    });

    return data;
}

function SampleLocation (number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "location",
        "location": {
            "latitude": "6.1571072",
            "longitude": "-75.5826688",
            "name": "Museo de Arte Moderno de Medellín",
            "address": "Museo de Arte Moderno de Medellín, Cra. 44 #19a-100, El Poblado, Medellín, El Poblado, Medellín, Antioquia"
        }
    });

    return data;
}

function SampleButtons (number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "button",
            "body": {
                "text": "¿Deseas confirmar tu registro?"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "001",
                            "title": "🤗 SI"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "002",
                            "title": " 🤓NO"
                        }
                    }
                ]
            }
        }
    });

    return data;
}


function SampleList (number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "body": {
                "text": "Selecciona una opción:"
            },
            "footer": {
                "text": "Para poder atenderte"
            },
            "action": {
                "button": "ver opciones",
                "sections": [
                    {
                        "title": "Compra de productos",
                        "rows": [
                            {
                                "id": "1",
                                "title": "Personalizados",
                                "description": "Detalles especiales"
                            },
                            {
                                "id": "2",
                                "title": "Basicos",
                                "description": "Sin detalles"
                            }
                        ]
                    },
                    {
                        "title": "Desarrollo de página Web",
                        "rows": [
                            {
                                "id": "3",
                                "title": "Personalizada",
                                "description": "Detalles especiales"
                            },
                            {
                                "id": "4",
                                "title": "Basica",
                                "description": "Sin detalles"
                            }
                        ]
                    }
                ]
            }
        }
    });
    return data;
}


module.exports = {
    SampleAudio,
    SampleButtons,
    SampleDocument,
    SampleImage,
    SampleList,
    SampleLocation,
    SampleSticker,
    SampleText,
    SampleVideo
};

