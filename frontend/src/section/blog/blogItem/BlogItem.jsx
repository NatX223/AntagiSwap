import Link from 'next/link'
import { FaRegComments } from "react-icons/fa";

import BlogItemStyleWrapper from "./BlogItem.style";

const BlogItem = ({ thumbnail, title, timeStamp, categories, excerpt }) => {
  return (
    <BlogItemStyleWrapper className="single_blog_item">
      <div className="blog_thumb">
        <Link href="/post">
          <a>
            <img src={thumbnail.src} alt="bithu nft blog" />
          </a>
        </Link>
      </div>
      <div className="blog_content">
        <div className="blog_meta">
          {categories?.map((category, i) => (
            <Link key={i} href="/post">
              <a className="category_title">
                {i > 0 ? ", " : ""}
                {category.title}
              </a>
            </Link>
          ))}
          <span>.</span>
          <span className="time_stamp">{timeStamp}</span>
        </div>

        <Link href="/post">
          <a className="blog_title">
            {" "}
            {title}
          </a>
        </Link>
        <p>{excerpt} </p>
        <div className="blog_footer">
          <div className="read_more_btn">
            <Link href="/post">
              <a> Read more</a>
            </Link>
          </div>
          <div className="comment_icon">
            <Link href="# ">
              <a>
                {" "}
                <FaRegComments />
              </a>
            </Link>{" "}
            05
          </div>
        </div>
      </div>
    </BlogItemStyleWrapper>
  );
};

export default BlogItem;
