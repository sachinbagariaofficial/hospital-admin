export type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (num: number) => void | undefined;
};
