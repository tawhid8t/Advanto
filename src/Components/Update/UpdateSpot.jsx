import { useLoaderData } from "react-router-dom";

const UpdateSpot = () => {
    const spotData = useLoaderData()
    const { image, tourists_spot_name,  short_description, average_cost, seasonality, travel_time, totalVisitorsPerYear, country_Name, userName, userEmail } = spotData
    const handleUpdate = e =>{
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const tourists_spot_name = form.tourists_spot_name.value;
        const country_Name = form.country_Name.value;
        const location = form.location.value;
        const short_description = form.short_description.value;
        const average_cost = form.average_cost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
        const userEmail = form.userEmail.value;
        const userName = form.userName.value;
        const updateSpot = {image, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time, totalVisitorsPerYear, userEmail, userName}
        console.log(updateSpot);
    }
    return (
        <div className="my-14 p-4">
            <form onSubmit={handleUpdate} className="">
                <div className="form-control space-y-4">
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text bold text-lg">ImageURL</span>
                        </label>
                        <input type="text" placeholder="imageURL" name="image" defaultValue={image} className="input w-full input-bordered" required />
                    </div>

                    <div className="flex justify-between gap-4 flex-col lg:flex-row">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text bold text-lg">Tourists spot name</span>
                            </label>
                            <input type="text" placeholder="tourists spot name" name="tourists_spot_name" defaultValue={tourists_spot_name} className="input w-full input-bordered" required />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text bold text-lg">Country name</span>
                            </label>
                            <input type="text" placeholder="country name" name="country_Name" defaultValue={country_Name} className="input w-full input-bordered" required />
                        </div>
                    </div>
                    <div className="flex justify-between gap-4 flex-col lg:flex-row">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text bold text-lg">Location</span>
                            </label>
                            <input type="text" placeholder="location" name="location" defaultValue={location} className="input w-full input-bordered" required />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text bold text-lg">Average cost</span>
                            </label>
                            <input type="text" placeholder="average cost per person" name="average_cost" defaultValue={average_cost} className="input w-full input-bordered" required />
                        </div>
                    </div>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text bold text-lg">Short description</span>
                        </label>
                        <textarea type="text" placeholder="give me some short description about the place" name="short_description" defaultValue={short_description} className="w-full resize border rounded-md  px-3 py-2 leading-tight focus:outline-none focus:shadow-outline" rows="4" required></textarea>
                    </div>
                    <div className="flex justify-between gap-4 flex-col lg:flex-row">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text bold text-lg">Seasonality</span>
                            </label>
                            <input type="text" placeholder="which season is best?" name="seasonality" defaultValue={seasonality} className="input w-full input-bordered" required />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text bold text-lg">Travel time</span>
                            </label>
                            <input type="text" placeholder="which time is best for travel" name="travel_time" defaultValue={travel_time} className="input w-full input-bordered" />
                        </div>
                    </div>
                    <div className="flex justify-around gap-4 flex-col lg:flex-row">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text bold text-lg">Total Visitors Per Year</span>
                            </label>
                            <input type="text" placeholder="How many people visit here every year?" name="totalVisitorsPerYear" defaultValue={totalVisitorsPerYear} className="input w-full input-bordered" />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text bold text-lg">userEmail</span>
                            </label>
                            <input type="text" placeholder="give me your email address" name="userEmail" defaultValue={userEmail} className="input w-full input-bordered" required />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text bold text-lg">userName</span>
                            </label>
                            <input type="text" placeholder="give me your userName" name="userName" defaultValue={userName} className="input w-full input-bordered" />
                        </div>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#00BABE] text-white">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateSpot;