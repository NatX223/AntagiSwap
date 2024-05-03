import ProductStyleWrapper from "./Product.style";

const Product = ({ title }) => {
  return (
    <ProductStyleWrapper>
      <div className="product_details">
        <a>{title}</a>
      </div>
    </ProductStyleWrapper>
  );
};

export default Product;
