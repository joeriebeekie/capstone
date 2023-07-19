import logo from "../assets/logo_only.png"
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="backcolor">
            <div className="py-5 container">
                <div className="row">
                    <div className="col-3">
                        <img width="50" src={logo} />
                    </div>
                    <div className="col-3">
                        <p className="highlight text-white">Navigation</p>
                        <ul className="list-group justify-content-end" >
                            <li className="list-group-item bg-transparent p-0 border-0"><Link className="text-white" >Home</Link></li>
                            <li className="list-group-item bg-transparent p-0 border-0"><Link className="text-white" >About</Link></li>
                            <li className="list-group-item bg-transparent p-0 border-0"><Link className="text-white" >Menu</Link></li>
                            <li className="list-group-item bg-transparent p-0 border-0"><Link className="text-white" to={`book`}>Reservations</Link></li>
                            <li className="list-group-item bg-transparent p-0 border-0"><Link className="text-white" >Order online</Link></li>
                            <li className="list-group-item bg-transparent p-0 border-0"><Link className="text-white" >Login</Link></li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <p className="highlight text-white">Contact</p>
                        <ul className="list-group justify-content-end" >
                            <li className="list-group-item text-white bg-transparent p-0 border-0">Adress</li>
                            <li className="list-group-item text-white bg-transparent p-0 border-0">Phone number</li>
                            <li className="list-group-item text-white bg-transparent p-0 border-0">Email</li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <p className="highlight text-white">Social media</p>
                        <ul className="list-group justify-content-end" >
                            <li className="list-group-item text-white bg-transparent p-0 border-0">Instagram</li>
                            <li className="list-group-item text-white bg-transparent p-0 border-0">Facebook</li>
                            <li className="list-group-item text-white bg-transparent p-0 border-0">LinkedIn</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;