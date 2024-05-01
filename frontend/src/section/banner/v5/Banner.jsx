import { useModal } from "utils/ModalContext";
import { Slider, SliderItem } from "common/slider/Slider";
import CoinInfoSlider from "../../coinInfoSlider";
import Counter from "common/counter";
import Button from "common/button";
import BannerV1Wrapper from "./Banner.style";

import heartIcon from "assets/images/icon/v5-hart-icon.svg";
import thumb1 from "assets/images/nft/emoji-img1.png";
import thumb2 from "assets/images/nft/emoji-img2.png";
import thumb3 from "assets/images/nft/emoji-img3.png";

import particle1 from "assets/images/icon/v5-thunder-icon.svg";
import particle2 from "assets/images/icon/v5-star-icon.svg";
import particle3 from "assets/images/icon/v5-coin-icon.svg";

const Banner = () => {
  const { mintModalHandle } = useModal();

  const slideImages = [thumb1, thumb2, thumb3];

  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    speed: 500,
    fade: true,
    autoplaySpeed: 500,
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <BannerV1Wrapper id="home">
      <div className="container">
        <div className="row banner_row">
          <div className="col-lg-6 order-1 order-lg-0">
            <div className="bithu_v5_baner_left">
              <h2>
              Beyond just Auctions: 
              A Revolutionary Way to Trade NFTs <img src={heartIcon.src} alt="icon" />
              </h2>
              <div className="coin-info">
                <span>Trade NFTs in an <span className="highlighted">AMM.</span></span>
                <span>
                <span className="highlighted">Barter</span> your NFTs and get the NFTs you want using the ones you have.
                </span>
              </div>
              <div className="banner_buttons">
                <Button sm variant="mint">
                  {" "}
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CoinInfoSlider />

      {/* particles  */}
      <span className="particle_star particle_1">
        <img src={particle1.src} alt="icon" />
      </span>
      <span className="particle_star particle_2">
        <img src={particle2.src} alt="icon" />
      </span>
      <span className="particle_star particle_3">
        <img src={particle3.src} alt="icon" />
      </span>
      {/* particles  */}
    </BannerV1Wrapper>
  );
};

export default Banner;
