import logo from '/src/playday.png';

const Footer = () => {
    return (
        <div className='bg-yellow-300'>
        <footer className="footer px-10 text-base-content">
            <div className='sm:flex sm:items-center'>
                <img className='w-72' src={logo} alt="" />
                <div className='text-xl'>
                    <div className='text-3xl text-red-500'>PlayDay</div>
                    <br />
                    Day for you to play !</div>
            </div>
            <div className='lg:mt-24 md:mt-24 sm:mx-auto text-lg'>
                <span className="footer-title text-red-600">Play Day</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
            </div>
            <div className='lg:mt-24 md:mt-24 sm:mx-auto text-lg'>
                <span className="footer-title text-red-600">T & C</span>
                <a className="link link-hover">Cookie Policy</a>
                <a className="link link-hover">Privacy policy</a>
            </div>
            <div className='lg:mt-24 md:mt-24 sm:mx-auto text-lg'>
                <span className="footer-title text-red-600">Social Media Links</span>
                <a className="link link-hover">Facebook</a>
                <a className="link link-hover">Twitter</a>
                <a className="link link-hover">Instagram</a>
            </div>
        </footer>
            <h2 className='text-center text-gray-400 pb-12'> © HERTBITS LTD. </h2>
        </div>
    );
};

export default Footer;