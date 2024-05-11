import { Link } from "react-router-dom";

const SingleProducts = ({ id, product }) => {
  
    const { title, price, images } = product;
    
    return (
      <div className="w-[30%] mb-10 border border-r-blue-700 p-2 rounded-md">
        <h1 className="text-lg text-sky-700 font-medium">{title}</h1>
        <h2 className="text-lg text-sky-700 font-medium">{price}</h2>
        <img src={images[1]} alt="" />
        <Link to={`/productsdetails/${id}`} className="bg-blue-600 py-2 mt-3 text-white rounded-md block text-center">Details</Link>
        {/* <h2 className="text-lg text-sky-700 font-medium">{images[3]}</h2> */}
      </div>
    );
};

export default SingleProducts;
