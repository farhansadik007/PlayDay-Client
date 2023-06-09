import { Link } from "react-router-dom";

const MyToysSingle = ({ toy, handleDelete }) => {
    const { _id, seller_name, name, picture, seller_email, subcategory, price, rating, quantity } = toy;
    return (
        <tr>
            <td>
                <div className="font-bold">{seller_name}</div>
            </td>
            <td>{name}</td>
            <td>
                <div className="avatar">
                    <div className="w-24 h-24">
                        <img src={picture} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>{seller_email}</td>
            <td>{subcategory}</td>
            <td>${price}</td>
            <td>{rating}/5</td>
            <td>{quantity}</td>
            <td>
                <Link to={`/edit/${_id}`}>
                <button className="btn btn-sm btn-ghost btn-xs">edit</button>
                </Link>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-ghost hover:bg-red-500 hover:text-white btn-xs">delete</button>
            </td>
        </tr>

    );
};

export default MyToysSingle;