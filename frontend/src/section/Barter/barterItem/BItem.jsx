import ProductStyleWrapper from "./BItem.style";

const Product = ({ image, offeredCollection, targetCollection, number, barterId }) => {
  return (
    <ProductStyleWrapper>
      <div className="product_thumb">
        <img src={image} alt="thumb" />
      </div>
      <div className="product_details">
        <p>
          { offeredCollection }
          <span> 2 </span>
        </p>
        <p>
          { targetCollection }
          <span>
            {number}
          </span>
        </p>
      </div>
    </ProductStyleWrapper>
  );
};

export default Product;
