const { httpServer } = require('./app')
const { logger } = require('./logs/logger')

const { Server:ServerIo } = require("socket.io")
const io = new ServerIo(httpServer)

const msgdb = require('./models/mensajes.model')

io.on('connection', (socket) => {
    logger.info(`Unknown bunny connected`)

    msgdb.find().then((messages) => {
        socket.emit('connection', {"messages":messages})
    }).catch((err) => {
        console.log(err);throw err
    })

    // NUEVOS MENSAJES DEL CHAT
    socket.on('chatter', (message) => {

        try {
            const newMsg = new msgdb({
                email: message['email'],
                date: message['date'],
                message: message['message']
            })
            
            newMsg.save()

        } catch (err) {
            console.log(err);throw err
        }

        io.emit('chatter', message)
    })
})

const port = process.env.PORT || 8080

httpServer.listen(port, () => {
    logger.info(`Server running on port ${port}`)
})
    
