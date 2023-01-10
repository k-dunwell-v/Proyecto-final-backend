const { connectDB } = require('../config/mongoConfig')

connectDB()

class Contenedor {
    constructor(db){
		this.db = require(db);
    }

	async get(id) {
            
        if (id) {
            return this.db.findOne({_id: id})
        }else{
            return this.db.find()
        }


	}

	async add(element) {
        const newElement = new this.db(element)
        await newElement.save()
        return newElement["_id"]
        
	}

    async update(id, element) {
        return this.db.updateOne({_id: id}, {$set: element})
    }

    async delete(id) {
        if (id) {
            return this.db.deleteOne({_id: id})
        }else{
            return this.db.delete()
        }
	}
	
}

module.exports = Contenedor