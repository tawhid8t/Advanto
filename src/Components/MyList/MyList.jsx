import { Link, useLoaderData } from "react-router-dom";
import './MyListButton.css'
import Swal from "sweetalert2";
import { useState } from "react";

const MyList = () => {
    const mySpots = useLoaderData();
    const [spots, setSpots] = useState(mySpots)

    // delete functionality
    const handleDelete = _id => {
        console.log(_id);
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {

            if (result.isConfirmed) {
                fetch(`http://localhost:5000/allSpots/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            swalWithBootstrapButtons.fire({
                                title: "Deleted!",
                                text: "Your spot has been deleted.",
                                icon: "success"
                            });
                        }
                        const remaining = spots.filter(spot => spot._id !== _id);
                        setSpots(remaining)
                    })

            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary spot is safe :)",
                    icon: "error"
                });
            }
        });

    }
    return (
        <div>
            <h1 className="text-center text-3xl bold">My List section will be added: {spots.length}</h1>
            <div className="my-24">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bold text-lg text-[#1F2937]">
                                <th></th>
                                <th>Country</th>
                                <th>Spot</th>
                                <th>Average Cost</th>
                                <th>Best Season</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            spots.map((spot) => <tbody key={spot._id}>
                                <tr className="hover">
                                    <th></th>
                                    <td>{spot?.country_Name}</td>
                                    <td>{spot?.tourists_spot_name}</td>
                                    <td>${spot?.average_cost}</td>
                                    <td>{spot?.seasonality}</td>
                                    <td className="flex flex-col gap-2">
                                        <button onClick={() => handleDelete(spot?._id)} className="delete_button">
                                            <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span>
                                            <span className="text">Delete</span>
                                        </button>
                                        <Link to={`/updateSpot/${spot._id}`}><button className="edit-button">
                                            <svg className="edit-svgIcon" viewBox="0 0 512 512">
                                                <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                                            </svg>
                                        </button></Link>
                                    </td>
                                </tr>
                            </tbody>)
                        }

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyList;