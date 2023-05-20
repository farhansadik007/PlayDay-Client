import { Link } from "react-router-dom";
import toast from 'react-hot-toast';
import { useContext } from "react";
import { AuthContext } from "../../Routes/AuthProvider";

const ToyCard = ({ toy }) => {
    const {user} = useContext(AuthContext);
    const { _id, seller_name, name, subcategory, price, quantity } = toy;

    const ifLogin = () => {
        if(!user) toast.error("You have to login first!")
    }

    return (

        <tr>
            <td></td>
            <td>{seller_name}</td>
            <td>{name}</td>
            <td>{subcategory}</td>
            <td>${price}</td>
            <td>{quantity}</td>
            <td>
                <Link to={`/toy/${_id}`} onClick={ifLogin}>
                    <button className="btn btn-sm bg-blue-600 border-0">View Details</button>
                </Link>
            </td>
        </tr>

    );
};

export default ToyCard;