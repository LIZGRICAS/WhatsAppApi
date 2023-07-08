function MessageText(textResponse, number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "text": {
            "preview_url": true,
            "body": textResponse
        },
        "type": "text"
    });
    return data;
}


function MessageList(number){
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
                        "title": "Productos",
                        "rows": [
                            {
                                "id": "main-personalizar",
                                "title": "Personalizar",
                                "description": "Personaliza tus productos con detalles especiales"
                            },
                            {
                                "id": "main-colecciones",
                                "title": "Colecciones",
                                "description": "Visualiza las Colecciones KuthZen"
                            }
                        ]
                    },
                    {
                        "title": "Desarrollo de página Web",
                        "rows": [
                            {
                                "id": "main-personalizada",
                                "title": "Página web personalizada",
                                "description": "Detalles especiales en 3D"
                            },
                            {
                                "id": "main-mantenimiento",
                                "title": "Mantenimiento de página",
                                "description": "Tienda virtual"
                            }
                        ]
                    },
                    {
                        "title": "Hablar con un asesor",
                        "rows": [
                            {
                                "id": "main-personalizada",
                                "title": "Contactar asesor"
                            }
                        ]
                    }
                ]
            }
        }
    });
    return data;
}


function MessageButtons (number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "button",
            "body": {
                "text": "Selecciona la categoria del producto:"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-shirt",
                            "title": "👕 Prenda superior"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-mugs",
                            "title": "🍵 Mugs"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-agendas",
                            "title": "📒 Agendas"
                        }
                    }
                ]
            }
        }
    });

    return data;
}

module.exports = {
    MessageText,
    MessageList,
    MessageButtons
}