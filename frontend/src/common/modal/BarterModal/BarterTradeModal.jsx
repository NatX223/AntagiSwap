import { useState, useEffect } from "react";
import { useModal } from "utils/ModalContext";
import { FiX } from "react-icons/fi";
import Button from "../../button";
import MintModalStyleWrapper from "./BarterTrade.style";
import hoverShape from "assets/images/icon/hov_shape_L.svg";
import { barterTrades } from "src/assets/data/collectionsData";
import arrow from "assets/images/arrow.png";
import { getBarter } from "src/utils/app";
import { executeBarter } from "src/utils/app";
import { useAccount } from "wagmi";
import { useEthersSigner } from "src/utils/adapter";

const BarterTradeModal = ({ id, targetCollection, offeredCollection }) => {
  const [loading, setLoading] = useState(true);
  const [barter, setBarter] = useState({});

  const { address, isConnected } = useAccount();
  const signer = useEthersSigner();

  const completeBarter = async () => {
    executeBarter(id, signer, 2);
    console.log("Done");
  }
  
  useEffect(() => {
    const fetchBarter = async () => {
      const _barter = await getBarter(id);
      setBarter(_barter);
      setLoading(false);
    };
    fetchBarter();
  }, []);

  const { barterModalHandle } = useModal();
  const images = barterTrades[id].images;
  return (
    <>
      <MintModalStyleWrapper className="modal_overlay">
        <div className="mint_modal_box">
          <div className="mint_modal_content">
            <div className="modal_header">
              <h2>Complete Transaction</h2>
              <button onClick={() => barterModalHandle()}>
                <FiX />
              </button>
            </div>
            <div className="modal_body text-center">
              <div className="col-lg-9 col-md-8">
                {loading ? (
                  <p> loading... </p>
                ) : (
                  <div className="row barter_row">
                  {barter.offeredImages?.map((image, idx) => (
                    <div key={idx} className="col-lg-2 col-sm-6 col-12">
                      <img src={image} alt="image" />
                    </div>
                  ))}
                  <img className="col-lg-1 col-sm-6 col-12" src={arrow.src} alt="image" />
                  {barter.targetImages?.map((image, idx) => (
                    <div key={idx} className="col-lg-2 col-sm-6 col-12">
                      <img src={image} alt="image" />
                    </div>
                  ))}
                </div>
                )
                }
              </div>
              <div className="mint_count_list">
                <ul>
                  <li>
                    <h5>Offered Collection</h5>
                    <h5>
                      {offeredCollection}
                    </h5>
                  </li>
                  <li>
                    <h5>Target Collection</h5>
                    <h5>{targetCollection}</h5>
                  </li>
                </ul>
              </div>
              <div className="modal_mint_btn">
                <Button onClick={completeBarter()} lg variant="mint">
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

export default BarterTradeModal;
