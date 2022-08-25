import ItemListContainer from '../../container/ItemListContainer';
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

const NewProduct = () => {

    return (

                                    
        <form className="max-w-xl m-4 p-10 mt-28 bg-white rounded shadow-xl" 
            method="POST"
            action="http://localhost:4000/api/">

            <div>
                <input className="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" name="title" type="text" required placeholder="Título"/>
                <input className="mt-2 w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" name="thumbnail" type="text" placeholder="Foto (url)"/>
                <input className="mt-2 w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" name="details" type="text" required placeholder="Detalles"/>
            </div>

            <div className="inline-block mt-2 w-1/2 pr-1">
                <input className="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" name="price" type="number" required placeholder="Precio"/>
            </div>

            <div className="inline-block mt-2 w-1/2 pr-1">
                <input className="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" name="stock" type="number" required placeholder="Disponibles"/>
            </div>

            <div className="w-full border-gray-200 sm:px-6">
                <label htmlFor="submit-form" className="cursor-pointer mt-6 flex items-center justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-accent">
                    Agregar producto
                </label>
            </div> 
            <input type="submit" id="submit-form" className="hidden"/>

        </form>

    )
}


export default NewProduct
    