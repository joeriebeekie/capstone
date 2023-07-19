import Nav from "../Atoms/nav"
import logo from "../assets/logo.png"

function Header() {
    return (
        <header className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col flex-shrink-1 flex-grow-0">
                    <img width="200" className="py-3" src={logo} />
                </div>
                <div className="col">
                    <Nav />
                </div>
            </div>
        </header>
    )
}

export default Header;