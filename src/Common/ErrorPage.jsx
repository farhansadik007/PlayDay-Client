import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="lg:text-[300px] sm:text-9xl text-9xl text-red-500">404</h1>
            <h2 className="lg:text-[100px] sm:text-5xl text-5xl">Not Found!</h2>
            <Link className="btn btn-success mt-12 text-white" to='/' >Back to Home</Link>
            </div>
    );
};

export default ErrorPage;