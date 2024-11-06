import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import 'animate.css';
import { AuthContext } from "../../Context/ContextApi";

const MyArtAndCraft = () => {
  const { user } = useContext(AuthContext) || {}
  const [allCraft, SetAllCraft] = useState([])
const[selectOption,setSelectOption] =useState("All")
  const navigate = useNavigate()


  useEffect(() => {
    if(!user){
      return  navigate('/')
    }
    if(user?.email){
      fetch(`http://localhost:5000/mycraft/${user.email}`)//get route .. so no need declear method
      .then(res => res.json())
      .then(data => {
        console.log(data)
        SetAllCraft(data)
      })

    }
}, [user])

const Customization = ["All",...new Set(allCraft.map(singleCraft=>singleCraft.customization))]

//jei man ta asbe oita select hisebe nibe
const handleCustomization =e=>{
setSelectOption(e.target.value)
};

//customaization er value hisebe filter  kora => jdi "All select hoy tahole all dekhabe ar jdi no select kora hoy tahole no er gula dekhabe "
const filterCraft = selectOption ==="All" ? allCraft : allCraft.filter(singleCraft=>singleCraft.customization === selectOption)

  //delete operation
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
    <div className="popin-font mx-5 md:mx-10 lg:mx-20 mb-10">
      {/*
*/}
      <h2 className="text-xl md:text-2xl lg:text-3xl text-center font-bold my-10 underline italic">My All Art Craft At a Glance </h2>

{/* dropdown */}
<div className="m-5">
<lebel htmlFor="craft-select" className="block text-gray-800 font-bold">Select Customization:</lebel>
<select
id="craft-select"
value={setSelectOption}
onChange={handleCustomization}
className="border border-gray-400 p-3 rounded-md"
>
  {/* show options */}
  <option>Select A Option</option>
{Customization.map((custom,idx)=>(<option key={idx} value={custom}>{custom}</option>))}

</select>
</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {filterCraft?.map((craft) => (
          <div
            id="my-anchor-element-id"
            key={craft._id}
            className="card bg-base-100 w-auto shadow-xl shadow-sky-100 hover:scale-105 animate__animated animate__slideInUp"
          >
            <figure>
              <img
                src={craft.image}
                className="h-52 w-full"
                alt={craft.item_name}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                <Typewriter
                  words={[craft.item_name]}
                  loop={2}
                  typeSpeed={70}
                  deleteSpeed={50}
                />
              </h2>

              <div className="grid grid-cols-2 my-2 space-y-2">
                <p className="font-semibold "> price : ${craft.price}</p>
                <p className="font-semibold flex space-x-1">Rating : {craft.rating}<FaStar className="text-yellow-400 mt-1 ml-1"></FaStar></p>
                <p className="font-semibold "> Customization : {craft.customization}</p>
                <p className="font-semibold "> Status : {craft.stockstatus}</p>

              </div>
              <div className="flex mt-4 justify-between items-center">
              <Link to={`/update/${craft._id}`}><button className="btn bg-sky-400 ">Update</button></Link>
                <button  onClick={() => handleDelete(craft._id)} className="btn bg-red-600">Delete</button>
                <Link to={`/craftDetails/${craft._id}`}>
                  <button className="btn bg-sky-300 font-black">
                    View Details <FaArrowRight></FaArrowRight>
                  </button>
                </Link>
              </div>
            </div>

            <Tooltip anchorSelect="#my-anchor-element-id">
              <p>Processing time need {craft.processingtime}</p>

            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyArtAndCraft;