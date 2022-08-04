import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Button } from "@mui/material";
// import { getInfo, getInfoInstalls, getEmail, getGp } from "../../../api";
import { getInfo, getInfoInstalls, getEmail, getGp } from "../api";
import { useHistory } from "react-router-dom";
const drawerWidth = 240;

const Right = () => {
  let history = useHistory();

  return (
    // <div className="rightbar">
    <Box
      sx={{
        display: "flex",
        position: "sticky",
        flexDirection: "column",
        ml: 10,
      }}
    >
      <CssBaseline />
      {/* <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px` }}
      ></AppBar> */}

      <Drawer
        sx={{
          width: drawerWidth,
          //   flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <Toolbar />
        <Divider />
        <List>
          <Typography variant="h5" component="div" sx={{ textAlign: "center" }}>
            Site Data
          </Typography>
          <ListItem>
            <Button
              sx={{ mr: 2, border: 1, borderColor: "white", width: 500 }}
              variant="contained"
              onClick={async () => {
                await getInfoInstalls();
                history.push("/gctrackerdisplay");
                window.location.reload();
              }}
            >
              GC Tracker
            </Button>
          </ListItem>
          <ListItem>
            <Button
              sx={{
                mr: 2,
                border: 1,
                borderColor: "white",
                width: 500,
              }}
              variant="contained"
              onClick={async () => {
                await getInfoInstalls();
                history.push("/second");
                window.location.reload();
              }}
            >
              Open Installs
            </Button>
          </ListItem>
          <ListItem>
            <Button
              sx={{ mr: 2, border: 1, borderColor: "white", width: 500 }}
              variant="contained"
              onClick={async () => {
                await getInfo();
                history.push("/second");
                window.location.reload();
              }}
            >
              Open Notes
            </Button>
          </ListItem>
          <ListItem>
            <Button
              sx={{ mr: 2, border: 1, borderColor: "white", width: 500 }}
              variant="contained"
              onClick={() => {
                history.push("/alerticket");
              }}
            >
              Alert Tickets
            </Button>
          </ListItem>
        </List>
        <Divider />
        <Typography variant="h5" component="div" sx={{ textAlign: "center" }}>
          DB Entry
        </Typography>
        <List>
          <ListItem>
            <Button
              sx={{ mr: 2, border: 1, borderColor: "white", width: 500 }}
              variant="contained"
              onClick={() => {
                history.push("/allsites");
              }}
            >
              All Sites
            </Button>
          </ListItem>
          <ListItem>
            <Button
              sx={{ mr: 2, border: 1, borderColor: "white", width: 500 }}
              variant="contained"
              onClick={() => {
                history.push("/gctracker");
              }}
            >
              GC Tracker
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </Box>
    // </div>
  );
};

export default Right;
