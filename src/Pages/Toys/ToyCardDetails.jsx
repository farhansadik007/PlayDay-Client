import { useLoaderData } from "react-router-dom";

const ToyCardDetails = () => {
    const toyDetails = useLoaderData();
    const { picture, name, seller_name, seller_email, price, rating, quantity, description } = toyDetails;
    console.log(toyDetails);
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img src={picture} className="max-w-sm rounded-lg" />
                <div className="font-bold">
                    <h1 className="text-5xl font-bold pb-8">{name}</h1>
                    <p className="py-3"><span className="btn btn-info text-black">Seller</span> {seller_name}</p>
                    <p className="py-3"><span className="btn btn-info text-black">Seller Email</span> {seller_email}</p>
                    <p className="py-3"><span className="btn btn-info text-black">Price</span> ${price}</p>
                    <p className="py-3"><span className="btn btn-info text-black">Rating</span> {rating}/5</p>
                    <p className="py-3"><span className="btn btn-info text-black">Available Quantity</span> {quantity}</p>
                    <p className="py-3"><span className="btn btn-info text-black">Description</span> {description}</p>
                </div>
            </div>
        </div>
    );
};

export default ToyCardDetails;