import image from "../assets/head.jpg"
import Button from "../Atoms/button"
import { Link } from "react-router-dom";

function CallToAction() {
    return (
        <div className="backcolor mb-5">
            <div className="container">
                <div className="row pt-5 pb-5">
                    <div className="col-6 text-white d-flex flex-column align-items-start justify-content-center">
                        <h1 className="mb-0">Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <Link to={`book`}><Button>Reserve a table</Button></Link>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <img width="400" className="round headerImg" src={image} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallToAction;