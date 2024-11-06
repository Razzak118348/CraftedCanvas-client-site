import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllArtandCraft = () => {
    const allArtCraft = useLoaderData()
    console.log(allArtCraft)
    return (
        <div>
            <div className="overflow-x-auto my-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>serial</th>
                            <th>Item Name</th>
                            <th>Subcategory </th>
                         <th className='hidden sm:table-cell'>Email</th>
                         <th className='hidden sm:table-cell'>User</th>

                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allArtCraft.map((singleCraft, index) => <tr key={singleCraft._id}>
                                <td>{index + 1}</td>
                                <td>{singleCraft.item_name}</td>
                                <td>{singleCraft.subcategory_name}</td>
                                <td className='hidden sm:table-cell'>{singleCraft.email}</td>
                                <td className='hidden sm:table-cell'>{singleCraft.username}</td>
                                <td><Link to={`/craftDetails/${singleCraft._id}`}><button  className="btn bg-sky-400">Details</button></Link></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllArtandCraft;