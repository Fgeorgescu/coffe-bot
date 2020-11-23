const COFFE_CANDIDATE_PREFIX = "Study";


const EMBEBED_COFFE_RECOMENDATIONS = {
    "title": "Recomendaciones",
    "description": "La idea es tener un espacio para que podamos reencontrarnos. Para eso, tengamos en cuenta los siguientes puntos. Si bien son opcionales, son cosas que relevamos entre todos. **¡Hagamos el efuerzo!**\n \n - No nos vemos las caras lo suficiente. Aprovechemos este espacio y prendamos las cámaras 👨‍❤️‍💋‍👨 . \n - Es un espacio para relajarnos. Busquemos charlar de cosas off-work. Podemos charlar del trabajo en cualquier otro momento.",
    "color": 7506394
}


exports.handle = (message) => {
    channelCandidate = message.guild.channels.cache.find(
        (channelData, channelId) => {
            return (channelData.type == "voice" && channelData.name.startsWith(COFFE_CANDIDATE_PREFIX) && channelData.members.size === 0);
        }
    )
    
    var channelRecomendation = channelCandidate ? `Quienes quieran pueden sumarse en la ${channelCandidate}` : `No encontré una sala vacía, pero siempre pueden crear otra o usar General`
    
    message.channel.send({ content: `Buenas @here! ${message.author} tiene ganas de tomar un cafe ☕️. ${channelRecomendation}`, embed: EMBEBED_COFFE_RECOMENDATIONS }) 
}

