const EMBEBED_RUBY = {
    "image": {
        "url": "../assets/ruby"
    },
    "color": 13046058
}


exports.handle = (message) => {
    message.channel.send({ content: `¿Qué opinas de ruby?`, files: ["./assets/ruby.png"] }) 
}

