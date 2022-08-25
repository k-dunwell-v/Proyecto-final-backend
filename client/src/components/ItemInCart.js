import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { CartContext } from "../components/context/CartContext"

const ItemInCart = (id, img, title, price, quantity, remove) => {

    const { deleteFromCart } = useContext(CartContext)

    return (

        <li key={id} className="flex py-6">

            <div className="indicator">
                <span className="indicator-item badge badge-primary text-white font-semibold">{quantity}</span>
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img src={img} className="h-full w-full object-cover object-center"/>
                </div>
            </div>

            <div className="ml-4 flex flex-1 flex-col">
                <div>

                    <div className="flex justify-between text-base font-medium text-gray-900">
                            
                        <h3>
                            <Link to={"/item/" + id}> {title} </Link>
                        </h3>

                        <p className="ml-4 font-bold">{"$" + price}</p>
                    </div>
                        
                    </div>

                    <div className="flex flex-1 items-end justify-between text-sm">

                        {remove && <div className="flex">
                            <button type="button" className="font-medium text-red-600 hover:text-red-300" onClick={() => deleteFromCart(id, img, title)}>
                                Remove
                            </button>
                        </div>}

                    </div>

                </div>
        </li>


    )
}

export default ItemInCart
