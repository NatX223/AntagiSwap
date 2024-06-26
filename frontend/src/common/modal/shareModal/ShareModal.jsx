import Link from 'next/link'
import { useModal } from "utils/ModalContext";
import { FiX } from "react-icons/fi";
import ShareModalStyleWrapper from "./ShareModal.style";
import hoverShape from "assets/images/icon/hov_shape_L.svg";
import hoverShapeSmall from "assets/images/icon/hov_shape_s.svg";
import data from "assets/data/socialShare";
const ShareModal = () => {
  const { shareModalHandle } = useModal();
  return (
    <>
      <ShareModalStyleWrapper className="modal_overlay">
        <div className="mint_modal_box">
          <div className="mint_modal_content">
            <div className="modal_header">
              <h2>SHARE POST</h2>
              <button onClick={(e) => shareModalHandle(e)}>
                <FiX />
              </button>
            </div>
            <div className="modal_body text-center">
              <div className="social_profiles">
                {data?.map((item, i) => (
                  <Link key={i} href={item.url}>
                    <a>
                      {item.thumb ? (
                        <img src={item.thumb.src} alt="bithu nft social" />
                      ) : (
                        item.icon
                      )}

                      <img
                        className="btn_hover_shape"
                        src={hoverShapeSmall.src}
                        alt="hover share"
                      />
                    </a>
                  </Link>
                ))}
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
      </ShareModalStyleWrapper>
    </>
  );
};

export default ShareModal;
