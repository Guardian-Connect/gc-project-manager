import React, { useState, useEffect } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import {
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Branches from "./Branches";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 226,
  },
}));

const Gctracker = ({ addTicket, setHeader }) => {
  let date = new Date().toISOString().split("T")[0];
  const [gvr_id, setGvr_id] = useState(0);
  const [gp_cust, setGp_cust] = useState("");
  const [dispatch, setDispatch] = useState("");
  const [fm_ticket, setFM_ticket] = useState("000000");
  const [site_name, setSite_name] = useState("");
  const [site_address, setSite_address] = useState("");
  const [grade, setGrade] = useState("");
  const [fp, setFp] = useState("");
  const [sb, setSb] = useState("");
  const [gp_ticket, setGp_ticket] = useState("");
  const [atl_po, setAtl_po] = useState("");
  const [warranty_status, setWarrantystatus] = useState("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState("Open");
  const [loading, setLoading] = React.useState(false);
  const [trip_count, setTripCount] = useState("");
  const [trouble, setTrouble] = useState(false);
  const [email, setEmail] = useState(null);
  const [checked, setChecked] = React.useState(false);
  const [checkedTwo, setCheckedTwo] = React.useState(false);
  const classes = useStyles();

  const reload = () => {
    setTimeout(function () {
      window.location.reload();
    }, 5000);
  };

  useEffect(async () => {
    setHeader("Tracker Entry");
  }, []);

  const consoleTest = (e) => {
    setLoading(true);
    addTicket(
      date,
      gvr_id,
      dispatch,
      fm_ticket,
      grade,
      fp,
      sb,
      gp_ticket,
      atl_po,
      warranty_status,
      notes,
      status,
      email,
      checked,
      checkedTwo
    );
    reload();
  };

  const handleChange = (event) => {
    setChecked(event.target.value);
  };

  const handleChangeTwo = (event) => {
    setCheckedTwo(event.target.checked);
  };

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
    setGvr_id(e.target.value);
  };

  const handleTextChangeGp = (e) => {
    setGp_cust(e.target.value);
  };

  const handleDispatch = (e) => {
    setDispatch(e.target.value);
  };

  const handleTrouble = (e) => {
    setTrouble(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleFmticket = (e) => {
    setFM_ticket(e.target.value);
  };

  const handleLocation = (e) => {
    setSite_name(e.target.value);
  };

  const handleTrip = (e) => {
    setTripCount(e.target.value);
  };

  return (
    <div className="app">
      <Box
        sx={{
          p: 1,
          ml: -30,
          width: "85%",
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        <Box textAlign="center">
          <Typography>GC Ticket Tracker</Typography>
        </Box>
        <TextField
          className={classes.formControl}
          sx={{ m: 2 }}
          required
          id="outlined-required"
          label="Enter GVR ID"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleTextChangeGvr}
        />
        {/* <TextField
          sx={{ m:3}}
          required
          id="outlined-required"
          label="Enter GP Customer Number"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleTextChangeGp}
        /> */}

        <FormControl className={classes.formControl} sx={{ m: 2 }}>
          <InputLabel>Dispatch Type</InputLabel>
          <Select onChange={handleDispatch}>
            <MenuItem value={"Install - Repair"}>Install ONLY </MenuItem>
            <MenuItem value={"Repair"}>Repair </MenuItem>
            <MenuItem value={"Upgrade"}>Upgrade </MenuItem>
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
          className={classes.formControl}
          sx={{ m: 2 }}
          required
          id="outlined-required"
          label="Enter Dispenser Grade # Affected"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleGrade}
        />
        <TextField
          className={classes.formControl}
          sx={{ m: 2 }}
          required
          id="outlined-required"
          label="Enter Fueling Point # Affected"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleFueling}
        />

        <FormControl className={classes.formControl} sx={{ m: 2 }}>
          <InputLabel>Branch</InputLabel>
          <Branches handleBrach={handleBranch} />
        </FormControl>
        <TextField
          className={classes.formControl}
          sx={{ m: 2 }}
          required
          id="outlined-required"
          label="Enter GP Ticket #"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleGpticket}
        />
        <TextField
          className={classes.formControl}
          sx={{ m: 2 }}
          required
          id="outlined-required"
          label="Enter GC Ticket #"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleAtl}
        />
        <TextField
          className={classes.formControl}
          sx={{ m: 2 }}
          required
          id="outlined-required"
          label="Enter FM Ticket #"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleFmticket}
        />
        <FormControl className={classes.formControl} sx={{ m: 2 }}>
          <InputLabel>Customer Email</InputLabel>
          <Select onChange={handleEmail}>
            <MenuItem value={"Approved"}>Approved</MenuItem>
            <MenuItem value={"Rejected"}>Rejected </MenuItem>
            <MenuItem value={"No Response"}>No Response</MenuItem>
            <MenuItem value={"Pending"}>Pending</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl} sx={{ m: 2 }}>
          <InputLabel>Dispatch Source</InputLabel>
          <Select onChange={handleChange}>
            <MenuItem value={"Customer Request"}>Customer Request</MenuItem>
            <MenuItem value={"Dashboard"}>Dashboard </MenuItem>
            <MenuItem value={"Troubled Dispenser"}>Troubled Dispenser</MenuItem>
          </Select>
        </FormControl>
        <TextField
          sx={{ width: "91%", m: 3 }}
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
          <LoadingButton
            sx={{ m: 2, width: "82%" }}
            color="secondary"
            onClick={consoleTest}
            loading={loading}
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="contained"
          >
            Save
          </LoadingButton>
        </Box>
      </Box>
    </div>
  );
};

export default Gctracker;
