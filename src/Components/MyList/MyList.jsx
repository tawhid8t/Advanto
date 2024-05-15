import { useLoaderData } from "react-router-dom";
import SingleSpot from "../All_Tourist_Spot/SingleSpot";

const MyList = () => {
    const mySpots = useLoaderData();
    return (
        <div>
            <h1 className="text-center text-3xl bold">My List section will be added: {mySpots.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                {
                    mySpots.map(spot => <SingleSpot key={spot._id} spot={spot}></SingleSpot>)
                }
            </div>
        </div>
    );
};

export default MyList;