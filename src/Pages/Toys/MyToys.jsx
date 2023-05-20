import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Routes/AuthProvider";
import MyToysSingle from "./MyToysSingle";

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);

    const url = `http://localhost:5000/mytoys?email=${user.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [url])

    return (
        <div>
            <h1 className=" text-center font-bold text-5xl my-6"> Total My Toys : {myToys.length}</h1>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Photo URL</th>
                            <th>Email</th>
                            <th>Subcategory</th>
                            <th>Price</th>
                            <th>Ratings</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(toy =>
                            <MyToysSingle
                            key={toy._id}
                            toy={toy}
                            ></MyToysSingle>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;