import ProductStyleWrapper from "./CItem.style";

const Product = ({ image, name, nftLiquidity, CANTOLiquidity }) => {
  return (
    <ProductStyleWrapper>
      <div className="product_thumb">
        <img src={image} alt="thumb" />
      </div>
      <div className="product_details">
        <p>
          name: <span> {name} </span>
        </p>
        <p>
          NFTs:
          <span>
            {nftLiquidity}
          </span>
        </p>
        <p>
          Liquidity:
          <span>
            {CANTOLiquidity} <span> CANTO </span>
          </span>
        </p>
        <p>
          <span> Buy </span>
          <span> Sell </span>
          <span> Add Liq. </span>
        </p>
      </div>
    </ProductStyleWrapper>
  );
};

export default Product;
