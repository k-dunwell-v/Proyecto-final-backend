import { CartContext } from '../context/CartContext'
import Form from "./Form";
import { useContext } from 'react';
import { Link } from "react-router-dom"
import Brief from './Brief';

const Checkout = () => {

    const { cart, priceCounter, clearCart } = useContext(CartContext)

    return (

        <>
            {cart.length === 0 ?

                <div className="bg-neutral" style={{height: 600 + "px"}} data-theme="lofi">
        
                    <div className="flex justify-center px-4 py-60 text-white text-2xl">
                    
                        You shouldn't be here... {''}
        
                        <Link to="/categories"
                        type="button"
                        className="font-medium text-primary hover:text-accent">
                            Come with me <span aria-hidden="true"> :)</span>
                        </Link>
        
                    </div>
        
                </div> 
                
                :

                <div className="flex flex-col w-full lg:flex-row h-full" data-theme="lofi">

                    <div className="grid flex-grow w-full">
                        <Form products={cart} subtotal={priceCounter()}/>
                    </div>

                    <div className="grid place-items-start m-10 pt-10">
                        
                        <Brief cart={cart} subtotal={priceCounter()} remove={true}>
                            <p className="mt-0.5 text-sm text-gray-500">Shipping and P&P fees are not included.</p>

                            <p className="mt-0.5 text-sm text-gray-500 mt-5">For further information about shipping methods and rates, {""}
                            
                                <Link to="/shipping/" className='text-primary font-semibold'>click here.</Link>
                            
                            </p>
                        </Brief>
                    
                    </div> 

                </div>

            }

            
        </>

    )



}

export default Checkout