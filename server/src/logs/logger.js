const winston = require('winston')

const logger = winston.createLogger({
    transports : [
        new winston.transports.Console({ level:'verbose' }),
        new winston.transports.File({ filename: './src/logs/info.log', level:'info' }),
        new winston.transports.File({ filename: './src/logs/warn.log', level:'warn' }),
        new winston.transports.File({ filename: './src/logs/error.log', level:'error' }),
    ]
})

function getDate() {
    const d = new Date()
    const date = `[${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}]`
    return date
}

module.exports = {
    logger,
    getDate}
