import { useLoaderData } from "react-router-dom";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import SingleSpot from "../All_Tourist_Spot/SingleSpot";

const Home = () => {
    const allSpot = useLoaderData();
    const haveToShow = allSpot.slice(0, 6)
    return (
        <div>
            <div className="mb-24">
                <h1 className="text-center text-3xl bold">Popular Destination</h1>
                <p className="text-center text-lg mt-3 text-[#868EA4] w-3/4 mx-auto">We live in a wonderful world that is full of beauty, charm and adventure. There is no end to the adventures we can have if only we seek them with our eyes open.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                    {
                        haveToShow.map(spot => <SingleSpot key={spot._id} spot={spot}></SingleSpot>)
                    }
                </div>
                <div className="">
                    <button className="btn text-center mx-auto bg-[#00BABE] text-white px-12 mt-6 flex justify-center">Show All</button>
                </div>
            </div>
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>

        </div>
    );
};

export default Home;