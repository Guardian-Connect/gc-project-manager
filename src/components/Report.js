import React, { useState } from "react";
import { Typography, MenuItem, Menu, Button, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Select from "react-select";
import { getReportData } from "../api";
import useLocalStorage from "./Export";
import { useHistory } from "react-router-dom";
const moment = require("moment");

const Report = ({ children }) => {
  const [gvrid, setGvrid] = useState("");
  const [warrantystatus, setWarrantystatus] = useState("");
  const [atlpo, setAtlpo] = useState("");
  const [gpticket, setGpticket] = useState("");
  const [sb, setSb] = useState("");
  const [grade, setGrade] = useState(0);
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
  const [fmticket, setFmticket] = useState(0);
  const [type, setType] = useState("");
  const [gp, setGp] = useState("");
  const [date, setDate] = useState(moment.utc().format("MM/DD/yyyy"));
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
