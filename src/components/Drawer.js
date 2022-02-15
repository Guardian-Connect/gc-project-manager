import React from "react";
import { bubble as Menu } from "react-burger-menu";
import { Button } from "@mui/material";
import "./Drawer.css";
import { Typography } from "@mui/material";

const Drawer = ({ setSearchInput }) => {
  return (
    <Menu>
      <Typography variant="h5">Open Projects</Typography>
      <Button
        variant="outlined"
        onClick={() => {
          setSearchInput("MAJ0001");
        }}
      >
        Major's Management
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          setSearchInput("LIO");
        }}
      >
        Lion's Pride
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          setSearchInput("SOU");
        }}
      >
        South East Petro
      </Button>
      {/* <a className="menu-item" href="/desserts">
        Desserts
      </a> */}
    </Menu>
  );
};

export default Drawer;
