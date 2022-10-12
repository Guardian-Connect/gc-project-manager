import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppBar from "../components/AppBar";
import Toolbar from "../components/Toolbar";
import Drawer from "../../Drawer";
import Inboundcall from "../../Inboundcall";
import Dialog from "@mui/material/Dialog";

import { Button } from "@mui/material";
import { getInfo, getInfoInstalls, getEmail, getGp } from "../../../api";
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
  let countDis = JSON.parse(sessionStorage.getItem("disconnected")).length;
  let countCon = JSON.parse(sessionStorage.getItem("connected")).length;
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
  const handleSubmit = async (e) => {
    if (e.keyCode === 13) {
      if (searchInput.length != 0) {
        if (searchInput.length === 6) {
          await getEmail(searchInput).then((resp) => {
            setContactInfo(resp.emailInfo);
            history.push("/contact");
          });
        }
        // else {
        //   await getGp(searchInput).then((resp) => {
        //     setContactInfo(resp.emailInfo);
        //     history.push("/contact");
        //     console.log(resp.emailInfo);
        //   });
        // }
      } else {
        return;
      }
    }
  };

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
          <div>Sites w/ Data - {countCon}</div>
          <input
            className="search"
            type="text"
            placeholder="Search By GVR ID,Address, or GP Customer ID. To see contact info enter the GVR ID and press enter"
            value={searchInput}
            onChange={handleTextChange}
            onKeyDown={handleSubmit}
          />
          <div>Sites w/out Data - {countDis} </div>

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
