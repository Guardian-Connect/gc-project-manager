import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppBar from "../components/AppBar";
import Toolbar from "../components/Toolbar";
import Drawer from "../../Drawer";
const rightLink = {
  fontSize: 16,
  color: "common.white",
  ml: 3,
};

function AppAppBar({ searchInput, setSearchInput }) {
  let site = JSON.parse(sessionStorage.getItem("site"));
  let countDis;
  let countCon;

  // let countDis;
  // let countCon;

  // func check() {
  if (site.length === 5) {
    countDis = JSON.parse(sessionStorage.getItem("sitedisc")).length;
  } else {
    countDis = JSON.parse(sessionStorage.getItem("disconnected")).length;
  }

  if (site.length === 5) {
    countCon = JSON.parse(sessionStorage.getItem("siteconnected")).length;
  } else {
    countCon = JSON.parse(sessionStorage.getItem("connected")).length;
  }

  const handleTextChange = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "center" }}>
          <Box
            sx={{
              flex: 0,
            }}
          />
          <div>Connected - {countCon}</div>
          <input
            className="search"
            type="text"
            placeholder="Search By GVR ID, Address, or GP Customer Number."
            value={searchInput}
            onChange={handleTextChange}
          />
          <div>Not Connected - {countDis} </div>

          <div className="drawer">
            <Drawer
              setSearchInput={setSearchInput}
              pageWrapId={"page-wrap"}
              outerContainerId={"outer-container"}
            />
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
