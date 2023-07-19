import image from "../assets/about.png"

function About() {
    return (
        <div className="container">
            <div className="row py-5">
                <div className="col-6 d-flex flex-column align-items-start justify-content-center">
                    <h2>Little Lemon Chicago</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets</p>
                </div>
                <div className="col-6 d-flex justify-content-end">
                    <img width="400" className="" src={image} />
                </div>
            </div>
        </div>
    )
}

export default About;