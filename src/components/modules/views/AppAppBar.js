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
const rightLink = {
  fontSize: 16,
  color: "common.white",
  ml: 3,
};

function AppAppBar({
  searchInput,
  setSearchInput,
  contactInfo,
  setContactInfo,
}) {
  // let countDis = JSON.parse(sessionStorage.getItem("disconnected")).length;
  // let countCon = JSON.parse(sessionStorage.getItem("connected")).length;
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
  // React.useEffect(async () => {
  //   await getBfr();
  // }, []);
  // const handleSubmit = async (e) => {
  //   if (e.keyCode === 13) {
  //     if (searchInput.length != 0) {
  //       if (searchInput.length === 6) {
  //         await getEmail(searchInput).then((resp) => {
  //           setContactInfo(resp.emailInfo);
  //           history.push("/contact");
  //         });
  //       }
  //       // else {
  //       //   await getGp(searchInput).then((resp) => {
  //       //     setContactInfo(resp.emailInfo);
  //       //     history.push("/contact");
  //       //     console.log(resp.emailInfo);
  //       //   });
  //       // }
  //     } else {
  //       return;
  //     }
  //   }
  // };

  // const handleKeypress = (e) => {
  //   // it triggers by pressing the enter key
  //   if (e.keyCode === 13) {
  //     handleSubmit();
  //   }
  // };

  let history = useHistory();
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "center" }}>
          <Box
            sx={{
              flex: 0,
            }}
          />
          <CsvDownloadButton
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
          </CsvDownloadButton>
          {/* <div className="withData">Sites w/ Data - {countCon}</div> */}
          <input
            className="search"
            type="text"
            placeholder="Search By GVR ID,Address, or GP Customer ID."
            value={searchInput}
            onChange={handleTextChange}
            // onKeyDown={handleSubmit}
          />
          {/* <div className="withoutData">Sites w/out Data - {countDis} </div> */}

          <Button
            sx={{ ml: 2, mr: 2, border: 1, borderColor: "white" }}
            variant="contained"
            onClick={async () => {
              setSearchInput("");
              window.location.reload();
              // sessionStorage.setItem("false", false);
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
          {/* <div className="drawer">
            <Button
              variant="contained"
              onClick={async () => {
                await getInfo();
                history.push("/second");
                sessionStorage.setItem("site", JSON.stringify("12345"));

                window.location.reload();
              }}
            >
              Open Notes
            </Button>
          </div>
          <div className="drawertwo">
            <Button
              variant="contained"
              onClick={async () => {
                history.push("/");
                // window.location.reload();
              }}
            >
              Clear
            </Button>
          </div> */}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
