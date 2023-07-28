import Nav from "../Atoms/nav"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col flex-shrink-1 flex-grow-0">
                <Link><img width="200" className="py-3" src={logo} /></Link>
                </div>
                <div className="col">
                    <Nav />
                </div>
            </div>
        </header>
    )
}

export default Header;