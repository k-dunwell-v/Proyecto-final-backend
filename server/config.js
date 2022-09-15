const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const url = 'mongodb://localhost:27017/ecommerce'
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

    } catch (error) {
        console.error(error)
    }
}

////////////////////////////////////////////////////////////

const admin = require("firebase-admin");

const connectFirebase = async () => {
    try {
        const serviceAccount = require("./DB/Firebase/ecommerce-a3f0b-firebase-adminsdk-m7add-01b795e004.json");

        admin.initializeApp({
          credential: admin.credential.cert(serviceAccount),
          databaseURL: "https://ecommerce-a3f0b-default-rtdb.firebaseio.com"
        });

    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    connectDB,
    connectFirebase
}