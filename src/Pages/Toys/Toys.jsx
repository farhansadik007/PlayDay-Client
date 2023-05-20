import { useEffect, useState } from "react";
import ToyCard from "./ToyCard";
import useTitle from "../../Common/useTitle";

const Toys = () => {
    const [toys, setToys] = useState([]);
    useTitle('PlayDay | All Toys');

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    return (
        <div className="overflow-x-auto">
            <table className="table table-compact w-full">
                <thead>
                    <tr className="text-red-500">
                        <th></th>
                        <th>Seller</th>
                        <th>Toy Name</th>
                        <th>Subcategory</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map(toy => <ToyCard
                            key={toy._id}
                            toy={toy}
                        ></ToyCard>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Toys;