import { useState, useEffect } from "react";
import FilterBox from "./filterBox/FilterBox";
import Product from "./barterItem/BItem";

import CollectionStyleWrapper from "./Collection.style";

import { categories } from "assets/data/collectionsData";
import { getBarters } from "src/utils/app";

const Barter = ({ handleBarterClick }) => {
  const [loading, setLoading] = useState(true);
  const [barterTrades, setBarterTrades] = useState([]);

  useEffect(() => {
    const fetchBarters = async () => {
      const _barterTrades = await getBarters();
      setBarterTrades(_barterTrades);
      setLoading(false);
    };
    fetchBarters();
  }, []);

  const handleClick = (barter) => {
    const _barter = {
      id: barter.barterId,
      targetCollection: barter.targetCollection,
      offeredCollection: barter.offeredCollection
    };
    handleBarterClick(_barter);
  };

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
            {loading ? (
              <p>Loading...</p>
            ) : (
              <div className="collection_items">
                <div className="row products_row">
                  {barterTrades?.map((trade, idx) => (
                    <div key={idx} className="col-lg-4 col-sm-6 col-12">
                      <div onClick={() => handleClick(trade)}>
                        <Product {...trade} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* <Pagination /> */}
          </div>
        </div>
      </div>
    </CollectionStyleWrapper>
  );
};

export default Barter;
