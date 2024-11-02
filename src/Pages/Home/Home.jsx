import { Helmet } from "react-helmet";
import Banner from "../../Components/Banner/Banner";


const Home = () => {
    return (
        <div>
<Helmet>
    <title>CraftedCanvas | Home</title>
</Helmet>
<Banner></Banner>
<div className="mt-10 lg:mt-16">
    hi this is crafted canvas
</div>
        </div>
    );
};

export default Home;