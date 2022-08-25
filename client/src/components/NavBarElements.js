import { Link } from "react-router-dom";

const NavBarElements = ({dir, admin}) => {

    let arrow;

    if (dir === "down") {

        arrow = <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>

    }else {

        arrow = <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>

    }

    return (
        
        <>

            {
                (admin) &&
                
                <li>

                    <Link to="/admin/" className="justify-between">
                        <b>Administrar productos</b>
                    </Link>

                </li>

            }

            {/* <li tabIndex="0">

                <Link to="/categorias/" className="justify-between">
                    Categorías
                    {arrow}
                </Link>

                <ul className="p-2 bg-base-100">

                    <li>
                        <Link to="/categories/collares/">
                            Collares
                        </Link>
                    </li>

                    <li>
                        <Link to="/categories/arneses/">
                            Arneses
                        </Link>
                    </li>

                    <li>
                        <Link to="/categories/correas/">
                            Correas
                        </Link>
                    </li>

                </ul>

            </li>

            <li>
                <Link to="/order/">
                    Seguimiento
                </Link>
            </li>

            <li>
                <Link to="/shipping/">
                    Envíos
                </Link>
            </li> */}

        </>
            
    )


}

export default NavBarElements