import React from "react";
import styles from "./Pagination.module.scss";
import ReactPaginate from "react-paginate";


type PaginationProps = {
  onChangePage: (page: number) => void,
  currentPage: number
}

const Pagination:React.FC<PaginationProps> = ({ onChangePage, currentPage }) => {
  return (
    <div>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=" >"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        forcePage={currentPage - 1}
        previousLabel="<"
      />
    </div>
  );
};

export default Pagination;
