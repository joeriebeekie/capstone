import SubHeader from "../Molecules/subheader";
import BookingForm from "../Molecules/bookingform";
import { useState } from "react";

function Booking() {
    const [subHeader, setSubHeader] = useState({
        title: "Reserve a table",
        titleSec: "Little Lemon Chicago"
    })
    return (
        <>
            <SubHeader title={subHeader.title} titleSec={subHeader.titleSec} image={subHeader.image} />
            <BookingForm setSubHeader={setSubHeader} />
        </>
    )
}

export default Booking;