import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"



const ItemDetailContainer = () => {

    let { id } = useParams()

    const [product, setProduct] = useState([])

    useEffect(() => {

        fetch("http://localhost:4000/api/productos/"+id).then(
            response => response.json()

        ).then(
            data => {
                setProduct(data)
            }
        )

    })

    return (

        <div>

            {(typeof product.title === "undefined") ? (
                
                <ItemDetail 
                    id="000"
                    img="https://i.ibb.co/6nDS7nX/goose.jpg"
                    title="Huh?"
                    detail="Where is the product?!	(・・;)ゞ"
                    description=""
                    price="free"
                    stock={0}
                />

            ) : (

                <ItemDetail 
                    id={product.id} 
                    img={product.thumbnail} 
                    title={product.title} 
                    detail={product.detail} 
                    description=""
                    price={product.price} 
                    stock={product.stock}
                />

            )}
            
        </div>


        
    )
}


export default ItemDetailContainer
