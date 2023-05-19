import { Link } from "react-router-dom";
import logo from '../../public/playday.png';
import { useContext } from "react";
import { AuthContext } from "../Routes/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import { RiUser3Fill } from 'react-icons/ri';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => toast.success('Logged Out!'))
            .catch(() => toast.error("Something Went Wrong!"))
    }

    const navItems = <>
        <li><Link className="hover:bg-red-500 hover:text-white hover:text-3xl" to='/'>Home</Link></li>
        <li><Link className="hover:bg-red-500 hover:text-white hover:text-3xl" to='/blogs'>Blogs</Link></li>
        {
            user?.email ?
                <>
                    <li><Link className="hover:bg-red-500 hover:text-white hover:text-3xl" to='/login'>Add A Toy</Link></li>
                    <li><Link className="hover:bg-red-500 hover:text-white hover:text-3xl" to='/login'>My Toys</Link></li>
                    <div className="flex items-center lg:ml-24">
                        <div className="tooltip tooltip-bottom" data-tip={user?.email}>
                            <RiUser3Fill style={{ fontSize: '3rem' }} />
                        </div>
                        <li><Link className="hover:bg-red-500 hover:text-white" onClick={handleLogOut}>Log Out</Link></li>
                    </div>
                </>
                :
                <li><Link className="hover:bg-red-500 hover:text-white hover:text-3xl" to='/login'>Login</Link></li>
        }
    </>

    return (
        <div className="navbar h-28 mb-4">
            <Toaster />
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-yellow-200 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/'>
                    <img className="w-36 lg:ml-6" src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 lg:text-2xl font-bold">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn bg-red-500 text-white lg:mr-6 sm:mr-4 hover:text-xl hover:bg-red-500 border-0">All Toys</button>
            </div>
        </div>
    );
};

export default Header;