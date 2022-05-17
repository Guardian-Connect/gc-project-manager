// import React from "react";
// // import Search from "./Search";
// const Header = ({ setSearchInput, searchInput }) => {
//   const clearModal = () => {};
//   const logOut = () => {
//     sessionStorage.clear();
//     window.location.reload();
//   };
//   const handleTextChange = (e) => {
//     setSearchInput(e.target.value);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("key pressed");
//     // or you can send data to backend
//   };

//   const handleKeypress = (e) => {
//     // it triggers by pressing the enter key
//     console.log(e);
//     if (e.keyCode === 13) {
//       handleSubmit();
//     }
//   };
//   return (
//     <div className="headtop">
//       <div className="searchingbuttons">
//         <input
//           className="search"
//           type="text"
//           placeholder="Search By GVR ID,Address, or GP Customer ID."
//           value={searchInput}
//           onChange={handleTextChange}
//           onKeyDown={handleKeypress}
//         />
//       </div>
//     </div>
//   );
// };

// export default Header;
