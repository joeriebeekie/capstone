import { Link } from "react-router-dom";

function Nav() {
    return (
        <ul className="list-group list-group-horizontal justify-content-end" >
            <li className="list-group-item border-0"><Link >Home</Link></li>
            <li className="list-group-item border-0"><Link >About</Link></li>
            <li className="list-group-item border-0"><Link >Menu</Link></li>
            <li className="list-group-item border-0"><Link to={`book`}>Reservations</Link></li>
            <li className="list-group-item border-0"><Link >Order online</Link></li>
            <li className="list-group-item border-0"><Link >Login</Link></li>
        </ul>
    )
}

export default Nav;