import { useState } from "react";
import OrderDetail from "./OrderDetail";
import Brief from "../checkout/Brief";



const Order = () => {

    const [orderData, setOrderData] = useState({
        id:" ",
        active: false,
        error: false,
        customer: {},
        cart: {},
        order_date: "", 
        shipping: "",
        fee: "",
        total: "",
        tracking: ""
    })


    //     function setOrderHandler (e) {
    //         setOrderData({...orderData, 
    //             id: e.target.value
    //         })
    //     } 

    //     const getOrder = (id) => {
        
    //         const db = getFirestore()
    //         const orders = doc( db, "orders", id )

    //         getDoc( orders ).then( result => {

    //             if (result.exists()) {

    //                 setOrderData({...orderData,
    //                     active: true,
    //                     error: false,
    //                     customer: result.data().customer,
    //                     cart: result.data().cart,
    //                     order_date: result.data().order_date, 
    //                     shipping: result.data().shipping,
    //                     fee: result.data().fee,
    //                     total: result.data().total,
    //                     tracking: result.data().tracking
    //                 })

    //             }else{
    //                 setOrderData({...orderData,
    //                     error: true,
    //                 })
    //             }

    //         })

    //     }

    // return (
        

    //     <div className="w-full bg-neutral text-neutral-content rounded-none h-full" data-theme="lofi">
            
    //         {orderData.error && <div className="alert alert-error shadow-lg rounded-none">
    //         <div>
    //             <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    //             <span>Hummm... Are you sure about that?</span>
    //         </div>
    //         </div>}


    //         {!orderData.active ? 
            
    //             <div className="flex justify-center px-4 py-60 text-2xl" style={{minHeight: 610 + "px"}}>

    //                 <div className="form-control">

    //                     <div className="input-group">
    //                         <input type="text" placeholder="Order ID" className="input input-bordered" onChange={(e) => setOrderHandler(e)}/>
    //                         <button className="btn btn-square" onClick={() => getOrder(orderData.id)}>
    //                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    //                         </button>
    //                     </div>
    //                 </div>

    //             </div> 

    //             : 
            
    //             <div className="flex flex-col w-full lg:flex-row h-full" data-theme="lofi">

    //                 <div className="grid flex-grow w-full bg-neutral justify-center content-center py-32">
    //                     <OrderDetail id={orderData.id} customer={orderData.customer} order_date={orderData.order_date} tracking={orderData.tracking}/>
    //                 </div>

    //                 <div className="grid flex-grow m-10 pt-10">
                        
    //                     <Brief cart={orderData.cart["products"]} subtotal={orderData.cart["subtotal"]}>
                            
    //                         <div className="text-xl font-medium text-gray-900">
    //                             <p>
    //                                 Shipping ⇢ {orderData.shipping || "calculating"} <br/>
    //                                 P&P fees ⇢ {orderData.fee || "calculating"}
    //                             </p>
    //                         </div>

    //                         <div className="border-t w-full border-gray-200 mt-10">
    //                             <div className="text-xl font-medium text-gray-900 mt-5">
    //                                 <p>Total ⇢ {orderData.total || "calculating"}</p>
    //                             </div>
    //                         </div>

    //                     </Brief>

    //                 </div> 

    //             </div>
            
    //         }




    //     </div> 


        
    // )
}


export default Order
