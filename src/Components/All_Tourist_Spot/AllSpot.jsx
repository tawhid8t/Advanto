import { useLoaderData } from "react-router-dom";
import SingleSpot from "./SingleSpot";

const AllSpot = () => {
    const allSpot = useLoaderData()
    return (
        <div>
            <h1 className="text-center text-3xl bold">Explore our all spots</h1>
            <p className="text-center text-lg mt-3 text-[#868EA4]">The world is a book and those who do not travel read only one page — Saint Augustine</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                {
                    allSpot.map(spot => <SingleSpot key={spot._id} spot={spot}></SingleSpot>)
                }
            </div>
        </div>
    );
};

export default AllSpot;