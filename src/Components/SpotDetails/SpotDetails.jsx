import { NavLink, useLoaderData } from "react-router-dom";

const SpotDetails = () => {
    const spotDetail = useLoaderData();
    const { image, tourists_spot_name, location, short_description, average_cost, seasonality, travel_time, totalVisitorsPerYear, userName } = spotDetail
    return (
        <div>
            <div className="my-10 px-2">
                <NavLink to="/allSpot">
                    <div className="btn mb-4 bg-[#63D5D7] flex items-center max-w-40">
                        <img className="w-8 h-8" src="https://i.postimg.cc/VLMDQ6Nh/icons8-back-50.png" alt="" />
                        <p>back to page</p>
                    </div>
                </NavLink>
                <div className="lg:h-[550px]">
                    <img className="rounded-xl h-full w-full" src={image} alt="" />
                </div>
                <div className="px-6 mt-5">
                    <div className="space-y-2 w-full">
                        <div className="flex justify-between items-center mb-8">
                            <h1 className="bold text-3xl">{tourists_spot_name}</h1>
                            <h3 className="font-bold text-2xl flex">${average_cost}/1 Week</h3>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img src="https://i.postimg.cc/hvBgjV4z/icons8-location.gif" alt="" />
                            <h3 className="text-lg">{location}</h3>
                        </div>
                        <div className="flex">

                        </div>
                    </div>
                    <div className="mt-4">
                        <p><span className="font-bold">{tourists_spot_name}: </span>{short_description}</p>
                    </div>
                    <div className="flex flex-col mt-6 space-y-4">
                        <div className="flex flex-col lg:flex-row items-center gap-3">
                            <h3 className="bold text-xl text-[#63D5D7]">best season for trip: </h3>
                            <div className='flex gap-2 items-center'>
                                <img className='w-9 h-9' src="https://i.postimg.cc/44B8Y8qZ/icons8-seasonal-marketing-78.png" alt="" />
                                <h3>{seasonality}</h3>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center gap-3">
                            <h3 className="bold text-xl text-[#63D5D7]">best time for travel: </h3>
                            <div className='flex gap-2 items-center'>
                                <img className='w-8 h-8' src="https://i.postimg.cc/fLv8j5bc/icons8-time.gif" alt="" />
                                <h3>{travel_time}</h3>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center gap-3">
                            <h3 className="bold text-xl text-[#63D5D7]">people visitors every year: </h3>
                            <div className='flex gap-2 items-center'>
                                <img className='w-8 h-8' src="https://i.postimg.cc/sXSrVkwV/icons8-visitors-64.png" alt="" />
                                <h3>{totalVisitorsPerYear}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end mt-10 lg:mt-0">
                        <h3><span className="font-bold">Posted By:</span> {userName}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpotDetails;