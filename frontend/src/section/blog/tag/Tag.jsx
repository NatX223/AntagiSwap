import Link from 'next/link'
import TagStyleWrapper from "./tag.style";
import tags from "assets/data/blog/tags";
const Tag = () => {
  return (
    <TagStyleWrapper className="tag_items">
      {tags?.map((tag, i) => (
        <Link key={i} href={tag.url}>
          <a>
            {" "}
            {tag.title}
          </a>
        </Link>
      ))}
    </TagStyleWrapper>
  );
};

export default Tag;
