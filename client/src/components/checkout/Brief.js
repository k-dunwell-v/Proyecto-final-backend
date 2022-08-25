import ItemInCart from "../ItemInCart"


const Brief = (props) => {

    return (

        <>
            <ul role="list" className="-my-6 divide-y divide-gray-200 h-full  overflow-y-scroll pr-10 w-full" style={{maxHeight: 400 + "px"}}>

                {props.cart.map(product => ItemInCart(product["item"].id, product["item"].img, product["item"].title, product["item"].price, product.quantity, props.remove))}
                
            </ul>

            <div className="border-t w-full border-gray-200 sm:px-6 h-full">

                <div className="flex text-xl font-medium text-gray-900 mt-10">
                    <p>{"Subtotal ⇢ $" + props.subtotal}</p>
                </div>

                {props.children}

            </div>
        </>

    )

}

export default Brief