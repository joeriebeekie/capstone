import cart from "../assets/cart.svg"

function Special(props) {
    return (
        <div className="card rounded-0 border-0">
            <img src={props.image} className="card-img-top rounded-0" alt={props.alt} />
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h5 class="card-title d-inline">{props.title}</h5> 
                    <span className="price-special">{props.price}</span>
                </div>
                <p className="card-text pt-3 pb-2">{props.desc}</p>
                <a href="#" className=""><img className="pe-2" src={cart} />Order online</a>
            </div>
        </div>
    )
}

export default Special;