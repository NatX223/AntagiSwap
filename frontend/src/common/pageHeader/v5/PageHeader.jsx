import Link from 'next/link'
import titleShape from "assets/images/icon/home-shape.png";
import PageHeaderStyleWrapper from "./PageHeader.style";
const PageHeader = () => {
  return (
    <PageHeaderStyleWrapper>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5">
            <div className="breadcrumb_area">
              <div className="breadcrumb_menu">
                <Link href="# ">
                  <a>Home</a>
                </Link>
                <span>.</span> Contact
                <img
                  className="heading_shape"
                  src={titleShape.src}
                  alt="bithu nft heading shape"
                />
              </div>
              <h2 className="breadcrumb_title text-uppercase">Contact US</h2>
            </div>
          </div>
        </div>
      </div>
    </PageHeaderStyleWrapper>
  );
};

export default PageHeader;
