import { Link } from "react-router-dom";
import img from '../../../public/playday.png'

const SignUp = () => {

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/3 mr-12">
                    <img className="max-md:hidden" src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm bg-yellow-300">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                        <form onSubmit={''}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
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
                        <p className='my-4 text-center'>Already surfing Play Day ? <Link className='text-orange-600 font-bold' to='/login'>Log In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;