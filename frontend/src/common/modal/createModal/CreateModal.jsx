import { useState } from "react";
import { useModal } from "utils/ModalContext";
import { FiX } from "react-icons/fi";
import Button from "../../button";
import MintModalStyleWrapper from "./Create.style";
import hoverShape from "assets/images/icon/hov_shape_L.svg";
import { collections } from "src/assets/data/collectionsData";

const CreateModal = ({ id, title }) => {
  // get user NFTs
  // display them
  
  const { CreateModalHandle } = useModal();

  const images = collections[0].images;
  // get images from the users NFTs
  // construct selected nfts
  // call function

  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedCounter, setSelectedCounter] = useState(0);
  const [price, setPrice] = useState(0);

  const handleClick = (image, e) => {
    e.stopPropagation();
    const index = selectedImages.indexOf(image);
    if (index === -1) {
      setSelectedImages([...selectedImages, image]);
      console.log(selectedImages);
      setSelectedCounter(selectedCounter + 1);
      console.log(selectedCounter);
      setPrice(selectedCounter + 1); // Perform your operation here
    } else {
      const updatedSelectedImages = [...selectedImages];
      updatedSelectedImages.splice(index, 1);
      
      setSelectedImages(updatedSelectedImages);
      setSelectedCounter(selectedCounter - 1);
      setPrice(selectedCounter - 1); // Perform your operation here
    }
  };
  
  return (
    <>
      <MintModalStyleWrapper className="modal_overlay">
        <div className="mint_modal_box">
        {id === 0 
? <div className="mint_modal_content">
<div className="modal_header">
  <h2>Create {title}</h2>
  <button onClick={() => CreateModalHandle()}>
    <FiX />
  </button>
</div>
<div className="modal_body text-center">
  <div className="col-lg-9 col-md-8">
    <div className="row barter_row">
      {images?.map((image, idx) => (
        <div key={idx} className="col-lg-3 col-sm-6 col-12">
          <img onClick={(e) => handleClick(image, e)} src={image} alt="image" style={{ border: selectedImages.includes(image) ? '2px solid blue' : '2px solid transparent' }} />
        </div>
      ))}
    </div>
  </div>
  <div className="mint_count_list">
    <ul>
      <li>
        <h5>NFTs selected</h5>
        <h5>
          {selectedCounter}
        </h5>
      </li>
      <li>
        <h5>Target Collection</h5>
        <input type="text" placeholder="Enter address" />
      </li>
      <li>
        <h5>Amount</h5>
        <input type="number" placeholder="" />
      </li>
    </ul>
  </div>
  <div className="modal_mint_btn">
    <Button lg variant="mint">
      Create
    </Button>
  </div>
</div>

<div className="modal_bottom_shape_wrap">
  <span className="modal_bottom_shape shape_left">
    <img src={hoverShape.src} alt="bithu nft hover shape" />
  </span>
  <span className="modal_bottom_shape shape_right">
    <img src={hoverShape.src} alt="bithu nft hover shape" />
  </span>
</div>
</div>
: id === 1
? <div className="mint_modal_content">
<div className="modal_header">
  <h2>Create {title}</h2>
  <button onClick={() => CreateModalHandle()}>
    <FiX />
  </button>
</div>
<div className="modal_body text-center">
  <div className="col-lg-9 col-md-8">
    <div className="row barter_row">
      {images?.map((image, idx) => (
        <div key={idx} className="col-lg-3 col-sm-6 col-12">
          <img onClick={(e) => handleClick(image, e)} src={image} alt="image" style={{ border: selectedImages.includes(image) ? '2px solid blue' : '2px solid transparent' }} />
        </div>
      ))}
    </div>
  </div>
  <div className="mint_count_list">
    <ul>
      <li>
        <h5>NFTs selected</h5>
        <h5>
          {selectedCounter}
        </h5>
      </li>
      <li>
        <h5>Price</h5>
        <input type="text" placeholder="Enter address" />
      </li>
    </ul>
  </div>
  <div className="modal_mint_btn">
    <Button lg variant="mint">
      Create
    </Button>
  </div>
</div>

<div className="modal_bottom_shape_wrap">
  <span className="modal_bottom_shape shape_left">
    <img src={hoverShape.src} alt="bithu nft hover shape" />
  </span>
  <span className="modal_bottom_shape shape_right">
    <img src={hoverShape.src} alt="bithu nft hover shape" />
  </span>
</div>
</div>
: id === 2
? <div className="mint_modal_content">
<div className="modal_header">
  <h2>Create {title}</h2>
  <button onClick={() => CreateModalHandle()}>
    <FiX />
  </button>
</div>
<div className="modal_body text-center">
  <div className="col-lg-9 col-md-8">
    <div className="row barter_row">
      {images?.map((image, idx) => (
        <div key={idx} className="col-lg-3 col-sm-6 col-12">
          <img onClick={(e) => handleClick(image, e)} src={image} alt="image" style={{ border: selectedImages.includes(image) ? '2px solid blue' : '2px solid transparent' }} />
        </div>
      ))}
    </div>
  </div>
  <div className="mint_count_list">
    <ul>
      <li>
        <h5>NFTs selected</h5>
        <h5>
          {selectedCounter}
        </h5>
      </li>
      <li>
        <h5>Canto Liquidity</h5>
        <input type="text" placeholder="Enter address" />
      </li>
      <li>
        <h5>Fee Percentage</h5>
        <input type="number" placeholder="" />
      </li>
    </ul>
  </div>
  <div className="modal_mint_btn">
    <Button lg variant="mint">
      Create
    </Button>
  </div>
</div>

<div className="modal_bottom_shape_wrap">
  <span className="modal_bottom_shape shape_left">
    <img src={hoverShape.src} alt="bithu nft hover shape" />
  </span>
  <span className="modal_bottom_shape shape_right">
    <img src={hoverShape.src} alt="bithu nft hover shape" />
  </span>
</div>
</div> : null }
        </div>
      </MintModalStyleWrapper>
    </>
  );
};

export default CreateModal;
