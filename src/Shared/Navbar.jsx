import { NavLink } from "react-router-dom";
import Advanto_logo from "../assets/images/Advanto_logo.png"
import { useContext, } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Navbar = () => {

    const { user, logOut, loader } = useContext(AuthContext)
    if (loader) {
        return <span className="loading loading-ring loading-lg"></span>
    }

    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log('sign Out Successfully');
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    const links = <div className="font-semibold text-base flex flex-col lg:flex-row gap-4 items-center">
        <li><NavLink className={({ isActive, isPending }) =>
            isActive
                ? "border-b-2 border-[#63D5D7] text-[#63D5D7]"
                : isPending
                    ? "pending"
                    : ""
        } to="/">Home</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>
            isActive
                ? "border-b-2 border-[#63D5D7] text-[#63D5D7]"
                : isPending
                    ? "pending"
                    : ""
        } to="/allSpot">All Tourists Spot</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>
            isActive
                ? "border-b-2 border-[#63D5D7] text-[#63D5D7]"
                : isPending
                    ? "pending"
                    : ""
        } to="/addSpot">Add Tourists Spot</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>
            isActive
                ? "border-b-2 border-[#63D5D7] text-[#63D5D7]"
                : isPending
                    ? "pending"
                    : ""
        } to="/myList">My List</NavLink></li>
    </div>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <div className="w-full">
                        <img className="w-20" src={Advanto_logo} alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">

                    <div className="flex gap-2 items-center">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {user && user.photoURL ? <Tippy content={user?.displayName}><img alt={user?.displayName} src={user?.photoURL} /></Tippy> :
                                    <img src="https://i.postimg.cc/cJ5RQyQ3/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow-520826-1931.jpg" alt="" />
                                }
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            {
                                user ? <button onClick={handleLogout} className="btn">Logout</button> : <NavLink to="/login"><button className="btn">Login</button></NavLink>

                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;