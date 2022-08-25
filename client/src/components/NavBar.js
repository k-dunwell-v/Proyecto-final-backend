
import Cart from "./Cart"
import CartWidget from "./CartWidget"
import NavBarElements from "./NavBarElements"

const NavBar = ({admin}) => {
    
    return (
        
        <div className="navbar bg-base-200" data-theme="lofi">

            <div className="navbar-start">

                <div className="dropdown relative">

                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        
                        <NavBarElements dir="right" admin={admin}/>

                    </ul>

                </div>

                <a href="/" className="btn btn-ghost normal-case text-xl">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAFBElEQVRoge3ZWahVVRgH8N/Vq5ZmTjlVliRlg0qGFVaEzZQN0EMDDdhAPRX1EBYEPTRQaANl0URUBCZBRQM2GDSZDRiVmGaDzQ5laOZY3dPDt7Z7X/Psc869pyI4f1hw9j7/9a1vTd+0aaGFFlpo4T9AW5PljcAJOBFj0vMw9Mav+AZLMB9z8XXqNwgTMAp7pGfoj5+wIvV7H5ubrPM2tOFUvIkOVOpsHViYJlNvn014HsfbbhO6uyNTcDfGp+d1eAGv4+Ok5Fr0xECx4pNwNE5Dv4KstWkxVmAlViX9BmNPHCZ2rWfiv4ILE6/L6IMZ+FOs1BJMw84NyOiLS/GlfMUfw1HoUaXPEEzH6sT/XhzFLmEgFiRBG3EV2rsqDL2ScpvkE/oMp5f0GYG3Evdd+S7VjUH4QL4akxoVUIJxWK7zHbqyhD+4wD+7kYF6i9lX8CF274KytTAcH8kn8zsOKuFfnnhPNzLIbfKd+CcmkWGEzvfmzhLuPomzvF7hx4qLvVFzj1M1jJPfmddKeAMSZ3U9QtuEva+Ii/1vYbraExmTOMuqmbkiTsEhWIpZ3VavfmSWaGkJZ1IdnG14U8x6WjeUahRt+DSNe0wJb3bilFk3MFTcjbUac3bdxflCwW9Vd44jsQVb1WF8MoFPNEnBejAAP6ZxzyvhPZI4c2oJ7CEi1IoIJf4N9CyM+YbqseARwmH+gQPLBLbhPrktP7RZmtbAPWm8ldi7CqeX3GnWND636xw+79YUNaujDXfJQ/XJJdz7E+8bka9UReb2i0Fc7yYoWw3teDSNsxlnlHCvSLwtyifrqETqwDki1qmIsP2fwJ54O42xHseVcE8q6HNZmdD+8mztFhHzZBnfsG6r/HdMFWlsZmYPK+GegA2Je0ctwbMS8R2x3dPkR+vwbqncGSPljqwiMsohJfwzxJGr4EE1strxwvFtwQHp3U2FwZphfnfC1SIdruC39Fym2Lny4/Si6s5xG+Yk8u2FdzfIJzK7C4pn6CuCzR8K8p7BXiV9euJGnYsZZ9YaaJTYjU3iXmQ4vSDkF7GijWB/kcOsKshZKILQMgzFq4U+mZUqNbVEwFXBk9u9b8fnBWHn15DTQ0TJ08U9KyrynigZ1araTMZ3qc8avJx+z601CXgpkc/awX8T8XP6/w/MExZtemrXighgntwCZW0dHhLhRC30w0z5fViAsSIbrSg3y9uwLJHHVPl/NJ5KE6lVQPsaD4tiQL8dCdsBTpYXETrShHrh+vRufj1C2oQj2iW1DSXc4SLmOljcq/VpcivEYizVQO4snOEM4XhhsYgq5osjukAc7ymi9FMTX4mZj25Aie5gL9wr9w0bcZ3YBSK3yIoPNzciOLsjFzdL0yoYjQeEBaoISzlbVEIyDMUi+ZFqqPB3buq4WPOzwHZhxp8VmVxmNJ4Q5rmIifK78oG8Il83eovzXcFz6r+kZZggzv8KnYttj2O/7bh9hPXLYql3RVm2Sxgv7HZmeS4SHrlejMQFogidpalZ+xTX6OxsCQd3Ob6QH7WZGne86OygDhBOcUJ63iAc28ciidla4A7CvqmNFRZteyzCreJYEYHhHiLKPVJ4+F0K3CtEetsUtOMS8WWols8otjUi/azH12StQ5SapmrCl7MyASNForWfsPm7ChO5PrXl4hh+IvcfQ+Sf3sYJSzVA3I9VIhf/QsRS89JzCy200EIL/1/8BXEXn91vh02nAAAAAElFTkSuQmCC"/>
                    <b>Aphelion</b>           
                </a>
                
            </div>

            <div className="navbar-center hidden lg:flex">

                <ul className="menu menu-horizontal p-0">

                    <NavBarElements dir="down" admin={admin}/>

                </ul>

            </div>

            <div className="navbar-end">

                <CartWidget/>

                <Cart/>
        
            </div>

        </div>

    )
}

export default NavBar

