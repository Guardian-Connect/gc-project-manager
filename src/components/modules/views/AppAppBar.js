import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppBar from "../components/AppBar";
import Toolbar from "../components/Toolbar";
import Drawer from "../../Drawer";
import Inboundcall from "../../Inboundcall";
import Dialog from "@mui/material/Dialog";
import CsvDownloadButton from "react-json-to-csv";
import { Button } from "@mui/material";
import { getBfr } from "../../../api";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiPaper-root": {
      borderRadius: "10px",
      // boxShadow: "5px 5px 22px 0px rgba(0,0,0,0.85);",
      background:
        "linear-gradient(189deg, rgba(25,118,213,1) 22%, rgba(255,252,247,1) 91%, rgba(2,0,36,1) 97%);",
    },
  },
}));

function AppAppBar({
  searchInput,
  setSearchInput,
  contactInfo,
  setContactInfo,
}) {
  let mockData = JSON.parse(sessionStorage.getItem("bfr"));
  const [open, setOpen] = React.useState(false);
  const handleTextChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  let history = useHistory();
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "center" }}>
          <Box
            sx={{
              flex: 0,
            }}
          />
          {/* <CsvDownloadButton
            data={mockData}
            filename="BFR.csv"
            style={{
              boxShadow: "inset 0px 1px 0px 0px #e184f3",
              background:
                "linear-gradient(to bottom, #c123de 5%, #a20dbd 100%)",
              backgroundColor: "#c123de",
              borderRadius: "6px",
              border: "1px solid white",
              display: "inline-block",
              cursor: "pointer",
              color: "#ffffff",
              fontSize: "15px",
              fontWeight: "bold",
              padding: "6px 24px",
              textDecoration: "none",
              textShadow: "0px 1px 0px #9b14b3",
              marginRight: "10px",
            }}
          >
            BFR Download
          </CsvDownloadButton> */}
          <input
            className="search"
            type="text"
            placeholder="Search By GVR ID,Address, or GP Customer ID."
            value={searchInput}
            onChange={handleTextChange}
          />

          <Button
            sx={{ ml: 2, mr: 2, border: 1, borderColor: "white" }}
            variant="contained"
            onClick={async () => {
              setSearchInput("");
              window.location.reload();
            }}
          >
            Search Clear
          </Button>

          <Button
            sx={{ ml: 2, mr: 2, border: 1, borderColor: "white" }}
            variant="contained"
            onClick={handleClickOpen}
          >
            New Call
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <Inboundcall />
          </Dialog>
          {/* <Button
            sx={{ ml: 2, mr: 2, border: 1, borderColor: "white" }}
            variant="contained"
            onClick={() => {
              history.push("/addresslookup");
            }}
          >
            Provisioning Lookup
          </Button> */}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
