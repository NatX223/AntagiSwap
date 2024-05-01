import Link from "next/link";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import PaginationStyleWrapper from "./Pagination.style";

const Pagination = () => {
  return (
    <PaginationStyleWrapper className="pagination_wrapper">
      <Link href="# ">
        <a>
          <FiChevronLeft />
        </a>
      </Link>
      <Link href="# ">
        <a>1</a>
      </Link>
      <Link href="# ">
        <a>2</a>
      </Link>
      <Link href="# ">
        <a className="active">3</a>
      </Link>
      <Link href="# ">
        <a>4</a>
      </Link>
      <Link href="# ">
        <a>5</a>
      </Link>
      <Link href="# ">
        <a>
          <FiChevronRight />
        </a>
      </Link>
    </PaginationStyleWrapper>
  );
};

export default Pagination;
