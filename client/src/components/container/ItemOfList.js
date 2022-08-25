import { Link } from "react-router-dom"

const ItemOfList = ({item, admin}) => {

    return (
        <>
            {admin ? 

                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src={item.thumbnail || "https://i.ibb.co/6nDS7nX/goose.jpg"} alt={item.title} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.title}
                        </h2>
                        
                        <div className="card-actions justify-center">
                            
                            <Link to={"/admin/update/" + item.id}>
                                <button className="btn btn-primary">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAAg0lEQVQ4je3TvQ2CYBiFUWKtTmBsdAkmEArXYCYmoNRJ/FnGgLE4Nh8JwQreUp7uNqe7WRYMGxyjTo8VuOGCJoqV6FClfcUhisEHFe5YR7G+DsUc7IR2hL1xXrAF+wss93unFuVkLIE1niNs+jcH4APbhIaxHV4JrZHPxhK4wj6EDPoCX6S8ji9zaWwAAAAASUVORK5CYII="/>
                                </button>
                            </Link>

                            <Link to={"/admin/delete/" + item.id}>
                                <button className="btn btn-primary">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAA2ElEQVQ4je2UPWoCURSFvyNTi2CVlEMKcRVpJKWVWYG4HN2AK7BLGSzcgOkGSSFTxioEbNLl2Dxh4t+b0Sk98ODdy7nfO6+5ULMUM9h+AZqh3Ep6Lw203Qc6hdYTMDyYmQLrQv0p6e1cmpmra3YpYQrMQ/l66WvAHtSTlO+byT+6lNv+DfcP24/AA7AKli6wkfRV8OVFRiOSYgQsgTScZeidVQxYWXfgHViHbGe2s2t9yQnvH9CyPYgwm8BPmYSTCptmfDh/tGBtN4BnoB15+xtYSHI05S3aAf4Qpe+B+cR3AAAAAElFTkSuQmCC"/>
                                </button>
                            </Link>

                            
                        </div>
                    </div>
                </div>

                :
                
                <Link to={"/item/" + item.id} className="group">
                    <div className="card w-full bg-base-100 shadow-xl">
                        <figure><img src={item.thumbnail || "https://i.ibb.co/6nDS7nX/goose.jpg"} alt={item.title} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {item.title}
                            </h2>
                            
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">${item.price}</div>
                                <div className="badge badge-outline">{item.detail}</div>
                            </div>
                        </div>
                    </div>
                </Link>
                
            }
        </>
    )
}

export default ItemOfList
