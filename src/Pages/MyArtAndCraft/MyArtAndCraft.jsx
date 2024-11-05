import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyArtAndCraft = () => {

    const [allCraft, SetAllCraft] = useState([])

    useEffect(() => {
      fetch('http://localhost:5000/allCraft')
        .then(res => res.json())
        .then(data => SetAllCraft(data))
    }, [allCraft])

    const handleDelete = (id) => {
      console.log(id);

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/allCraft/${_id}`, {
            method: "DELETE",
          })
            .then(res => res.json())
            .then(data => {
              if (data.deletedCount) {

                const remainingCraft = allCraft.filter(craft => craft._id != id)
                SetAllCraft(remainingCraft)
                Swal.fire({
                  title: "Deleted!",
                  text: "Your Craft has been deleted.",
                  icon: "success"
                });
              }

            })

        }
      });

    }

    return (
        <div>
<Link to={`/update/${_id}`}><button className="btn bg-sky-400 mt-9">Update</button></Link>
<button onClick={() => handleDelete(_id)} className="btn bg-red-500 mx-10">Delete</button>
        </div>
    );
};

export default MyArtAndCraft;