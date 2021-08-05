
exports.handle = (message) => {
    message.channel.send({ content: `<@!705543007390400512> Vos ves al pibe ese?`, files: ["./assets/bija.jpeg"] }) 
}

exports.handle = (message, user) => {
    message.channel.send({ content: `${user.id} Vos ves al pibe ese?`, files: ["./assets/bija.jpeg"] }) 
}