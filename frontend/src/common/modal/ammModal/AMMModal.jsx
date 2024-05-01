import { useState } from "react";
import { useModal } from "utils/ModalContext";
import { FiX } from "react-icons/fi";
import Button from "../../button";
import MintModalStyleWrapper from "./AMM.style";
import hoverShape from "assets/images/icon/hov_shape_L.svg";
import { collections } from "src/assets/data/collectionsData";
const AMMModal = ({ id }) => {
  const { AMMModalHandle } = useModal();
  const images = collections[id].images;

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

  // const handleClick = (image, e) => {
  //   e.stopPropagation();
  //   setSelectedImages((prevSelectedImages) => {
  //     const index = prevSelectedImages.indexOf(image);
  //     if (index === -1) {
  //       setSelectedCounter(prevCounter => prevCounter + 1);
  //       return [...prevSelectedImages, image];
  //     } else {
  //       setSelectedCounter(prevCounter => prevCounter - 1);
  //       return prevSelectedImages.filter((selectedImage) => selectedImage !== image);
  //     }
  //   });
  //   setPrice((prevPrice) => prevPrice + 1); // Update price based on the selected counter
  // };
  
  return (
    <>
      <MintModalStyleWrapper className="modal_overlay">
        <div className="mint_modal_box">
          <div className="mint_modal_content">
            <div className="modal_header">
              <h2>Complete Transaction</h2>
              <button onClick={() => AMMModalHandle()}>
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
                    <h5>NFT selected</h5>
                    <h5>
                      {selectedCounter}
                    </h5>
                  </li>
                  <li>
                    <h5>Price</h5>
                    <h5>{price} <span> SHM </span></h5>
                  </li>
                </ul>
              </div>
              <div className="modal_mint_btn">
                <Button lg variant="mint">
                  Buy
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
        </div>
      </MintModalStyleWrapper>
    </>
  );
};

export default AMMModal;
