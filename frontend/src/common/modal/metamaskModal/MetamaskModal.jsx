import Link from 'next/link'
import { useModal } from "utils/ModalContext";
import { FiX, FiChevronRight } from "react-icons/fi";
import MetamaskModalStyleWrapper from "./MetamaskModal.style.js";
import metamaskIcon from "assets/images/icon/MetaMask.svg";

const MetamaskModal = () => {
  const { handleMetamaskModal } = useModal();

  return (
    <>
      <MetamaskModalStyleWrapper className="modal_overlay">
        <div className="mint_modal_box">
          <div className="mint_modal_content">
            <div className="modal_header">
              <h2>CONNECT WALLET</h2>
              <p>Please download & install metamask!</p>
              <button onClick={() => handleMetamaskModal()}>
                <FiX />
              </button>
            </div>
            <div className="modal_body text-center">
              <div className="wallet_list">
                <Link href="https://metamask.io/download/">
                  <a target="_blank" rel="noopener">
                    <img src={metamaskIcon.src} alt="Meta-mask-Image" />
                    MetaMask
                    <span>
                      <FiChevronRight />
                    </span>
                  </a>
                </Link>

              </div>
              <div className="modal_bottom_text">
                By connecting your wallet, you agree to our
                <Link href="# ">
                  <a>Terms of Service</a>
                </Link>
                <Link href="#">
                  <a>Privacy Policy</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </MetamaskModalStyleWrapper>
    </>
  );
};

export default MetamaskModal;
