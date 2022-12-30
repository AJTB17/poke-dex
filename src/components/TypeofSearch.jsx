const TypeofSearch = ({ searchStatus, currentPage, lastPage }) => {
  if (searchStatus) return <p>Pagination on search not available</p>
  return <p>{currentPage}/{lastPage}</p>
}

export default TypeofSearch