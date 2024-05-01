import { useEffect, useState } from "react";
import { useModal } from "utils/ModalContext";
import { FaWallet } from "react-icons/fa";
import { useAccount } from "wagmi";
import { useEthersSigner } from "../../../utils/adapter";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Navigation from "./Navigation";
import Button from "common/button";
import HeaderStyleWrapper from "./Header.style";

import logo from "assets/images/mint-logo.png";
import menuIcon from "assets/images/icon/mint-menu_icon.svg";

const Header = () => {
  const { address, isConnected } = useAccount();
  const signer = useEthersSigner();
  
  useEffect(() => {
    if (isConnected) {
      (async () => {
        await signer?.getAddress()
      })();
    }
  }, [isConnected, signer]);

  const { walletModalHandle } = useModal();
  const [isMobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
  };

  useEffect(() => {
    const header = document.getElementById("navbar");
    const handleScroll = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }});

    return () => {
      window.removeEventListener("sticky", handleScroll);
    };
  }, []);

  return (
    <>
      <HeaderStyleWrapper id="navbar">
        <div className="header_wrapper">
          <div className="header_left">
            <div className="logo">
              <img src={logo.src} alt="logo" />
            </div>
          </div>
          <div className="header_right">
            <div className="bithu_menu_btns">
                <ConnectButton.Custom>
                  {({
                    account,
                    chain,
                    openAccountModal,
                    openChainModal,
                    openConnectModal,
                    authenticationStatus,
                    mounted,
                  }) => {
                    // Note: If your app doesn't use authentication, you
                    // can remove all 'authenticationStatus' checks
                    const ready = mounted && authenticationStatus !== 'loading';
                    const connected =
                      ready &&
                      account &&
                      chain &&
                      (!authenticationStatus ||
                        authenticationStatus === 'authenticated');
                    return (
                      <div
                        {...(!ready && {
                          'aria-hidden': true,
                        })}
                      >
                        {(() => {
                          if (!connected) {
                            return (
                              <button onClick={openConnectModal} type="button" sm="true"
                              variant="hovered"
                              className="connect_btn">
                                <FaWallet />
                                Connect
                              </button>
                            );
                          }
                          if (chain.unsupported) {
                            return (
                              <button onClick={openChainModal} type="button">
                                Wrong network
                              </button>
                            );
                          }
                          return (
                            <div style={{ display: 'flex', gap: 12 }}>
                              <button onClick={openAccountModal} type="button" sm="true"
                              variant="hovered"
                              className="connect_btn">
                                <FaWallet />
                                {account.displayName}
                                {/* {account.displayBalance
                                  ? ` (${account.displayBalance})`
                                  : ''} */}
                              </button>
                            </div>
                          );
                        })()}
                      </div>
                    );
                  }}
                </ConnectButton.Custom>
            </div>
          </div>
        </div>
      </HeaderStyleWrapper>
      {isMobileMenu && <Navigation mobileMenuHandle={handleMobileMenu} />}
    </>
  );
};

export default Header;
