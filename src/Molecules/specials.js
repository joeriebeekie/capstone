import Button from "../Atoms/button"
import Special from "../Atoms/special"
import bread from "../assets/bread.jpg"
import salad from "../assets/greek_salad.jpg"
import cake from "../assets/cheese_cake.jpg"

function Specials() {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col d-flex justify-content-between align-items-center pb-4">
                    <h2>Specials</h2>
                    <Button>Our menu</Button>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <Special
                        image={bread}
                        alt="Bread image"
                        title="Bread"
                        price="$5.00"
                        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
                    />
                </div>
                <div className="col-4">
                    <Special
                        image={salad}
                        alt="Greek salad image"
                        title="Greek salad"
                        price="$6.00"
                        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
                    />
                </div>
                <div className="col-4">
                    <Special
                        image={cake}
                        alt="Cheese cake image"
                        title="Cheese cake"
                        price="$3.00"
                        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
                    />
                </div>
            </div>
        </div>
    )
}

export default Specials;