import ItemListContainer from '../../container/ItemListContainer';
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

const AdminProduct = ({id, action}) => {

    const [Product, setProduct] = useState([{}])

    useEffect(() => {

        fetch("http://localhost:4000/api/productos/"+id).then(
            response => response.json()

        ).then(
            data => {
                setProduct(data)
            }
        )

    }, [Product])

    return (

        <>  
            
            <div className="card lg:card-side bg-base-100 shadow-xl">

                <div className="card-body">
                    <figure><img src={Product.thumbnail} alt={Product.title} className="w-96"/></figure>
                </div>

                <div className="bg-white shadow overflow-hidden">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Información de producto</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Detalles públicos y de administrador</p>
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Título</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{Product.title}</dd>
                            </div>

                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">ID</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{Product.id}</dd>
                            </div>

                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Fecha de creación</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{Product.timestamp}</dd>
                            </div>

                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">URL de imagen</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{Product.thumbnail}</dd>
                            </div>

                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Precio</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{Product.price}</dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Disponibles</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"> {Product.stock}</dd>
                            </div>
                        </dl>
                    </div>
                </div>          
            </div>
        </>
    )
}


export default AdminProduct
    