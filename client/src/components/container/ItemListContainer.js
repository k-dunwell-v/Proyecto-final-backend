import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemOfList from "./ItemOfList"
import ItemList from "./ItemList"
import Carousel from "./Carousel";


const ItemListContainer = ({categories, admin}) => {
    
    let { category } = useParams()

    const [products, setProducts] = useState([])

    useEffect(() => {
        
        fetch("http://localhost:4000/api/productos/").then(
            response => response.json()
        ).then(
            data => {
                setProducts(data)
            }
        )

    },[products])

    return (

        <>

            {!categories && <Carousel/>}

            <ItemList className="main">

                {(typeof products[1] === "undefined") ?

                    <b>Loading...</b>

                :
                    products.map ( product => <ItemOfList key={product.id} item={product} admin={admin}/>)
                }
                    
            </ItemList>

            

        </>


        
    )
}

export default ItemListContainer
