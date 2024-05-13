import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { PiEyeClosedBold } from "react-icons/pi";
import { PiEyeBold } from "react-icons/pi";
import { AuthContext } from "./AuthProvider";

const SignUp = () => {

    const {SignUpUser} = useContext(AuthContext)
    const [showPass, setShowPass] = useState(false);

    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        const SignUpUser = {name, email, photoURL, password};
        console.log(SignUpUser);

        // validation check
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            return console.log("Please provide a valid email");
        }
        if(password.length < 6){
            return console.log('Password must be at least 6 characters');
        }
        if(!/^(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)){
            return console.log('password must be at least one uppercase and one lowercase letter');
        }

        // Firebase
        SignUpUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.log(error.message);
        })
        
    }
    return (
        <div className="hero min-h-screen mt-10">
            <div className="hero-content flex-col lg:flex-row w-full justify-between px-16">
                <div className="">
                    <img className="rounded-2xl" src="https://i.postimg.cc/hPPNSbPy/file.jpg" alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm">
                    <h1 className="bold text-center text-3xl">Create an account</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered"/>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" placeholder="PhotoURL" name="photoURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={ showPass ? "text" : "password"} placeholder="password" name="password" className="input input-bordered" required />
                            <div className="absolute right-3 top-[52px]">
                                <span onClick={() => setShowPass(!showPass)}>{!showPass ? <PiEyeClosedBold /> : <PiEyeBold />}</span>

                            </div>
                            <label className="label">
                                <h3 className="text-base text-[#A8A8A9]">Must be at least 6 characters</h3>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#00BABE] text-white">Register</button>
                        </div>
                        <h1 className="text-center text-base mt-2">Already a member? <NavLink to="/login"><span className="text-[#00BABE] cursor-pointer">Log In!</span></NavLink></h1>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;