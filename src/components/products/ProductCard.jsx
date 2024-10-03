import PropTypes from "prop-types";
import { CiStar } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className=" font-extralight lg:col-span-4 md:col-span-6 col-span-12 lg:p-5  md:p-4 p-3 rounded-xl border w-full">
      <div className=" flex justify-center">
        <img
          className=" w-44 h-44  object-contain bg-contain  "
          src={product.images[0]}
        />
      </div>
      <div className="flex items-center justify-between py-2">
        <h2 className=" font-light text-sm ">{product.brand || "No-Brand"}</h2>
        <span className="flex items-center gap-2">
          <CiStar /> {product.rating}
        </span>
      </div>
      <h2 className=" font-light  text-lg lg:text-xl">{product.title}</h2>
      <div className="flex items-center justify-between py-1 ">
        <span className=" font-medium">${product.price}</span>
        <Link to={`/details/${product.id}`}>
          <button className=" px-3 py-1 font-light text-sm flex items-center gap-2 rounded-lg border-2">
            <span>Details</span> <IoIosArrowRoundForward />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
