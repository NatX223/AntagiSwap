import Link from "next/link";
import { useState } from "react";
import { useModal } from "utils/ModalContext";
import { FaDiscord, FaTwitter, FaWallet } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import Button from "common/button";
import logo from "assets/images/logo.png";
import openseaIcon from "assets/images/icon/opensea.svg";

import MobileMenuStyleWrapper from "./MobileMenu.style";

const MobileMenu = ({ mobileMenuhandle }) => {
  const { walletModalHandle } = useModal();
  const [isSubmenu, setSubmenu] = useState(false);

  const handleSubmenu = () => {
    setSubmenu(!isSubmenu);
  };
  return (
    <MobileMenuStyleWrapper className="bithu_mobile_menu">
      <div className="bithu_mobile_menu_content">
        <div className="mobile_menu_logo">
          <img className="bithu_logo" src={logo.src} alt="bithu logo" />
          <button
            className="mobile_menu_close_btn"
            onClick={() => mobileMenuhandle()}
          >
            {" "}
            <BsXLg />{" "}
          </button>
        </div>
        <div className="bithu_mobile_menu_list">
          <ul>
            <li>
              <Link href="#home">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="#about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="#roadmap">
                <a>Roadmap</a>
              </Link>
            </li>
            <li>

            </li>
            <li>
              <Link href="#faq">
                <a>FAQ</a>
              </Link>
            </li>
            <li className="submenu mobile_submenu" onClick={handleSubmenu}>
              <Link href="# ">
                <a>Pages +</a>
              </Link>
              <ul
                className={`sub_menu_list mobile_sub_menu_list ${isSubmenu === true && "submenu_hovered"
                  }`}
              >
                <li>
                  <Link href="/">
                    <a>Home One</a>
                  </Link>
                </li>
                <li>
                  <Link href="/home-two">
                    <a>Home Two</a>
                  </Link>
                </li>
                <li>
                  <Link href="/home-three">
                    <a>Home Three</a>
                  </Link>
                </li>
                <li>
                  <Link href="/home-four">
                    <a>Home Four</a>
                  </Link>
                </li>
                <li>
                  <Link href="/home-five">
                    <a>Home Five</a>
                  </Link>
                </li>
                <li>
                  <Link href="/mint-1">
                    <a>Minting Page 1</a>
                  </Link>
                </li>
                <li>
                  <Link href="/mint-2">
                    <a>Minting Page 2</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link href="/roadmap">
                    <a>Roadmap</a>
                  </Link>
                </li>
                <li>
                  <Link href="/collections">
                    <a>Collections</a>
                  </Link>
                </li>
                <li>
                  <Link href="/faq">
                    <a>FAQs</a>
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon">
                    <a>Coming Soon</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blogs">
                    <a>Latest Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/post">
                    <a>Blog Details</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a> Contact </a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="mobile_menu_social_links">
          <Link href="# ">
            <a>
              <img src={openseaIcon.src} alt="bithu social icon" />
            </a>
          </Link>
          <Link href="# ">
            <a>
              <FaTwitter />
            </a>
          </Link>
          <Link href="# ">
            <a>
              <FaDiscord />
            </a>
          </Link>
        </div>
        <Button
          sm
          variant="hovered"
          className="connect_btn"
          onClick={() => walletModalHandle()}
        >
          <FaWallet /> Connect
        </Button>
      </div>
    </MobileMenuStyleWrapper>
  );
};

export default MobileMenu;
