import ItemListContainer from '../../container/ItemListContainer';
import NewProduct from './NewProduct';
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import UpdateProduct from './UpdateProduct';
import AdminProduct from './AdminProduct';
import DeleteProduct from './DeleteProduct';

const Admin = ({admin, action}) => {

    let { id } = useParams()

    return (
        <>

            {(action === "delete") && <DeleteProduct id={id}/>}

            {admin ? 
                <div className="flex flex-col-reverse w-full lg:flex-row lg:h-[41rem]" data-theme="lofi">

                    <div className="grid flex-grow w-full overflow-y-scroll">

                        {(action === "update") ?

                            <AdminProduct id={id} action={action}/> 

                        :
                            <ItemListContainer categories={true} admin={admin}/>
                        
                        }

                    </div>

                    <div className="grid flex-grow w-full">
                        
                        <div className="w-full bg-neutral text-neutral-content rounded-none">

                            <div className="card-body items-center text-center justify-start">

                                <div className="leading-loose">   
                                    
                                    {(action === "update") ?

                                        <UpdateProduct id={id}/>

                                    :
                                        <NewProduct/>
                                           
                                    }

                                </div>
                                
                            </div>

                        </div>
                            
                    </div>

                </div>

            :
            
                <div className="bg-neutral" style={{height: 600 + "px"}} data-theme="lofi">
            
                    <div className="flex justify-center px-4 py-60 text-white text-2xl">
                    
                        You shouldn't be here...{''}

                        <Link to="/"
                        type="button"
                        className="font-medium text-white hover:text-accent">
                            Come with me <span aria-hidden="true"> :)</span>
                        </Link>

                    </div>

                </div> 
            
            }
        </>
    )
}


export default Admin
