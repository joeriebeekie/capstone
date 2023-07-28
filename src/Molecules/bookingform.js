import Button from "../Atoms/button";
import FormSteps from "../Atoms/formsteps";
import image from "../assets/confirm.jpg";
import cake from "../assets/cake.svg";
import whiteCake from "../assets/cake_white.svg";
import { useState, useReducer } from "react";

function BookingForm(props) {
    const [formStep, setFormStep] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    const nextStep = () => {
        props.setSubHeader({
            title: "Confirm reservation",
            titleSec: "Check your preferences",
            image: image
        })

        setFormStep(1);
    }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [diners, setDiners] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    return (
        <div className="container">
            <div className="row my-4 py-5">
                <div className="col d-flex flex-column align-items-start justify-content-center">
                    <div className="p-4 round shadow-lg w-100 mb-5">
                        <form onSubmit={e => {handleSubmit(e)}}>
                            <div className="stepSlide" data-step={formStep == 0 ? "active" : "inactive"}>
                                <label for="name" className="highlight d-block mb-3">
                                    What is your name:
                                    <input className="field d-block mt-2" id="name" type="text" value={name} onChange={e => setName(e.target.value)} />
                                </label>
                                <label for="email" className="highlight d-block mb-3">
                                    Your e-mail adress:
                                    <input className="field d-block mt-2" id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                                </label>
                                <label for="diners" className="highlight d-block mb-3">
                                    How many diners:
                                    <div className="mt-2 dinerAmount d-flex justify-content-between">
                                        <a onClick={() => setDiners(prevDiners => {
                                            const newValue = prevDiners - 1;
                                            return newValue >= 1 ? newValue : prevDiners;
                                        })} className={diners <= 1 ? "disable min" : "min"}>-</a>
                                        <span>{diners > 1 ? diners + " personen" : diners + " persoon"}</span>
                                        <a onClick={() => setDiners(prevDiners => {
                                            const newValue = prevDiners + 1;
                                            return newValue <= 10 ? newValue : prevDiners;
                                        })} className={diners >= 10 ? "disable plus" : "plus"}>+</a>
                                    </div>
                                    <input className="d-none" id="diners" min="1" max="10" type="number" value={diners} onChange={e => setDiners(e.target.value)} />
                                </label>
                                <label for="occasion" className="highlight d-block mb-3">
                                    <span className="d-block">Select occasion:</span>
                                    <div className="selectWrap mt-2 d-inline-flex align-items-center">
                                        <img className="px-2" src={cake} />
                                        <select
                                            value={occasion}
                                            onChange={e => setOccasion(e.target.value)}
                                            id="occasion"
                                            className="d-block field"
                                        >
                                            <option value="Birthday">Birthday</option>
                                            <option value="Engagement">Engagement</option>
                                            <option value="Anniversary">Anniversary</option>
                                        </select>
                                    </div>
                                </label>
                                <label for="date" className="highlight d-block mb-3">
                                    Choose a date:
                                    <input className="field d-block mt-2" id="date" type="date" value={date} onChange={e => setDate(e.target.value)} />
                                </label>
                                <label for="time" className="highlight d-block mb-3">
                                    <span className="d-block">Choose a time:</span>
                                    <div className="selectWrap mt-2 d-inline-flex align-items-center">
                                        <select
                                            value={time}
                                            onChange={e => setTime(e.target.value)}
                                            id="time"
                                            className="d-block field"
                                        >
                                            <option>17:00</option>
                                            <option>18:00</option>
                                            <option>19:00</option>
                                            <option>20:00</option>
                                            <option>21:00</option>
                                            <option>22:00</option>
                                        </select>
                                    </div>
                                </label>
                                <div className="d-flex justify-content-end">
                                    <a onClick={nextStep}><Button>Next</Button></a>
                                </div>
                            </div>
                            <div className="stepSlide" data-step={formStep == 1 ? "active" : "inactive"}>
                                <div className="overviewItem mb-3">
                                    <span className="highlight d-block">Your name:</span>
                                    <span>{name}</span>
                                </div>
                                <div className="overviewItem mb-3">
                                    <span className="highlight d-block">Your e-mail:</span>
                                    <span>{email}</span>
                                </div>
                                <div className="overviewItem mb-3">
                                    <span className="highlight d-block">Amount of diners:</span>
                                    <span>{diners}</span>
                                </div>
                                <div className="overviewItem mb-3">
                                    <span className="highlight d-block">Your occasion:</span>
                                    <span>{occasion}</span>
                                </div>
                                <div className="overviewItem">
                                    <span className="highlight d-block">Your date and time:</span>
                                    <span>{date} at {time}</span>
                                </div>
                                <div className="d-flex justify-content-end">
                                    <input className="round border-0 d-block button" type="submit" value="Submit" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <FormSteps step={formStep} />
                </div>
            </div>
        </div>
    )
}

export default BookingForm;