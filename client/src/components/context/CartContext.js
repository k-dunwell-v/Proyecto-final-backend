import { createContext, useState } from "react";


function getLocal() {
    let localCart = localStorage.getItem("LocalCart")
    localCart = JSON.parse(localCart)

    return localCart
}


function PushLocal(cart) {
    localStorage.setItem("LocalCart", JSON.stringify(cart))

}

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////


export const CartViewContext = createContext(false)


/////////////////////////////////////////////////////
/////////////////////////////////////////////////////


export const CartContext = createContext({

    cart: [],
    show: [],
    swapShow: () => [],
    inCart: () => [],
    isInCart:() => [],
    addToCart: () => [],
    priceCounter: () => [],
    deleteFromCart: () => [],
    clearCart: () => {},

})


const CartProvider = ( {children} ) => {

    const [cart, setCart] = useState(getLocal() || [])
    const [show, setShow] = useState(false)


    /////////////////////////////////////////
    const swapShow = () => {
        setShow(currentState => !currentState)
    }
    /////////////////////////////////////////


    /////////////////////////////////////////
    const inCart = () => {

        let total = 0

        cart.forEach((element) => {
            total = total + parseInt(element.quantity);
        });

        return total

    }

    /////////////////////////////////////////


    /////////////////////////////////////////
    const isInCart = ( id ) => {

        const index = cart.findIndex((cartItem => cartItem.item["id"] === id))
        let quantity = 0

        if (index > -1) {
            quantity = cart[index].quantity
        }

        const result = {index: index, currentQuantity: quantity}

        return result

    }
    
    /////////////////////////////////////////


    ///////////////////////////////////////// 
    const addToCart = ( {item, quantity} ) => {

        const { index } = isInCart(item.id)

        if (index > -1) {

            setCart(currentCart => {

                let oldQuantity = currentCart[index].quantity
                let oldPrice = currentCart[index].item.price / oldQuantity

                currentCart[index].quantity = quantity
                currentCart[index].item.price = oldPrice * quantity

                return currentCart.concat()
    
            })

        }else{

            setCart(currentCart => {

                currentCart.push({item:{id:item.id, img: item.img, title: item.title, price: item.price}, quantity:quantity})
        
                return currentCart.concat()

            })
        }

        PushLocal(cart)

    }
    /////////////////////////////////////////


    /////////////////////////////////////////
    const priceCounter = () => {
		let total = 0

		cart.forEach((element) => {
			total = total + parseInt(element.item.price);
		});
		
		return total
	}
    /////////////////////////////////////////


    /////////////////////////////////////////
    const deleteFromCart = ( id ) => {

        const { index } = isInCart(id)

        setCart(currentCart => {
            currentCart.splice(index, 1)
            PushLocal(cart)
            return currentCart.concat()
        
        })


    }
    /////////////////////////////////////////


    /////////////////////////////////////////
    const clearCart = () => {
        setCart(currentCart => {
        currentCart.splice(0, currentCart.length)
        PushLocal(cart)
        return currentCart.concat()
        })
        
    }
    /////////////////////////////////////////


    const context = {
        cart,
        show,
        swapShow,
        inCart,
        isInCart,
        addToCart,
        priceCounter,
        deleteFromCart,
        clearCart

    }

    return (

        <CartContext.Provider value={ context }>
            {children}
        </CartContext.Provider>

    )

        


}

export default CartProvider