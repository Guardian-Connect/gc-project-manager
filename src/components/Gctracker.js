import React, { useState } from "react";
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
} from "@mui/material";
import Branches from "./Branches";
import { makeStyles } from "@mui/styles";
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
  const classes = useStyles();

  const reload = () => {
    setTimeout(function () {
      window.location.reload();
    }, 5000);
  };

  const consoleTest = (e) => {
    setLoading(true);
    addTicket(
      now,
      gvr_id,
      // gp_cust,
      dispatch,
      fm_ticket,
      // site_name,
      // site_address,
      grade,
      fp,
      sb,
      gp_ticket,
      atl_po,
      warranty_status,
      notes,
      status
    );
    reload();
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
          sx={{ m: 3 }}
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
        <FormControl className={classes.formControl} sx={{ m: 3 }}>
          <InputLabel>Dispatch Type</InputLabel>
          <Select onChange={handleDispatch}>
            <MenuItem value={"Install - Repair"}>Install - Repair </MenuItem>
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
        {/* <FormControl className={classes.formControl} sx={{ m:3}}>
          <InputLabel>Warranty Status</InputLabel>
          <Select onChange={handleWarranty}>
            <MenuItem value={"In Warranty"}>In Warranty</MenuItem>
            <MenuItem value={"Out of Warranty"}>Out of Warranty</MenuItem>
          </Select>
        </FormControl> */}
        {/* 
        <TextField
          sx={{ m:3}}
          required
          id="outlined-required"
          label="Enter Location Name"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleLocation}
        />

        <TextField
          sx={{ m:3}}
          required
          id="outlined-required"
          label="Enter Location Address"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleAddress}
        /> */}

        <TextField
          sx={{ m: 3 }}
          required
          id="outlined-required"
          label="Enter Dispenser Grade # Affected"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleGrade}
        />

        <TextField
          sx={{ m: 3 }}
          required
          id="outlined-required"
          label="Enter Fueling Point # Affected"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleFueling}
        />

        <FormControl className={classes.formControl} sx={{ m: 3 }}>
          <InputLabel>Branch</InputLabel>
          <Branches handleBrach={handleBranch} />
          {/* <Select onChange={handleBranch}>
            <MenuItem value={"ATL"}>Atlanta</MenuItem>
            <MenuItem value={"BIR"}>Birmingham</MenuItem>
            <MenuItem value={"CHA"}>Charlotte</MenuItem>
            <MenuItem value={"COL"}>Columbia</MenuItem>
            <MenuItem value={"CUS"}>Customer</MenuItem>
            <MenuItem value={"FTL"}>Fort Lauderdale</MenuItem>
            <MenuItem value={"FTM"}>Fort Myers</MenuItem>
            <MenuItem value={"GRE"}>Greensboro</MenuItem>
            <MenuItem value={"GCS"}>Guardian Connect</MenuItem>
            <MenuItem value={"GUL"}>Gulf/Pensacola</MenuItem>
            <MenuItem value={"JAX"}>Jacksonville</MenuItem>
            <MenuItem value={"LAF"}>Lafayette</MenuItem>
            <MenuItem value={"KNX"}>Knoxville</MenuItem>
            <MenuItem value={"NAS"}>Nashville</MenuItem>
            <MenuItem value={"PES"}>Petro Solutions</MenuItem>
            <MenuItem value={"RAL"}>Raleigh</MenuItem>
            <MenuItem value={"SAN"}>Sanford</MenuItem>
            <MenuItem value={"SAV"}>Savannah</MenuItem>
            <MenuItem value={"SUB"}>Sub-Contractor (Other)</MenuItem>
            <MenuItem value={"TAL"}>Tallahassee</MenuItem>
            <MenuItem value={"TAM"}>Tampa</MenuItem>
          </Select> */}
        </FormControl>

        <TextField
          sx={{ m: 3 }}
          required
          id="outlined-required"
          label="Enter GP Ticket #"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleGpticket}
        />

        <TextField
          sx={{ m: 3 }}
          required
          id="outlined-required"
          label="Enter GC Ticket #"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleAtl}
        />

        <TextField
          sx={{ m: 3 }}
          required
          id="outlined-required"
          label="Enter FM Ticket #"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleFmticket}
        />
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
