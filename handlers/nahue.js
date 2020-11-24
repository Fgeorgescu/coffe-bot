const EMBEBED_RUBY = {
    "image": {
        "url": "https://cdn.discordapp.com/embed/avatars/0.png"
    },
    "color": C50925
}


exports.handle = (message) => {
    message.channel.send({ content: `¿Qué opinas de ruby?`, embed: EMBEBED_RUBY }) 
}

