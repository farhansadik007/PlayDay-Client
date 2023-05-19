import { Link } from "react-router-dom";
import logo from '../../public/playday.png';

const Navbar = () => {


    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/toys'>All Toys</Link></li>
        <li><Link to='/blog'>Blogs</Link></li>
    </>

    return (
        <div className="navbar bg-base-100 h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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
                <button className="btn bg-red-500 text-white lg:mr-6 sm:mr-4">Add a Toy</button>
            </div>
        </div>
    );
};

export default Navbar;