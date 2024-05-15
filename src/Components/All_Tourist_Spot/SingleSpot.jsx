import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const SingleSpot = ({ spot }) => {
    const { _id, image, tourists_spot_name,  short_description, average_cost, seasonality, travel_time, totalVisitorsPerYear } = spot
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body space-y-6">
                    <div className='flex justify-between items-center'>
                        <h2 className='bold text-xl'>{tourists_spot_name}</h2>
                        <h2 className='text-xl font-semibold'>${average_cost}/day</h2>
                    </div>
                    <div>
                        <h1 className='text-[#868EA4]'>{short_description.slice(0, 100)}...</h1>
                    </div>
                    <div className='flex flex-col text-lg font-medium gap-3'>
                        <div className='flex gap-2 items-center'>
                            <img className='w-8 h-8' src="https://i.postimg.cc/sXSrVkwV/icons8-visitors-64.png" alt="" />
                            <div className='flex items-center gap-2'>
                                <h3 className='font-bold'>Visitor per year: </h3>
                                <h2 className='text-[#868EA4]'>{totalVisitorsPerYear}</h2>
                            </div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <img className='w-8 h-8' src="https://i.postimg.cc/fLv8j5bc/icons8-time.gif" alt="" />
                            <div className='flex items-center gap-2'>
                                <h3 className='font-bold'>Travel Time: </h3>
                                <h2 className='text-[#868EA4]'>{travel_time}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between items-center">
                        <div className='flex items-center gap-2'>
                            <img className='w-9 h-9' src="https://i.postimg.cc/44B8Y8qZ/icons8-seasonal-marketing-78.png" alt="" />
                            <h3 className='text-lg font-semibold'>{seasonality}</h3>
                        </div>
                        <Link to={`/spotDetails/${_id}`}><button className="btn bg-[#00BABE] text-white">view details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
SingleSpot.propTypes = {
    spot: PropTypes.object.isRequired
}
export default SingleSpot;