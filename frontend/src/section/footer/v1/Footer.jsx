import Link from 'next/link'
import CTA from "../../cta/v1";
import { footerLinksV1 } from "assets/data/insiteLinks";
import footerLogo from "assets/images/logo.png";
import backToTopIcon from "assets/images/icon/back_to_top.svg";

import characterShape from "assets/images/nft/3_chr_img.png";
import footerShapesLeft from "assets/images/icon/footer_shapes_left.png";
import footerShapesRight from "assets/images/icon/footer_shapes_right.png";

import FooterStyleWrapper from "./Footer.style";
const Footer = () => {
  return (
    <FooterStyleWrapper>
      <CTA />

      <div className="bithu_v1_main_footer">
        <div className="bithu_v1_main_footer_overlay"></div>
        <div className="three_charectre_img">
          <img src={characterShape.src} alt="bithu nft character" />
        </div>

        <div className="footer_bottom">
          <div className="footer_bottom_content">
            <span className="footer_shapes_left">
              <img src={footerShapesLeft.src} alt="bithu nft footer" />
            </span>
            <span className="footer_shapes_right">
              <img src={footerShapesRight.src} alt="bithu nft footer" />
            </span>
            <div className="container">
              <div className="footer_menu">
                <div className="bottom_footer_left">
                  <div className="footer_logo">
                    <Link href="# ">
                      <a>
                        <img src={footerLogo.src} alt="bithu nft logo" />
                      </a>
                    </Link>
                  </div>
                  <div className="copiright_text">
                    <p>Copyright © 2022 Bithu</p>
                  </div>
                </div>
                <Link href="# ">
                  <a className="bact_to_top_btn">
                    <img src={backToTopIcon.src} alt="bithu nft back to top" />
                  </a>
                </Link>
                <div className="bottom_footer_right">
                  <ul>
                    {footerLinksV1?.map((item, i) => (
                      <li key={i}>
                        <Link href={item.url}>
                          <a>{item.title}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterStyleWrapper>
  );
};

export default Footer;
