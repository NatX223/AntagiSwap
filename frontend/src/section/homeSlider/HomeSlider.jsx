import { useState, useEffect } from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { Slider, SliderItem } from "common/slider/Slider";
import { useModal } from "utils/ModalContext";
import GlobalStyles from "assets/styles/GlobalStyles";
import Layout from "common/layout";
import Header from "section/header/v2";
import Banner from "section/banner/v5";
import About from "section/about/v5";
import Collection from "section/collection";
import Barter from "section/Barter";
import Mint from "section/mint/v1";
import AMM from "section/AMM";
import MetamaskModal from "common/modal/metamaskModal/MetamaskModal";
import MintNowModal from "common/modal/mintNowModal";
import WalletModal from "common/modal/walletModal/WalletModal";
import StyleWrapper from "./StyleWrapper";
import BarterTradeModal from "common/modal/BarterModal";
import AMMModal from "common/modal/ammModal";

const HomeSlider = () => {
  const [isCollapse, setCollapse] = useState(true);
  const { visibility, walletModalvisibility, metamaskModal, mintModalHandle, barterModalHandle, AMMModalHandle } = useModal();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedBarter, setSelectedBarter] = useState(null);
  const [selectedCollection, setSelectedCollection] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    mintModalHandle();
  };

  const handleBarterClick = (barter) => {
    setSelectedBarter(barter);
    barterModalHandle();
  };

  const handleCollectionClick = (barter) => {
    setSelectedCollection(barter);
    AMMModalHandle();
  };

  const menuData = [
    "Home",
    "About",
    "AMM",
    "Barter",
    "Listings",
    "Create",
  ];

  const settings = {
    swipe: false,
    dots: true,
    arrows: false,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 500,
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => <span>{menuData[i]}</span>,
  };

  const handleCollapse = () => {
    setCollapse(!isCollapse);
  };

  useEffect(() => {
    const listItems = document.querySelectorAll(".slick-dots li");
    for (let i = 0; i <= listItems.length - 1; i++) {
      listItems[i].addEventListener("click", (e) => { 
        setCollapse(!isCollapse);
      });
    }
  }, [isCollapse]);

  return (
    <>
      <Layout>
        <GlobalStyles />
        {metamaskModal && <MetamaskModal />}
        {visibility && selectedProduct && <MintNowModal {...selectedProduct} />}
        {visibility && selectedBarter && <BarterTradeModal {...selectedBarter} />}
        {visibility && selectedCollection && <AMMModal {...selectedCollection} />}
        {walletModalvisibility && <WalletModal />}
        <Header />
        <StyleWrapper>
          <Slider
            {...settings}
            className={`${isCollapse ? "slider_collapse" : ""}`}
          >
            <SliderItem>
              <Banner />
            </SliderItem>
            <SliderItem>
              <About />
            </SliderItem>
            <SliderItem>
              <AMM handleCollectionClick={handleCollectionClick} />
            </SliderItem>
            <SliderItem>
              <Barter handleBarterClick={handleBarterClick} />
            </SliderItem>
            <SliderItem>
              <Collection handleProductClick={handleProductClick} />
            </SliderItem>
            <SliderItem>
              <Mint />
            </SliderItem>
          </Slider>

          <div className="collapse_icon">
            <span onClick={() => handleCollapse()}>
              {isCollapse ? <BsChevronUp /> : <BsChevronDown />}
            </span>
          </div>
        </StyleWrapper>
      </Layout>
    </>
  );
};

export default HomeSlider;
