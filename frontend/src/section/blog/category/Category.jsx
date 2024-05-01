import Link from 'next/link'
import CategoryWrapper from "./Category.style";
import SectionTitle from "common/sectionTitle";
import categories from "assets/data/blog/categories";
const Category = () => {
  return (
    <CategoryWrapper>
      <SectionTitle subtitle="Categories" className="widget_title" />

      <div className="category_list">
        {categories?.map((category, i) => (
          <Link key={i} href={category.url}>
            <a>
              {category.title}
              <span>{`(${category.postCount})`}</span>
            </a>
          </Link>
        ))}
      </div>
    </CategoryWrapper>
  );
};

export default Category;
