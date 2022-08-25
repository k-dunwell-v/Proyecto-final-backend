import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import ItemCount from "../ItemCount"


const ItemDetail = ({id, img, title, detail, description, price, stock}) => {

    const { swapShow, addToCart, isInCart, deleteFromCart } = useContext(CartContext)

    const { index, currentQuantity } = isInCart(id)

    function onAdd(quantity) {

        if (quantity > 0) {
            const updatedPrice = parseInt(price) * quantity
            addToCart({item:{id:id, img: img, title: title, price: updatedPrice}, quantity:quantity})
            swapShow()

        }else{ 
            
            if (currentQuantity > 0){
                deleteFromCart(id)
                swapShow()

            } 
        } 
        
    }

    return (

        <div className="bg-white pt-10 pb-24" data-theme="lofi">

            <div className="pt-6">

                <div className="max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
                    
                    <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
                        <img src={img} className="h-full w-full object-center object-cover"/>
                    </div>

                    <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">

                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl">{title}</h1>
                    
                            <p className="mt-1 text-lg text-gray-500">{detail}</p>
                            
                            <hr></hr>
                        </div>
                        
                        <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">

                            <div>

                                <div className="mt-10">
                                    <h3 className="text-3xl font-semibold text-secondary font-mono">{"$" + price}</h3>
                                    <p className="text-sm text-gray-500">price in USD</p>
                                </div>

                                <div className="mt-10 space-y-6">
                                    <p className="text-lg font-bold text-gray-600">{description}</p>
                                </div>
                                
                                <ItemCount title={title} img={img} stock={stock} quantity={currentQuantity} onAdd={onAdd}/>

                            </div>


                        </div>
    
                    </div>

                </div>

            </div>

        </div>


    )
}


export default ItemDetail