import Special from "../Molecules/specials"
import CallToAction from "../Molecules/calltoaction"
import Testimonials from "../Molecules/testimonials"
import About from "../Molecules/about"

function Home() {
    return (
        <>
            <CallToAction />
            <Special />
            <Testimonials />
            <About />
        </>
    )
}

export default Home;