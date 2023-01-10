const { createTransport } = require('nodemailer')

const transporter = createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'judah.ruecker@ethereal.email',
        pass: 'u7Xsfe6ANghrXpht5e'
    }
});

module.exports = transporter