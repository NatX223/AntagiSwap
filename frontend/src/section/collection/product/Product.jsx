import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import ProductStyleWrapper from "./Product.style";

const Product = ({ thumb, title, price, likes }) => {
  return (
    <ProductStyleWrapper>
      <div className="product_thumb">
        <img src={thumb.src} alt="thumb" />
      </div>
      <div className="product_details">
        <Link href="#">
          <a>{title}</a>
        </Link>
        <p>
          <span> {price} </span>
          <span>
            <FaRegHeart />
            {likes}
          </span>
        </p>
      </div>
    </ProductStyleWrapper>
  );
};

export default Product;
