import React from "react";
import { Typography, Button, Box } from "@mui/material";

import { useNavigate } from "react-router-dom";
const moment = require("moment");

const Report = ({ children }) => {
  let history = useNavigate();
  return (
    <div className="app">
      <Box sx={{ textAlign: "center" }}>
        <Typography sx={{ m: 1 }}>DB Entry Forms</Typography>
        <Button
          sx={{ ml: 10 }}
          variant="contained"
          onClick={() => {
            history("/allsites");
          }}
        >
          All Sites
        </Button>
        <Button
          sx={{ ml: 2 }}
          variant="contained"
          onClick={() => {
            history("/gctracker");
          }}
        >
          GC Tracker
        </Button>
      </Box>
    </div>
  );
};

export default Report;
