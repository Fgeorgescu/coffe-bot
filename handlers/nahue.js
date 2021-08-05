const EMBEBED_RUBY = {
    "image": {
        "url": "../assets/bija"
    },
    "color": 13046058
}


exports.handle = (message) => {
    message.channel.send({ content: `<@!705543007390400512> Vos ves al pibe ese?`, files: ["./assets/bija.jpeg"] }) 
}

