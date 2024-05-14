
import { Link } from 'react-router-dom';
import image from '../assets/images/404Error.jpg';


const PageNotFound = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex justify-between items-center flex-col-reverse lg:flex-row p-4'>
                <div className=''> 
                    <h1 className='bold text-3xl mb-6'>Something is not right...</h1>
                    <p className='text-[#868EA4] text-lg'>Page you are trying to open does not exist. You may have mistyped the address, or the page has been moved to another URL. If you think this is an error contact support.</p>
                    <Link to="/"><button className='btn mt-6 bg-[#00BABE] text-white'>Get back to home page</button></Link>
                </div>
                <div className='flex lg:justify-end'>
                    <img className='w-3/4' src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;