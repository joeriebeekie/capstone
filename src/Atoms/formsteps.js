function FormSteps(props) {
    return (
        <div className="d-flex justify-content-center align-items-center w-100">
            <div data-status="active" className="rounded-circle statusCircle"></div>
            <div className="statusLine"></div>
            <div data-status={props.step == 1 ? "active" : "inactive"} className="rounded-circle statusCircle"></div>
        </div>
    )
}

export default FormSteps;