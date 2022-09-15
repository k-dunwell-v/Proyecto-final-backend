const fs = require("fs")

class Contenedor {
    constructor(file){
		this.file = file;
    }

    async get(id) {
		const data = await fs.readFileSync(this.file, "utf-8")
        const dataParsed = JSON.parse(data)

        if (id) {
            const getElement = dataParsed.findIndex((element => element["id"] === parseInt(id)))
            return dataParsed[getElement] || {success: false, error: "El ID ingresado no existe."}
        }else{
            return dataParsed
        }
		
	}
    
	async add(element) {
		
        const d = new Date()
        const date = `[${d.getDate()}/${d.getMonth()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}]`
    
        fs.readFile(this.file, "utf-8", (err, elements) => {
            
            if (err) {
                element["timestamp"] = date
                element["id"] = 1
    
                fs.writeFileSync(this.file, JSON.stringify([element]))
    
            }else{
                const dataParsed = JSON.parse(elements)
                element["timestamp"] = date
                element["id"] = dataParsed.length + 1
                dataParsed.push(element)
    
                fs.writeFileSync(this.file, JSON.stringify(dataParsed))

            }

        })



	}

    async update(id, product){

        const {title, price, thumbnail, detail, stock } = product

        fs.readFile(this.file, "utf-8", (err, products) => {

            const dataParsed = JSON.parse(products)
            const getProduct = dataParsed.findIndex((product => product["id"] === parseInt(id)))

            if (getProduct > -1) {
                
                const product = dataParsed[getProduct]

                if (title) {
                    product["title"] = title
                }

                if (price) {
                    product["price"] = price
                }

                if (thumbnail) {
                    product["thumbnail"] = thumbnail
                }

                if (detail) {
                    product["detail"] = detail
                }

                if (stock) {
                    product["stock"] = stock
                }

                const newText = JSON.stringify(dataParsed)
                fs.writeFileSync(this.file, newText)

            }
            
        })
    }

 	async delete(id) {

        if (id) {
            const data = await fs.readFileSync(this.file, "utf-8")
			const dataParsed = JSON.parse(data)
			const getElement = dataParsed.findIndex((element => element["id"] === parseInt(id)))

			if (getElement > -1) {
				dataParsed.splice(getElement, 1)
				const newText = JSON.stringify(dataParsed)
				fs.writeFileSync(this.file, newText)

                return {success: true}

			}else{
				return {success: false, error: "El ID ingresado no existe."}
			}

        }else{
            fs.writeFileSync(this.file, "[]")
        }


	}

}

module.exports = Contenedor