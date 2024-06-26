import styled, { keyframes } from "styled-components";
import bannerBg from "assets/images/bg/banner_bg_3.jpg";

const rotate = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`;

const BannerStyleWrapper = styled.section`
  background: url(${bannerBg.src});
  width: 100%;
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  padding: 165px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1,
  h4,
  h5 {
    margin: 0;
  }

  /* particles and banner thumb */
  .banner-image-area3 {
    position: relative;
    padding: 110px 0;
    z-index: 3;

    .banner-image1 {
      position: relative;
      z-index: 3;
      top: -25px;
    }

    .banner-image2,
    .banner-image3 {
      position: absolute;
    }
    .banner-image2 {
      left: -52px;
      bottom: 40px;
    }
    .banner-image3 {
      right: 75px;
      bottom: 130px;
      z-index: 4;
    }

    /* particles */
    .shape_1,
    .shape_2,
    .shape_3 {
      position: absolute;
    }
    .shape_1 {
      top: 15%;
      width: 72px;
    }

    .shape_2 {
      top: 22%;
      left: 68%;
      width: 40px;
    }

    .shape_3 {
      top: 76%;
      left: 40%;
      width: 64px;
    }

    .rotated-style {
      animation: ${rotate} 30s linear infinite;
    }
  }

  .banner-conent3 {
    .banner-subtitle {
      color: #fff;
      font-size: 24px;
      margin-bottom: 20px;
    }

    .banner-title {
      color: #ffffff;
      font-size: 60px;
      line-height: 60px;
      margin-bottom: 45px;
    }

    span {
      color: #ff004c;
    }
  }

  .bithu_v3_timer {
    h5 {
      font-size: 18px;
      color: #fff;
    }

    .timer {
      display: block;
      margin-bottom: 40px;
    }
  }

  .banner-count-inner {
    .banner-btn-area {
      margin-right: 30px;
    }

    .input-number,
    .input-number-decrement,
    .input-number-increment {
      border: none;
      height: 60px;
      user-select: none;
    }

    .input-number-decrement,
    .input-number-increment {
      display: inline-block;
      width: 60px;
      color: #fff;
      text-align: center;
      font-weight: bold;
      line-height: 60px;
      background: rgba(255, 255, 255, 0.06);
      cursor: pointer;
    }

    .input-number {
      color: #fff;
      background: transparent;
      border-right: none;
      border-top: 2px solid rgba(255, 255, 255, 0.06);
      border-bottom: 2px solid rgba(255, 255, 255, 0.06);
      width: 80px;
      padding: 0 12px;
      vertical-align: top;
      text-align: center;
      outline: none;
    }

    .input-number-increment {
      border-left: none;
    }
  }
  .banner-bottom-text {
    color: rgba(255, 255, 255, 0.8);
    font-size: 18px;
    font-family: "Bakbak One";
    max-width: 240px;
    margin-top: 52px;
    line-height: 1.5;
  }

  /* titmer */
  .countdown_wrapper {
    line-height: 65px;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
    column-gap: 15px;

    .count_number {
      font-family: "Bakbak One";
      font-size: 40px;
      padding-right: 25px;
      span {
        color: rgba(255, 255, 255, 0.2);
      }

      .label {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 1199px) {
    .banner-conent3 {
      .banner-title {
        font-size: 50px;
      }
    }
    .banner-image-area3 {
      .banner-image2 {
        left: 0;
      }
    }
  }

  @media only screen and (max-width: 991px) {
    .bithu_v3_baner_sect {
      padding-bottom: 80px;
    }

    .banner-image-area3 {
      padding-top: 20px;

      .banner-image1 {
        left: 80px;
      }
    }
  }

  @media only screen and (max-width: 767px) {
    .banner-conent3 {
      .banner-subtitle {
        font-size: 20px;
        margin-bottom: 15px;
      }
      .banner-title {
        font-size: 30px;
        line-height: 34px;
        margin-bottom: 30px;
      }
    }
    .banner-image-area3 {
      .banner-image2 {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .banner-image-area3 {
      .banner-image1 {
        left: 0;
      }
      .banner-image3 {
        right: 0;
      }
    }

    .banner-count-inner {
      &.d-flex {
        display: block !important;
      }

      .banner-btn-area {
        margin-right: 0;
        margin-bottom: 20px;
      }
    }
  }
`;

export default BannerStyleWrapper;
