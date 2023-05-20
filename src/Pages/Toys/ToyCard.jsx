import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
    const { _id, seller_name, name, subcategory, price, quantity } = toy;

    return (

        <tr>
            <td></td>
            <td>{seller_name}</td>
            <td>{name}</td>
            <td>{subcategory}</td>
            <td>${price}</td>
            <td>{quantity}</td>
            <td>
                <Link to={`/toy/${_id}`}>
                    <button className="btn btn-sm bg-blue-600 border-0">View Details</button>
                </Link>
            </td>
        </tr>

    );
};

export default ToyCard;