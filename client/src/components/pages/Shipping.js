
const Shipping = () => {

    return (

        <div className="bg-neutral pt-10"  style={{height: 600 + "px"}} data-theme="lofi">


            <div className="flex flex-col w-full">

                <div className="grid card place-items-center overflow-auto">

                    <div className="overflow-x-auto">
                        <table className="table table-zebra max-w-7xl">

                            <thead>
                                <tr>
                                    <th>METHOD</th>
                                    <th>TRACKING</th>
                                    <th>WEIGHT</th>
                                    <th>ESTIMATED DELIVERY TIME (USA)</th>
                                </tr>
                            </thead>

                            <tbody>

                                <tr>
                                    <th>Certified Intl. Mail</th>
                                    <td>Yes</td>
                                    <td>Up to 2kg</td>
                                    <td>From 4 to 8 weeks</td>
                                </tr>

                                <tr>
                                    <th>EMS</th>
                                    <td>Yes</td>
                                    <td>Up to 30kg</td>
                                    <td>From 4 to 10 business days</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="m-5"/>

                <div className="flex w-full">

                    <div className="grid flex-grow card place-items-center overflow-auto">

                        <div className="overflow-x-auto">
                            <table className="table table-zebra max-w-7xl">

                                <thead>
                                    <tr>
                                        <th>GRAMS</th>
                                        <th>UNITED STATES</th>
                                        <th>OTHER COUNTRIES</th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    <tr>
                                        <th>0 - 1000</th>
                                        <td>$8</td>
                                        <td>$15</td>
                                    </tr>

                                    <tr>
                                        <th>1001 - 2000</th>
                                        <td>$15</td>
                                        <td>$20</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>

                    <div className="m-5"/>

                    <div className="grid flex-grow card place-items-center overflow-auto">

                        <div className="overflow-x-auto">
                            <table className="table table-zebra max-w-7xl">

                                <thead>
                                    <tr>
                                        <th>GRAMS</th>
                                        <th>UNITED STATES</th>
                                        <th>OTHER COUNTRIES</th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    <tr>
                                        <th>0 - 100</th>
                                        <td>$16</td>
                                        <td>$24</td>
                                    </tr>

                                    <tr>
                                        <th>101 - 1000</th>
                                        <td>$20</td>
                                        <td>$28</td>
                                    </tr>

                                    <tr>
                                        <th>1001 - 1500</th>
                                        <td>$25</td>
                                        <td>$40</td>
                                    </tr>

                                    <tr>
                                        <th>1501 - 2000</th>
                                        <td>$28</td>
                                        <td>$46</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                    </div>
                </div>

            </div>

        </div>
                

    )
}

export default Shipping
