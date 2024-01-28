import React from "react";
import { Typography, Button, Box } from "@mui/material";

import { useHistory } from "react-router-dom";
const moment = require("moment");

const Report = ({ children }) => {
  let history = useHistory();
  return (
    <div className="app">
      <Box sx={{ textAlign: "center" }}>
        <Typography sx={{ m: 1 }}>DB Entry Forms</Typography>
        <Button
          sx={{ ml: 10 }}
          variant="contained"
          onClick={() => {
            history.push("/allsites");
          }}
        >
          All Sites
        </Button>
        <Button
          sx={{ ml: 2 }}
          variant="contained"
          onClick={() => {
            history.push("/gctracker");
          }}
        >
          GC Tracker
        </Button>
      </Box>
    </div>
  );
};

export default Report;
