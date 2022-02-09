import React from "react";
// import Search from "./Search";
const Header = ({ setSearchInput, searchInput }) => {
  const clearModal = () => {};
  const logOut = () => {
    sessionStorage.clear();
    window.location.reload();
  };
  const handleTextChange = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <div className="headtop">
      <div className="searchingbuttons">
        <input
          className="search"
          type="text"
          placeholder="Search By GVR ID,Address, or GP Customer ID."
          value={searchInput}
          onChange={handleTextChange}
        />
      </div>
    </div>
  );
};

export default Header;
