const COFFE_CANDIDATE_PREFIX = "Sala";


const EMBEBED_COFFE_RECOMENDATIONS = {
    "title": "Recomendaciones",
    "description": "La idea es tener un rato para que podamos distendernos. \
        Para eso, tengamos en cuenta los siguientes puntos. \
        Si bien son opcionales, son cosas que relevamos entre todos y que queremos trabajar. \
        **¡Hagamos el efuerzo!**\n \n \
        - No nos vemos las caras lo suficiente. \
        Aprovechemos este espacio y prendamos las cámaras 👨‍❤️‍💋‍👨 . \n \
        - Es un momento para relajarnos 🏖🏖🏖. Busquemos charlar de cosas off-work . \
        Despues podemos volver a enfocarnos en los temas laborales 👮🏻‍♂️.",
    "color": 7506394
}


exports.handle = (message) => {
    console.log(`Coffe requested by ${message.author} in ${message.guild.name}`)
    
    channelCandidate = message.guild.channels.cache.find(
        (channelData, channelId) => {
            return (channelData.type == "voice" && channelData.name.startsWith(COFFE_CANDIDATE_PREFIX) && channelData.members.size === 0);
        }
    )
    
    var channelRecomendation = channelCandidate ? `Quienes quieran pueden sumarse en ${channelCandidate}` : `No encontré una sala vacía, pero siempre pueden crear otra o usar General`
    
    message.channel.send({ content: `Buenas @here! ${message.author} tiene ganas de tomar un cafe ☕️. ${channelRecomendation}`, embed: EMBEBED_COFFE_RECOMENDATIONS }) 
}

