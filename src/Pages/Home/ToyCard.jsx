import { Link } from "react-router-dom";
import toast from 'react-hot-toast';
import { useContext } from "react";
import { AuthContext } from "../../Routes/AuthProvider";

const ToyCard = ({t}) => {
    const {user} = useContext(AuthContext);

    const ifLogin = () => {
        if(!user) toast.error("You have to login first!")
    }

    return (
        <div className="card h-96 bg-base-100 shadow-md">
            <figure><img src={t.picture} alt="Cars" /></figure>
            <div className="card-body">
                <h2 className="font-bold text-2xl">{t.name}</h2>
                <p>Price: {t.price}</p>
                <p>Ratings: {t.rating}/5</p>
                <div className="card-actions justify-center">
                    <Link  to={`/toy/${t._id}`} onClick={ifLogin}>
                    <button className="btn btn-info">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;