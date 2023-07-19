import image from "../assets/avatar.png"
import Testimonial from "../Atoms/testimonial"

function Testimonials() {
    return (
        <div className="backcolor">
            <div className="container">
                <div className="row pt-5 pb-4">
                    <div className="col text-white text-center d-flex align-items-start justify-content-center">
                        <h2>Testimonials</h2>
                    </div>
                </div>
                <div className="row pb-5">
                    <div className="col-3">
                        <Testimonial 
                            image={image}
                            alt="Henry Image"
                            name="Henry Loon"
                            desc="It's nice"
                        />
                    </div>
                    <div className="col-3">
                        <Testimonial 
                            image={image}
                            alt="Henry Image"
                            name="Barry Bakker"
                            desc="It's bread"
                        />
                    </div>
                    <div className="col-3">
                        <Testimonial 
                            image={image}
                            alt="Henry Image"
                            name="Barry Paf"
                            desc="It's epic"
                        />
                    </div>
                    <div className="col-3">
                        <Testimonial 
                            image={image}
                            alt="Henry Image"
                            name="God Zilla"
                            desc="It's fire"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;