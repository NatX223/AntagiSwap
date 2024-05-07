import { useState, useEffect } from "react";
import { useModal } from "utils/ModalContext";
import { FiX } from "react-icons/fi";
import Button from "../../button";
import MintModalStyleWrapper from "./Create.style";
import hoverShape from "assets/images/icon/hov_shape_L.svg";
import { createBarter, getUserNFTs, createPool } from "src/utils/app";
import { useAccount } from "wagmi";
import { useEthersSigner } from "src/utils/adapter";

const CreateModal = ({ id, title }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedCounter, setSelectedCounter] = useState(0);

  const { CreateModalHandle } = useModal();
  const { address, isConnected } = useAccount();
  const signer = useEthersSigner();

  const [loading, setLoading] = useState(true);
  const [userNFTs, setuserNFTs] = useState([]);

  const [targetCollection, setTargetCollection] = useState('');
  const [amount, setAmount] = useState(1);

  const [liquidity, setLiquidity] = useState('');
  const [fee, setFee] = useState(1);

  const _createBarter = async() => {
    const Ids = selectedImages.map(obj => obj.id);
    await createBarter(targetCollection, selectedImages[0].nftAddress, Ids, amount, signer)
    console.log("done");
  }

  const createAMMPool = async() => {
    const Ids = selectedImages.map(obj => obj.id);
    await createPool(Ids, selectedImages[0].nftAddress, liquidity, fee, signer);
    console.log("done");
  }

  useEffect(() => {
    const fetchUserNFTs = async () => {
      const nfts = await getUserNFTs(address);
      setuserNFTs(nfts);
      setLoading(false);
    };
    fetchUserNFTs();
  }, []);

  const handleClick = (image, e) => {
    e.stopPropagation();
    const index = selectedImages.indexOf(image);
    if (index === -1) {
      setSelectedImages([...selectedImages, image]);
      setSelectedCounter(selectedImages.length + 1);
      console.log(selectedCounter);
    } else {
      const updatedSelectedImages = [...selectedImages];
      updatedSelectedImages.splice(index, 1);
      
      setSelectedImages(updatedSelectedImages);
      setSelectedCounter(selectedImages.length - 1);
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
      {userNFTs?.map((image, idx) => (
        <div key={idx} className="col-lg-3 col-sm-6 col-12">
          <img onClick={(e) => handleClick(image, e)} src={image.src} alt="image" style={{ border: selectedImages.includes(image) ? '2px solid blue' : '2px solid transparent' }} />
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
        <input
        type="text"
        placeholder="Enter address"
        value={targetCollection}
        onChange={(e) => setTargetCollection(e.target.value)}
      />
      </li>
      <li>
        <h5>Amount</h5>
        <input
        type="number"
        placeholder=""
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      </li>
    </ul>
  </div>
  <div className="modal_mint_btn">
    <Button lg variant="mint" onClick={_createBarter}>
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
      {userNFTs?.map((image, idx) => (
        <div key={idx} className="col-lg-3 col-sm-6 col-12">
          <img onClick={(e) => handleClick(image, e)} src={image.src} alt="image" style={{ border: selectedImages.includes(image) ? '2px solid blue' : '2px solid transparent' }} />
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
      {userNFTs?.map((image, idx) => (
        <div key={idx} className="col-lg-3 col-sm-6 col-12">
          <img onClick={(e) => handleClick(image, e)} src={image.src} alt="image" style={{ border: selectedImages.includes(image) ? '2px solid blue' : '2px solid transparent' }} />
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
        <input type="text" placeholder="Pool Liquidity" value={liquidity} onChange={(e) => setLiquidity(e.target.value)}/>
      </li>
      <li>
        <h5>Fee Percentage</h5>
        <input type="number" placeholder="Fee Percentage" value={fee} onChange={(e) => setFee(e.target.value)}/>
      </li>
    </ul>
  </div>
  <div className="modal_mint_btn">
    <Button lg variant="mint" onClick={createAMMPool}>
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
