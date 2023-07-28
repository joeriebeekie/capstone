function Testimonial(props) {
    return (
        <div className="card border-0 rounded-0 mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                <img src={props.image} className="img-fluid rounded p-3" alt={props.alt} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;