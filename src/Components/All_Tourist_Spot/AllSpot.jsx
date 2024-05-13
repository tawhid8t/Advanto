import { useLoaderData } from "react-router-dom";

const AllSpot = () => {
    const allSpot = useLoaderData()
    return (
        <div>
            <h1 className="text-center text-3xl bold">All Tourist Spot section will be added: {allSpot.length}</h1>
        </div>
    );
};

export default AllSpot;