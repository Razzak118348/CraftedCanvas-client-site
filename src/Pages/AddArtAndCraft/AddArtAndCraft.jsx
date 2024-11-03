import Swal from 'sweetalert2'
import useAuth from "../../hooks/useAuth"
const AddArtAndCraft = () => {
const {user} = useAuth()
    const handleForm = (e)=>{
        e.preventDefault()
        const form = e.target;
        const username = form.name.value;
        const  email = form.email.value;
        const price = form.price.value;
        const shortDescription = form.ShortDescription.value;
        const image = form.image.value;
const item_name = form.item_name.value;
const subcategory_name =  form.subcategory_name.value;
const rating =  form.rating.value;
const customization =   form.customization.value;
const processingtime =   form.processingtime.value;
const stockstatus = form.stockstatus.value;

const addCraft ={username, email,price,shortDescription,image,item_name,subcategory_name,rating,customization,processingtime,stockstatus}
console.log(addCraft);

fetch('http://localhost:5000/allcraft',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(addCraft),
})
.then(response => response.json())
.then(data => {
    console.log(data);
    if(data.insertedId){
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Craft Added successfully",
            showConfirmButton: "ok",
          });
          form.reset();
    }
})
    }

    return (
        <div>


            <h2 className="text-lg md:text-2xl font-bold text-center my-6 "> Add a Art&Craft </h2>
            <div className="flex items-center justify-center mx-4 ">

                <form onSubmit={handleForm} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 shadow-lg shadow-slate-600 p-5 mb-10 w-full md:w-auto rounded-xl">
                    <div>
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" placeholder="Image Url"
                            name="image"
                            className="input input-bordered w-full md:w-auto" required />
                    </div>

                    <div><label className="label">
                        <span className="label-text">Item_name</span>
                    </label>
                        <input type="text" placeholder="item_name"
                            name="item_name"
                            className="input input-bordered w-full md:w-auto " required />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Subcategory_name</span>
                        </label>
                        <input type="text" placeholder="Subcategory_name"
                            name="subcategory_name"
                            className="input input-bordered w-full md:w-auto" required />
                    </div>
                    <div className="col-span-full">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                            <textarea  placeholder="ShortDescription"
                            name="ShortDescription"

                            rows={2}
                            className=" border-2 border-sky-300 w-full "></textarea>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" placeholder="Price"
                            name="price"
                            className="input input-bordered w-full md:w-auto" required />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="number" placeholder="rating"
                            name="rating"
                            className="input input-bordered w-full md:w-auto" required />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Customization</span>
                        </label>
                        <input type="text" placeholder="yes or no"
                            name="customization"
                            className="input input-bordered w-full md:w-auto" required />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Processing Time</span>
                        </label>
                        <input type="text" placeholder="Example: 2 or 3days"
                            name="processingtime"
                            className="input input-bordered w-full md:w-auto" required />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Stock Status</span>
                        </label>
                        <input type="text" placeholder="Example: in stock / made or order"
                            name="stockstatus"
                            className="input input-bordered w-full md:w-auto" required />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email"
                            name="email"
                            defaultValue={user.email}
                            className="input input-bordered w-full md:w-auto" required />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input type="text" placeholder="User name"
                            name="name"
                            defaultValue={user.
                                displayName}
                            className="input input-bordered w-full md:w-auto" required />
                    </div>

                    <div className="col-span-full mb-10">
                    <input type="submit" className="input input-bordered w-full bg-sky-300" value={'Add'} />

                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddArtAndCraft;