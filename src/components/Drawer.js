import React from "react";
import { bubble as Menu } from "react-burger-menu";
import { Button } from "@mui/material";
import "./Drawer.css";
import { Typography } from "@mui/material";
import { getInfo, getSomething } from "../api";
import { useHistory } from "react-router-dom";
const Drawer = ({ setSearchInput }) => {
  let history = useHistory();
  return (
    <Menu>
      <Typography variant="h5">Open Projects</Typography>
      <Button
        sx={{ marginTop: 2 }}
        variant="contained"
        onClick={async () => {
          await getInfo("MAJ0001");
          history.push("/second");
          sessionStorage.setItem("site", JSON.stringify("12345"));

          window.location.reload();
        }}
      >
        Major's Management
      </Button>
      <Button
        sx={{ marginTop: 2 }}
        variant="contained"
        onClick={async () => {
          await getInfo("LIO0002");
          history.push("/second");
          sessionStorage.setItem("site", JSON.stringify("12345"));

          window.location.reload();
        }}
      >
        Lion's Pride
      </Button>
      <Button
        sx={{ marginTop: 2 }}
        variant="contained"
        onClick={async () => {
          await getInfo("SOU0008");
          history.push("/second");
          sessionStorage.setItem("site", JSON.stringify("12345"));

          window.location.reload();
        }}
      >
        South East Petro
      </Button>
      <Button
        sx={{ marginTop: 2 }}
        variant="contained"
        onClick={() => {
          setSearchInput("");
          getSomething();
          history.push("/");
          sessionStorage.setItem("site", JSON.stringify("12"));
          window.location.reload();
        }}
      >
        Clear
      </Button>
    </Menu>
  );
};

export default Drawer;
