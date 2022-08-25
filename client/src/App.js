import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import ItemListContainer from './components/container/ItemListContainer';
import ItemDetailContainer from './components/container/ItemDetailContainer';
import Admin from './components/pages/admin/Admin';
import Order from './components/pages/Order';
import Shipping from './components/pages/Shipping';
import CartProvider from './components/context/CartContext';
import Footer from './components/Footer';
import Checkout from './components/checkout/Checkout';


function App() {

  const [Permit, setPermit] = useState([])

    useEffect(() => {
        
        fetch("/api/").then(
            response => response.json()
        ).then(
            data => {
				setPermit(data["admin"])
            }
        )

    })

  return (

    <CartProvider>
      
		<BrowserRouter>

			<NavBar admin={Permit}/>

			<Routes>
				
				<Route path='/' element={<ItemListContainer categories={false}/>}/>

				<Route path='/categories/' element={<ItemListContainer categories={true}/>}/>

				<Route path='/categories/:category' element={<ItemListContainer/>}/>

				<Route path='/item/:id' element={<ItemDetailContainer/>}/>

				<Route path='/admin/' element={<Admin admin={Permit}/>}/>

				<Route path='/admin/update/:id' element={<Admin admin={Permit} action={"update"}/>}/>

				<Route path='/admin/delete/:id' element={<Admin admin={Permit} action={"delete"}/>}/>

				<Route path='/order/' element={<Order/>}/>

				<Route path='/shipping/' element={<Shipping/>}/>

				<Route path='/cart/' element={<Checkout/>}/>

			</Routes>

			<Footer/>

		</BrowserRouter>

    </CartProvider>

    
      

  );
}

export default App;
