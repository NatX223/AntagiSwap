import Product from "./product/Product";

import CollectionStyleWrapper from "./Collection.style";

import { createOptions } from "assets/data/collectionsData";

const Create = ({ handleOptionClick }) => {

  const handleClick = (option) => {
    const _product = {
      id: option.id,
      title: option.title,
    }
    handleOptionClick(_product);
  }

  return (
    <CollectionStyleWrapper>
      <div className="container">
        <div className="row filters_row">
          <div className="col-lg-9 col-md-8">
            <div className="collection_items">
              <div className="row products_row">
                {createOptions?.map((option, idx) => (
                  <div key={idx} className="col-lg-4 col-sm-6 col-12">
                    <div onClick={() => handleClick( option )}>
                    <Product {...option} />
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

export default Create;
