export const getPageNumbers = (total: number): number[] => {
  const pageNumbers = [];
  for (let i = 1; i <= total; i++) {
    pageNumbers.push(i);
  }
  return pageNumbers;
};

export const getNextPage = (curPage: number) => curPage + 1;
export const getPrevPage = (curPage: number) => curPage - 1;
