
import { Helmet } from "react-helmet";
import { FaStar } from "react-icons/fa";
import { useLoaderData} from "react-router-dom";

const CraftDetails = () => {
  const singleCraft = useLoaderData()
  const { username, email, price, shortDescription, image, item_name, subcategory_name, rating, customization, processingtime, stockstatus, _id } = singleCraft


  return (
    <div>
       <Helmet>
        <title>Craft Details </title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen m-0 md:my-10 rounded-xl">
        <div className="hero-content grid grid-cols-1 lg:grid-cols-2">
          <div className="flex justify-center items-center">
            <img
              src={image}
              className="w-3/4 rounded-xl h-72 md:h-96  " />
          </div>
          <div>
            <h1 className="text-xl md:text-3xl font-bold">{item_name} of {subcategory_name}</h1>
            <p className="py-6">
              {shortDescription}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-7">
              <p className="text-gray-600 font-bold">Price : ${price}</p>
              <p className="text-gray-600  font-bold flex space-x-1">Rating : {rating}<FaStar className="text-yellow-400 mt-1 ml-1"></FaStar></p>
              <p className="text-gray-600 font-bold">Customization : {customization}</p>
              <p className="text-gray-600 font-bold">Processing Time : {processingtime}</p>
              <p className="text-gray-600 font-bold">Status : {stockstatus}</p>
              <p className="text-gray-600 font-bold">Added by : {username} </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftDetails;