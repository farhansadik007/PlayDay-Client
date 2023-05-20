import { useContext } from "react";
import { AuthContext } from "../../Routes/AuthProvider";
import toast from 'react-hot-toast';
import useTitle from "../../Common/useTitle";

const AddToys = () => {
    const { user } = useContext(AuthContext);
    useTitle('PlayDay | Add A Toy')

    const handleAddToy = e => {
        e.preventDefault();

        const form = e.target;
        const toy_name = form.toy_name.value;
        const seller_name = form.seller_name.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const email = user?.email;
        const rating = form.rating.value;
        const subcategory = form.subcategory.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const newToy = {
            picture: photo,
            name: toy_name,
            price: price,
            rating: rating,
            seller_email: email,
            seller_name: seller_name,
            subcategory: subcategory,
            quantity: quantity,
            description: description
        }

        fetch('https://playday-server-farhansadik007.vercel.app/addtoys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success("Toy Added! YAY!!!");
                    form.reset();
                }
                else toast.error('Oh No! Something went wrong!')
            })
    }

    return (
        <div>
            <h2 className="text-center font-bold text-3xl">ADD A TOY</h2>

            <div className="card-body">
                <form onSubmit={handleAddToy}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <input type="text" name="toy_name" className="input input-bordered bg-gray-200" required />
                        </div>



                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="text" name="seller_name" className="bg-gray-200 input input-bordered" required />
                        </div>



                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" className="bg-gray-200 input input-bordered" required />
                        </div>



                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="bg-gray-200 input input-bordered" required />
                        </div>



                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Sub-Category</span>
                            </label>
                            <input type="text" name='subcategory' className="bg-gray-200 input input-bordered" placeholder="Eg: 'Racing Cars' , 'Police Cars' , 'Construction Cars'" required />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" name='price' className="bg-gray-200 input input-bordered" placeholder="$$$" required />
                        </div>



                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Ratings</span>
                            </label>
                            <input type="number" name='rating' className="bg-gray-200 input input-bordered" placeholder="0 to 5" required />
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

export default AddToys;