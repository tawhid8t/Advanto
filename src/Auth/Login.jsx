import { useContext, useState } from "react";
import { PiEyeClosedBold } from "react-icons/pi";
import { PiEyeBold } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const { exitingUser, googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()

    const [showPass, setShowPass] = useState(false);
    const location = useLocation()

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const loginUser = { email, password };
        console.log(loginUser);

        // firebase
        exitingUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('login Successfully')
                form.reset();
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                toast.error(error.message);
            })
    }
    const handleGoogleLogin = () =>{
        googleSignIn()
        .then(result => {
            const user = result.user
            console.log(user);
            navigate(location?.state ? location.state : '/');
        })
        .catch(error => {
            console.log(error.message)
        })
    }


    return (
        <div className="hero min-h-screen mt-10">
            <div className="hero-content flex-col lg:flex-row-reverse w-full lg:px-16">
                <div className="card shrink-0 w-full max-w-sm flex-1">
                    <div className="w-full mb-8">
                        <img className="w-32 mx-auto" src="https://i.postimg.cc/RZY6ZR1v/Advanto-logo-removebg-preview2.png" alt="" />
                    </div>
                    <h1 className="bold text-2xl text-center">Do not just imagine paradise, Experience it!</h1>
                    <hr className="border-b-1 border-black mt-4 w-10 mx-auto" />
                    <p className="text-center text-lg mt-4">We will help you plan your dream escape.</p>

                    <form onSubmit={handleLogin} className="card-body">
                        <div className="text-center">
                            <h1 className="font-bold mb-4 text-lg">login With</h1>
                            <div onClick={handleGoogleLogin} className="w-full border-2 p-3 cursor-pointer my-2 flex items-center justify-center gap-2 btn shadow-md">
                                <FcGoogle className="text-xl" />
                                <h1>Google</h1>
                            </div>
                            <div className="w-full border-2 p-3 cursor-pointer my-2 flex items-center justify-center gap-2 btn shadow-md">
                                <FaFacebook className="text-xl" />
                                <h1>Facebook</h1>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPass ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
                            <div className="absolute right-3 top-[52px]">
                                <span onClick={() => setShowPass(!showPass)}>{!showPass ? <PiEyeClosedBold /> : <PiEyeBold />}</span>

                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#00BABE] text-white">Login</button>
                        </div>
                        <h1 className="text-center text-base mt-2">Don’t have an account? <NavLink to="/signUp"><span className="text-[#00BABE] cursor-pointer">Sign up!</span></NavLink></h1>
                    </form>

                </div>
                <div className="flex-1">
                    <img src="https://i.postimg.cc/YS2nttx5/image-1.png" alt="" />
                </div>
            </div>
            <ToastContainer />
            <ToastContainer />
        </div>
    );
};

export default Login;