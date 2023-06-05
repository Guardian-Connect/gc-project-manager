import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
const drawerWidth = 240;

const Right = () => {
  let history = useHistory();
  const user = sessionStorage.getItem("user");
  return (
    <Box
      sx={{
        display: "flex",
        position: "sticky",
        flexDirection: "column",
        ml: 10,
      }}
    >
      <CssBaseline />

      <Drawer
        sx={{
          width: drawerWidth,
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
              sx={{ border: 1, borderColor: "white", width: 500 }}
              variant="contained"
              onClick={() => {
                history.push("/");
              }}
            >
              Site Information
            </Button>
          </ListItem>
          <ListItem>
            <Button
              sx={{ border: 1, borderColor: "white", width: 500 }}
              variant="contained"
              onClick={async () => {
                history.push("/gctrackerdisplay");
              }}
            >
              GC Tracker
            </Button>
          </ListItem>
          <ListItem>
            <Button
              sx={{ border: 1, borderColor: "white", width: 500 }}
              variant="contained"
              onClick={() => {
                history.push("/alerticket");
              }}
            >
              Alert Tickets
            </Button>
          </ListItem>
          <ListItem>
            <Button
              sx={{ border: 1, borderColor: "white", width: 500 }}
              variant="contained"
              onClick={() => {
                history.push("/inbounddisplay");
              }}
            >
              Inbound Calls
            </Button>
          </ListItem>
          <ListItem>
            <Button
              sx={{ border: 1, borderColor: "white", width: 500 }}
              variant="contained"
              onClick={() => {
                history.push("/project");
              }}
            >
              Project Management
            </Button>
          </ListItem>
        </List>
        <Divider />
        <div className="hide">
          <Typography variant="h5" component="div" sx={{ textAlign: "center" }}>
            DB Entry
          </Typography>
          <List>
            <ListItem>
              <Button
                sx={{ border: 1, borderColor: "white", width: 500 }}
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
                sx={{ border: 1, borderColor: "white", width: 500 }}
                variant="contained"
                onClick={() => {
                  history.push("/gctracker");
                }}
              >
                GC Tracker
              </Button>
            </ListItem>
            <ListItem>
              <Button
                sx={{ border: 1, borderColor: "white", width: 500 }}
                variant="contained"
                onClick={() => {
                  history.push("/pcnalert");
                }}
              >
                PCN Alert Tracker
              </Button>
            </ListItem>
            <ListItem>
              {user === "james" && (
                <Button
                  sx={{ border: 1, borderColor: "white", width: 500 }}
                  variant="contained"
                  onClick={() => {
                    history.push("/login");
                  }}
                >
                  New User
                </Button>
              )}
            </ListItem>
          </List>
        </div>
      </Drawer>
    </Box>
  );
};

export default Right;
