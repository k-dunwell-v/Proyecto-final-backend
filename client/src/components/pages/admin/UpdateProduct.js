import ItemListContainer from '../../container/ItemListContainer';
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import axios from 'axios';

const UpdateProduct = ({id}) => {

    const [Update, setUpdate] = useState({
        title:"",
        price:"",
        thumbnail:"",
        detail:"",
        stock:""

    })

    function setUpdateHandler(e) {
        setUpdate({...Update, [e.target.name] : e.target.value});
    }

    function updateHandler(e) {

        e.preventDefault()

        axios.put('http://localhost:4000/api/productos/' + id, Update)
            .then((Update) => {
                console.log(Update)
            })
            .catch((err) => {
                console.log(err)
            })


        e.currentTarget.reset();

    }


    return (

                                    
        <form className="max-w-xl m-4 p-10 mt-28 bg-white rounded shadow-xl" 
            onSubmit={(e) => updateHandler(e)}>

            <div>
                <input className="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" name="title" type="text" placeholder="Título" onChange={(e) => setUpdateHandler(e)}/>
                <input className="mt-2 w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" name="thumbnail" type="text" placeholder="Foto (url)" onChange={(e) => setUpdateHandler(e)}/>
                <input className="mt-2 w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" name="details" type="text" placeholder="Detalles" onChange={(e) => setUpdateHandler(e)}/>
            </div>

            <div className="inline-block mt-2 w-1/2 pr-1">
                <input className="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" name="price" type="number" placeholder="Precio" onChange={(e) => setUpdateHandler(e)}/>
            </div>

            <div className="inline-block mt-2 w-1/2 pr-1">
                <input className="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" name="stock" type="number" placeholder="Disponibles" onChange={(e) => setUpdateHandler(e)}/>
            </div>

            <div className="w-full border-gray-200 sm:px-6">
                <label htmlFor="submit-form" className="cursor-pointer mt-6 flex items-center justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-accent">
                    Actualizar producto
                </label>
            </div> 
            <input type="submit" id="submit-form" className="hidden"/>

        </form>

    )
}


export default UpdateProduct
    