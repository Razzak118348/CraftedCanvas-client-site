import { Helmet } from "react-helmet";
import Banner from "../../Components/Banner/Banner";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import Subcategory from "../../Components/Subcategory/Subcategory";
import { Tooltip } from "react-tooltip";
import ClientReview from "../../Components/ClientReview/ClientReview";
import Artist from "../../Components/Artist/Artist";
import 'animate.css';


const Home = () => {
  const allCraft = useLoaderData();
  const [selectCraft, setSelectCraft] = useState("All");


  const Customization = ["All",...new Set(allCraft.map(singleCraft=>singleCraft.subcategory_name))]
  //customaization er value hisebe filter  kora => jdi "All select hoy tahole all dekhabe ar jdi no select kora hoy tahole no er gula dekhabe "
const filterCraft = selectCraft ==="All" ? allCraft : allCraft.filter(singleCraft=>singleCraft.subcategory_name === selectCraft)

//jei man ta asbe oita select hisebe nibe
const handleCustomization =e=>{
  setSelectCraft(e.target.value)
  };

  return (
    <div className="popin-font mx-5 md:mx-10 lg:mx-20 mb-10">
      <Helmet>
        <title>CraftedCanvas | Home</title>
      </Helmet>
      <Banner></Banner>

      <div className="flex items-center justify-center ">
        <div className="mt-10 lg:mt-16">
          <h2 className="text-xl font-bold md:text-2xl lg:text-3xl text-center mt-16 mb-6">
            All Art and Craft{" "}
          </h2>

       {/* dropdown */}
<div className="m-7">
<lebel htmlFor="craft-select" className="block text-gray-800 font-bold">Select A Subcategory:</lebel>
<select
id="craft-select"
value={setSelectCraft}
onChange={handleCustomization}
className="border border-gray-400 p-3 rounded-md"
>
  {/* show options */}
  <option>Select A Option</option>
{Customization.map((custom,idx)=>(<option key={idx} value={custom}>{custom}</option>))}

</select>
</div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {filterCraft.slice(0, 6).map((craft) => (
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
                  <p>{craft.shortDescription}</p>
                  <div className="flex my-2 space-x-1">
                    <p className="font-semibold "> price : ${craft.price}</p>
                    <p className="font-semibold flex space-x-1">Rating : {craft.rating}<FaStar className="text-yellow-400 mt-1 ml-1"></FaStar></p>
                  </div>
                  <div className="card-actions justify-end">

                    <Link to={`/craftDetails/${craft._id}`}>
                      <button className="btn bg-sky-300 font-black">
                        View Details <FaArrowRight></FaArrowRight>
                      </button>
                    </Link>
                  </div>
                </div>

                <Tooltip anchorSelect="#my-anchor-element-id">
                  <p>Processing time need {craft.processingtime}</p>
                  <p className="font-semibold mt-2">
                      Status : {craft.stockstatus}
                    </p>
                </Tooltip>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center">
            <Link to={"/allArtCraft"}>
              <button className="btn mb-10 text-black text-base md:text-lg bg-sky-300">
                Show more <FaArrowRight></FaArrowRight>
              </button>
            </Link>
          </div>
        </div>
      </div>

{/* subcategory  */}
      <Subcategory></Subcategory>

{/* client review  */}
<ClientReview></ClientReview>

{/* artist  */}
<Artist></Artist>

    </div>
  );
};

export default Home;
