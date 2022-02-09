import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppBar from "../components/AppBar";
import Toolbar from "../components/Toolbar";

const rightLink = {
  fontSize: 16,
  color: "common.white",
  ml: 3,
};

function AppAppBar({ searchInput, setSearchInput }) {
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
          <input
            className="search"
            type="text"
            placeholder="Search By GVR ID, Address, or GP Customer Number."
            value={searchInput}
            onChange={handleTextChange}
          />
          {/* <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/second"
              sx={rightLink}
            >
              {"Sign In"}
            </Link> */}
          {/* <Link
              variant="h6"
              underline="none"
              href="/premium-themes/onepirate/sign-up/"
              sx={{ ...rightLink, color: 'secondary.main' }}
            >
              {'Sign Up'}
            </Link> */}
          {/* </Box> */}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
