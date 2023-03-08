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

const Pcntracker = ({ addTicket }) => {
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
          <Typography>PCN Alert Tracker</Typography>
        </Box>
        <TextField
          sx={{ m: 1, ml: 4 }}
          required
          id="outlined-required"
          label="Enter GVR ID"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleTextChangeGvr}
        />

        <TextField
          sx={{ m: 1, ml: 4 }}
          required
          id="outlined-required"
          label="Enter GP Customer Number"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleTextChangeGp}
        />
        <FormControl className={classes.formControl} sx={{ m: 1, ml: 4 }}>
          <InputLabel>Dispatch Type</InputLabel>
          <Select onChange={handleDispatch}>
            <MenuItem value={"PCN Error"}>PCN Error</MenuItem>
          </Select>
        </FormControl>
        <TextField
          sx={{ m: 1, ml: 4 }}
          required
          id="outlined-required"
          label="Enter FM Ticket #"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleFmticket}
        />
        <TextField
          sx={{ m: 1, ml: 4 }}
          required
          id="outlined-required"
          label="Enter Fueling Point # Affected"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleFueling}
        />

        <FormControl className={classes.formControl} sx={{ m: 1, ml: 4 }}>
          <InputLabel>Branch</InputLabel>
          <Branches handleBrach={handleBranch} />
        </FormControl>

        <TextField
          sx={{ m: 1, ml: 4 }}
          required
          id="outlined-required"
          label="Enter GP Ticket #"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleGpticket}
        />

        <TextField
          sx={{ m: 1, ml: 4 }}
          required
          id="outlined-required"
          label="Enter GC Ticket #"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleAtl}
        />

        <FormControl className={classes.formControl} sx={{ m: 1, ml: 4 }}>
          <InputLabel>Warranty Status</InputLabel>
          <Select onChange={handleWarranty}>
            <MenuItem value={"In Warranty"}>In Warranty</MenuItem>
            <MenuItem value={"Out of Warranty"}>Out of Warranty</MenuItem>
          </Select>
        </FormControl>

        <TextField
          sx={{ width: "83%", m: 1, ml: 4 }}
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
            sx={{ m: 2, width: "10%" }}
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

export default Pcntracker;
