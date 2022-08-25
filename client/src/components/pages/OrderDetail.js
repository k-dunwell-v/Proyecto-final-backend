

const OrderDetail = ({id, customer, order_date, tracking}) => {

    return (

        <div className="card lg:card-side bg-base-100 shadow-xl divide-x divide-y" style={{maxWidth: 600 + "px", minHeight: 200 + "px"}}>

            <div className="flex flex-col divide-y" style={{minWidth: 240 + "px"}}>

                <div className="grid h-full place-items-center content-end text-neutral-content px-4 pt-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>Your order was updated on:</span>
                    <span className="font-medium">{order_date}</span>
                </div>

                <div className="grid h-full place-items-center content-start px-4 text-gray-400">

                    {tracking ? 

                        <div>
                            <p className="font-normal">4-72 tracking number:</p>
                            <p className="card-title">{tracking}</p>
                        </div>

                        :

                        <div>
                            <p className="font-normal">You'll receive a tracking <br/> number as soon as possible.</p>
                        </div>

                    }
                    

                </div>

            </div>

            <div className="card-body">

                <h1 className="text-2xl font-normal">Customer information</h1>

                <h2 className="font-semibold text-lg">Contact information</h2>
                <p>{customer.email}</p>


                <h3 className="font-semibold text-lg mt-2">Shipping address</h3>
                {customer.name}<br/>
                {customer.address}<br/>
                {customer.detail && <>{customer.detail}</>}
                {customer.city + ", " + customer.state}<br/>
                {customer.zip + " - " + customer.country}<br/>
                {customer.phone}
            </div>
        </div>


    )
}

export default OrderDetail
