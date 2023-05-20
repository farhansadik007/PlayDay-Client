import toast from 'react-hot-toast';
import { useLoaderData } from "react-router-dom";
import useTitle from '../../Common/useTitle';

const EditToys = () => {
    const toyId = useLoaderData();
    useTitle('PlayDay | Edit')

    const handleEdit = (e) => {
        e.preventDefault();

        const form = e.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;


        fetch(`http://localhost:5000/toy/${toyId._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                price: price,
                quantity: quantity,
                description: description
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("Toy Updated!");
                }
            })
    }



    return (
        <div>
            <h2 className="text-center font-bold text-3xl">EDIT TOY</h2>

            <div className="card-body">
                <form onSubmit={handleEdit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" name='price' className="bg-gray-200 input input-bordered" placeholder="$$$" required />
                        </div>



                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="number" name='quantity' className="bg-gray-200 input input-bordered" required />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name='description' className="bg-gray-200 input input-bordered" required />
                        </div>


                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-info btn-block" type="submit" value="Add Toy" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditToys;