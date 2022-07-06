import React, { useState, useEffect } from "react";
import SendIcon from "@mui/icons-material/Send";
import {
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Menu,
  Button,
  TextField,
  Alert,
  Box,
} from "@mui/material";

import { makeStyles } from "@mui/styles";
const moment = require("moment");
const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 226,
  },
}));

const Gctracker = ({ addTicket }) => {
  let now = new Date().toISOString().split("T")[0];
  const [gvr_id, setGvr_id] = useState(0);
  const [gp_cust, setGp_cust] = useState("");
  const [dispatch, setDispatch] = useState("");
  const [fm_ticket, setFM_ticket] = useState("");
  const [site_name, setSite_name] = useState("");
  const [site_address, setSite_address] = useState("");
  const [grade, setGrade] = useState("");
  const [fp, setFp] = useState("");
  const [sb, setSb] = useState("");
  const [gp_ticket, setGp_ticket] = useState("");
  const [atl_po, setAtl_po] = useState("");
  const [warranty_status, setWarrantystatus] = useState("");
  const [notes, setNotes] = useState("");
  const classes = useStyles();

  const handleNotes = (e) => {
    setNotes(e.target.value);
  };

  const handleWarranty = (e) => {
    setWarrantystatus(e.target.value);
  };

  const handleAtl = (e) => {
    setAtl_po(e.target.value);
  };

  const handleGpticket = (e) => {
    setGp_ticket(e.target.value);
  };

  const handleBranch = (e) => {
    setSb(e.target.value);
  };

  const handleFueling = (e) => {
    setFp(e.target.value);
  };

  const handleGrade = (e) => {
    setGrade(e.target.value);
  };

  const handleAddress = (e) => {
    setSite_address(e.target.value);
  };

  const handleTextChangeGvr = (e) => {
    console.log(gvr_id.length);
    setGvr_id(e.target.value);
  };

  const handleTextChangeGp = (e) => {
    setGp_cust(e.target.value);
  };

  const handleDispatch = (e) => {
    setDispatch(e.target.value);
  };

  const handleFmticket = (e) => {
    setFM_ticket(e.target.value);
  };

  const handleLocation = (e) => {
    setSite_name(e.target.value);
  };

  return (
    <div className="app">
      <Box textAlign="center">
        <Typography>GC Ticket Tracker</Typography>
      </Box>
      <div className="spaceform">
        <TextField
          sx={{ ml: 1 }}
          required
          id="outlined-required"
          label="Enter GVR ID"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleTextChangeGvr}
        />

        <TextField
          sx={{ ml: 1 }}
          required
          id="outlined-required"
          label="Enter GP Customer Number"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleTextChangeGp}
        />
        <FormControl className={classes.formControl} sx={{ ml: 1 }}>
          <InputLabel>Dispatch Type</InputLabel>
          <Select onChange={handleDispatch}>
            <MenuItem value={"Slow Flow"}>Slow Flow</MenuItem>
            <MenuItem value={"Card Reader"}>Card Reader</MenuItem>
            <MenuItem value={"Printer"}>Printer</MenuItem>
            <MenuItem value={"No Transaction"}>No Transaction</MenuItem>
            <MenuItem value={"Serial Interface"}>Serial Interface</MenuItem>
            <MenuItem value={"UPM"}>UPM</MenuItem>
            <MenuItem value={"Dispenser Offline"}>Dispenser Offline</MenuItem>
            <MenuItem value={"Display"}>Display</MenuItem>
            <MenuItem value={"Omnia"}>Omnia</MenuItem>
            <MenuItem value={"PCN Update"}>PCN Update</MenuItem>
            <MenuItem value={"UPM Update"}>UPM Update</MenuItem>
            <MenuItem value={"Omnia Update"}>Omnia Update</MenuItem>
            <MenuItem value={"SSoM Update"}>SSoM Update</MenuItem>
          </Select>
        </FormControl>
        <TextField
          sx={{ ml: 1 }}
          required
          id="outlined-required"
          label="Enter FM Ticket #"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleFmticket}
        />

        <TextField
          sx={{ ml: 1 }}
          required
          id="outlined-required"
          label="Enter Location Name"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleLocation}
        />

        <TextField
          sx={{ ml: 1 }}
          required
          id="outlined-required"
          label="Enter Location Address"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleAddress}
        />

        <TextField
          sx={{ ml: 1, mt: 2 }}
          required
          id="outlined-required"
          label="Enter Dispenser Grade # Affected"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleGrade}
        />

        <TextField
          sx={{ ml: 1, mt: 2 }}
          required
          id="outlined-required"
          label="Enter Fueling Point # Affected"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleFueling}
        />

        <TextField
          sx={{ ml: 1, mt: 2 }}
          required
          id="outlined-required"
          label="Enter Service Branch (Initials or UNK for Unknown)"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleBranch}
        />

        <TextField
          sx={{ ml: 1, mt: 2 }}
          required
          id="outlined-required"
          label="Enter GP Ticket #"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleGpticket}
        />

        <TextField
          sx={{ ml: 1, mt: 2 }}
          required
          id="outlined-required"
          label="Enter ATL PO #"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleAtl}
        />

        <FormControl className={classes.formControl} sx={{ ml: 1, mt: 2 }}>
          <InputLabel>Warranty Status</InputLabel>
          <Select onChange={handleWarranty}>
            <MenuItem value={"In Warranty"}>In Warranty</MenuItem>
            <MenuItem value={"Out of Warranty"}>Out of Warranty</MenuItem>
          </Select>
        </FormControl>

        <TextField
          sx={{ ml: 1, mt: 2 }}
          required
          id="outlined-required"
          label="Enter Ticket Notes"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          multiline
          rows={6}
          onChange={handleNotes}
        />
        <Box textAlign="center">
          <Button
            sx={{ ml: 10, mt: 3 }}
            variant="contained"
            endIcon={<SendIcon />}
            onClick={() => {
              console.log(now);
              addTicket(
                now,
                gvr_id,
                gp_cust,
                dispatch,
                fm_ticket,
                site_name,
                site_address,
                grade,
                fp,
                sb,
                gp_ticket,
                atl_po,
                warranty_status,
                notes
              );
            }}
          >
            Submit
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default Gctracker;
