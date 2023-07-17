import Nav from "../Atoms/nav"
import logo from "../assets/logo.png"

function Header() {
    return (
        <header>
            <div className="col-3">
                <img src={logo} />
            </div>
            <div className="col">
                <Nav />
            </div>
        </header>
    )
}

export default Header;