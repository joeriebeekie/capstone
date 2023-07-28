function SubHeader(props) {
    return (
        <div className="backcolor">
            <div className="container">
                <div className="row py-5">
                    <div className="col py-4 text-white d-flex flex-column align-items-start justify-content-center">
                        <h1 className="mb-0">{props.title}</h1>
                        <h2>{props.titleSec}</h2>
                    </div>
                    {props.image &&
                        <div className="col-6 d-flex justify-content-end">
                            <img width="400" className="round headerImg" src={props.image} />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default SubHeader;