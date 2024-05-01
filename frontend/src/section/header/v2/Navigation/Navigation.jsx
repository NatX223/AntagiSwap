import Link from "next/link";
import {
  FaLinkedinIn,
  FaInstagram,
  FaTelegramPlane,
  FaFacebook,
} from "react-icons/fa";
import { useModal } from "utils/ModalContext";

import Popup from "section/popup";
import home1 from "assets/images/nft/index1.png";
import home2 from "assets/images/nft/index2.png";
import home3 from "assets/images/nft/index3.png";
import home4 from "assets/images/nft/index4.png";
import home5 from "assets/images/nft/index-5.png";

import logo from "assets/images/mint-logo.png";
import openseaIcon from "assets/images/icon/opensea.svg";
import mediumIcon from "assets/images/icon/med.svg";
import hoverShape from "assets/images/icon/hov_shape_s.svg";
import mailIcon from "assets/images/icon/mail_icon.svg";
import IconClose from "assets/images/icon/mint-menu_x_icon..svg";

import NavigationWrapper from "./Navigation.style";
import Button from "common/button";

const Navigation = ({ mobileMenuHandle }) => {
  const { isPopup, popupHandle } = useModal();

  return (
    <NavigationWrapper>
      <div className="container">
        <div className="navigation_header">
          <img src={logo.src} alt="logo" />
          <h2 className="menu_title">Menu</h2>

          <div className="close_btn">
            <Button sm variant="outline" onClick={() => mobileMenuHandle()}>
              <img src={IconClose.src} alt="icon" />
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="navigation_left">
              <div className="menu_widgets">
                <h3>HOME PAGES</h3>
                <div className="home_pages">
                  <Link href="/">
                    <a>
                      <img src={home1.src} alt="icon" />
                    </a>
                  </Link>
                  <Link href="/home-two">
                    <a>
                      <img src={home2.src} alt="icon" />
                    </a>
                  </Link>
                  <Link href="/home-three">
                    <a>
                      <img src={home3.src} alt="icon" />
                    </a>
                  </Link>

                  <Link href="/home-four">
                    <a>
                      <img src={home4.src} alt="icon" />
                    </a>
                  </Link>
                  <Link href="/home-five">
                    <a>
                      <img src={home5.src} alt="icon" />
                    </a>
                  </Link>
                </div>
              </div>
              {/* popup */}
              {isPopup && <Popup popupHandle={popupHandle} />}
            </div>
          </div>
          <div className="col-md-6">
            <div className="navigation_right">
              <div className="menu_widgets">
                <h3>SUB PAGES</h3>

                <div className="pages_list">
                  <Link href="/mint-1">
                    <a> Minting Page 1 </a>
                  </Link>
                  <Link href="/mint-2">
                    <a> Minting Page 2 </a>
                  </Link>
                  <Link href="/coming-soon">
                    <a> Coming Soon </a>
                  </Link>
                  <Link href="/post">
                    <a> Blog Page </a>
                  </Link>
                  <Link href="/blogs">
                    <a> Blog Details </a>
                  </Link>
                  <Link href="/about">
                    <a> About Us </a>
                  </Link>
                  <Link href="/roadmap">
                    <a> Roadmap </a>
                  </Link>
                  <Link href="/collections">
                    <a> Collections </a>
                  </Link>
                  <Link href="/faq">
                    <a>FAQs</a>
                  </Link>
                  <Link href="contact">
                    <a> Contact Us </a>
                  </Link>
                </div>
              </div>
              <div className="menu_widgets">
                <h3>JOIN WITH US</h3>

                <div className="social_links">
                  <Link href="#">
                    <a>
                      <img src={openseaIcon.src} alt="icon" />
                      <span className="hover_shape">
                        <img src={hoverShape.src} alt="shape" />
                      </span>
                    </a>
                  </Link>
                  <Link href="#">
                    <a>
                      <FaLinkedinIn />
                      <span className="hover_shape">
                        <img src={hoverShape.src} alt="shape" />
                      </span>
                    </a>
                  </Link>
                  <Link href="#">
                    <a>
                      <FaInstagram />
                      <span className="hover_shape">
                        <img src={hoverShape.src} alt="shape" />
                      </span>
                    </a>
                  </Link>
                  <Link href="#">
                    <a>
                      <FaTelegramPlane />
                      <span className="hover_shape">
                        <img src={hoverShape.src} alt="shape" />
                      </span>
                    </a>
                  </Link>
                  <Link href="#">
                    <a>
                      <FaFacebook />
                      <span className="hover_shape">
                        <img src={hoverShape.src} alt="shape" />
                      </span>
                    </a>
                  </Link>
                  <Link href="#">
                    <a>
                      <img src={mediumIcon.src} alt="icon" />
                      <span className="hover_shape">
                        <img src={hoverShape.src} alt="shape" />
                      </span>
                    </a>
                  </Link>
                </div>
              </div>

              <div className="menu_widgets contact_address">
                <h3>
                  {" "}
                  <img src={mailIcon.src} alt="icon" /> MAIL US
                </h3>
                <p>Info: ask@domain.com</p>
                <p>Support: wearehere@domain.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavigationWrapper>
  );
};

export default Navigation;
