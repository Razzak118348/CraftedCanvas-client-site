import { useLoaderData, useParams } from "react-router-dom";

const CraftDetails = () => {
    const singleCraft = useLoaderData()
  console.log(singleCraft)
    return (
        <div>hi craft details

        </div>
    );
};

export default CraftDetails;