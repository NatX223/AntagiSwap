import FilterBox from "./filterBox/FilterBox";
import Product from "./product/Product";

import CollectionStyleWrapper from "./Collection.style";

import { products, categories } from "assets/data/collectionsData";

const Collection = ({ handleProductClick }) => {

  const handleClick = (product) => {
    const _product = {
      image: product.thumb,
      title: product.title,
      price: product.price
    }
    handleProductClick(_product);
  }

  return (
    <CollectionStyleWrapper>
      <div className="container">
        <div className="row filters_row">
          <div className="col-lg-3 col-md-4">
            <div className="filter_box_wrapper price_filter">
              <select name="PriceFilter">
                <option defaultValue="LowHigh">Price: Low to High</option>
                <option value="HighLow">Price: High to Low</option>
                <option value="recentlyListed">Recently Listed</option>
                <option value="Favorited">Most Favorited</option>
                <option value="Favorited">Oldest</option>
              </select>
            </div>
            {categories?.map((category, idx) => (
              <FilterBox key={idx} {...category} />
            ))}
          </div>
          <div className="col-lg-9 col-md-8">
            <div className="collection_items">
              <div className="row products_row">
                {products?.map((product, idx) => (
                  <div key={idx} className="col-lg-4 col-sm-6 col-12">
                    <div onClick={() => handleClick( product )}>
                    <Product {...product} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* <Pagination /> */}
          </div>
        </div>
      </div>
    </CollectionStyleWrapper>
  );
};

export default Collection;
