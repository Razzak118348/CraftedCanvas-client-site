import { Helmet } from "react-helmet";
import Banner from "../../Components/Banner/Banner";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import Subcategory from "../../Components/Subcategory/Subcategory";
import { Tooltip } from "react-tooltip";
import ClientReview from "../../Components/ClientReview/ClientReview";
import Artist from "../../Components/Artist/Artist";



const Home = () => {
  const allCraft = useLoaderData();
  const [selectCraft, setSelectCraft] = useState(allCraft);
  const handleCraft = (category) => {
    if (category === "All") {
      setSelectCraft(allCraft);
    } else {
      const filteredCraft = allCraft.filter(
        (craft) => craft.subcategory_name === category
      );
      setSelectCraft(filteredCraft);
    }
  };
  return (
    <div className="popin-font mx-5 md:mx-10 lg:mx-20 mb-10">
      <Helmet>
        <title>CraftedCanvas | Home</title>
      </Helmet>
      <Banner></Banner>

      <div className="flex items-center justify-center">
        <div className="mt-10 lg:mt-16">
          <h2 className="text-xl font-bold md:text-2xl lg:text-3xl text-center mt-16 mb-6">
            All Art and Craft{" "}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5 my-10">
            <button
              onClick={() => handleCraft("All")}
              className="btn bg-sky-200"
            >
              All SubCategory
            </button>
            <button
              onClick={() => handleCraft("Landscape Painting")}
              className="btn bg-sky-200"
            >
              Landscape Painting
            </button>
            <button
              onClick={() => handleCraft("Portrait Drawing")}
              className="btn bg-sky-200"
            >
              Portrait Drawing
            </button>
            <button
              onClick={() => handleCraft("Watercolour Painting")}
              className="btn bg-sky-200"
            >
              Watercolour Painting
            </button>
            <button
              onClick={() => handleCraft("Oil Painting")}
              className="btn bg-sky-200"
            >
              Oil Painting
            </button>
            <button
              onClick={() => handleCraft("Charcoal Sketching")}
              className="btn bg-sky-200"
            >
              Charcoal Sketching
            </button>
            <button
              onClick={() => handleCraft("Cartoon Drawing")}
              className="btn bg-sky-200"
            >
              Cartoon Drawing
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {selectCraft.slice(0, 6).map((craft) => (
              <div
                id="my-anchor-element-id"
                key={craft._id}
                className="card bg-base-100 w-auto shadow-xl shadow-sky-100 hover:scale-105"
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
                    <p className="font-semibold">Rating : {craft.rating}</p>
                  </div>
                  <div className="card-actions justify-end">
                    <p className="font-semibold mt-2">
                      Status : {craft.stockstatus}
                    </p>
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
          <div className="mt-8 flex items-center justify-center">
            <Link to={"/allArtCraft"}>
              <button className="btn text-black text-base md:text-lg bg-sky-300">
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
