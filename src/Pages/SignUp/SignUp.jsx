import { Link } from "react-router-dom";
import img from '../../../public/playday.png'
import { useContext } from "react";
import { AuthContext } from "../../Routes/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';

const SignUp = () => {

    const { createUser, googleSignIn } = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(() => toast.success('Successfully Signed Up!'))
            .catch(() => toast.error("Wrong Email or Password!"))
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => toast.success('Successfully Logged In!'))
            .catch(() => toast.error("Something Went Wrong!"))
    }

    return (
        <div className="hero min-h-screen">
            <Toaster />
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/3 mr-12">
                    <img className="max-md:hidden" src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm bg-yellow-300">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-red-500 border-0" type="submit" value='Sign Up' />
                            </div>
                        </form>
                        <p className='text-center my-4'>OR</p>
                        <div className="text-center">
                            <button onClick={handleGoogleSignIn} className="btn btn-wide text-black bg-white border-0">Google</button>
                        </div>
                        <p className='my-4 text-center'>Already surfing Play Day ? <Link className='text-orange-600 font-bold' to='/login'>Log In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;