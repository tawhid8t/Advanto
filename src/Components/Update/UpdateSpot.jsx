import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateSpot = () => {
    const spotData = useLoaderData()
    const { _id, image, tourists_spot_name, short_description, average_cost, seasonality, travel_time, totalVisitorsPerYear, country_Name, userName, userEmail } = spotData
    const handleUpdate = e => {
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
        const updateSpot = { image, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time, totalVisitorsPerYear, userEmail, userName }
        console.log(updateSpot);

        // update functionality
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                fetch(`https://advanto-server.vercel.app/allSpots/${_id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updateSpot)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if(data.modifiedCount > 0){
                            Swal.fire("Saved!", "", "success");
                        }
                    })
                
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });

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
                            <input type="text" placeholder="location" name="location" defaultValue={spotData?.location} className="input w-full input-bordered" required />
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
                <div className="form-control mt-6 lg:w-2/4 lg:mx-auto">
                    <button className="cursor-pointer transition-all bg-[#63D5D7] text-white px-6 py-2 rounded-lg border-[#00BABE] border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-blue-300 shadow-blue-300 active:shadow-none">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateSpot;