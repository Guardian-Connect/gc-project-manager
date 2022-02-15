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
        sx={{ marginTop: 2 }}
        variant="contained"
        onClick={() => {
          setSearchInput("MAJ0001");
        }}
      >
        Major's Management
      </Button>
      <Button
        sx={{ marginTop: 2 }}
        variant="contained"
        onClick={() => {
          setSearchInput("LIO");
        }}
      >
        Lion's Pride
      </Button>
      <Button
        sx={{ marginTop: 2 }}
        variant="contained"
        onClick={() => {
          setSearchInput("SOU");
        }}
      >
        South East Petro
      </Button>
      <Button
        sx={{ marginTop: 2 }}
        variant="contained"
        onClick={() => {
          setSearchInput("");
        }}
      >
        Clear
      </Button>
    </Menu>
  );
};

export default Drawer;
