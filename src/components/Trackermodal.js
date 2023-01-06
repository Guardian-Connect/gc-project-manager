import React from "react";
import { handleDate, handleDateTwo } from "../api";
import {
  TextField,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { updateTicket } from "../api";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import { useAlert } from "react-alert";
import Branches from "./Branches";
const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 226,
  },
}));
const Trackermodal = ({ gctix }) => {
  const [date, setdate] = React.useState("");
  const [dispatch_type, setdispatch_type] = React.useState("");
  const [fm_ticket, setfm_ticket] = React.useState("");
  const [fp, setfp] = React.useState("");
  const [gp, setgp] = React.useState("");
  const [gp_ticket, setgp_ticket] = React.useState("");
  const [grade, setgrade] = React.useState("");
  const [gvr_id, setgvr_id] = React.useState(0);
  const [location, setlocation] = React.useState("");
  const [notes, setnotes] = React.useState("");
  const [updateNotes, setUpdateNotes] = React.useState("");
  const [sb, setsb] = React.useState("");
  const [warranty_status, setwarranty_status] = React.useState("");
  const [atl_po, setatl_po] = React.useState("");
  const [status, setstatus] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const alert = useAlert();
  const classes = useStyles();
  // React.useEffect(() => {
  //   setdate(handleDateTwo(gctix.date));
  //   setdispatch_type(gctix.dispatch_type);
  //   setfm_ticket(gctix.fm_ticket);
  //   setfp(gctix.setfp);
  //   setgp(gctix.setgp);
  //   setgp_ticket(gctix.setgp_ticket);
  //   setgrade(gctix.setgrade);
  //   setgvr_id(gctix.gvr_id);
  //   setid(gctix.id);
  //   setlocation(gctix.setlocation);
  //   setnotes(gctix.setnotes);
  //   setsb(gctix.setsb);
  //   setwarranty_status(gctix.setwarranty_status);
  // }, []);

  const reload = () => {
    setTimeout(function () {
      window.location.reload();
    }, 5000);
  };

  const consoleTest = () => {
    let id = gctix.id;
    setLoading(true);
    console.log(sb);
    updateTicket(
      date,
      dispatch_type,
      fm_ticket,
      fp,
      gp,
      gp_ticket,
      grade,
      gvr_id,
      id,
      location,
      updateNotes,
      sb,
      warranty_status,
      atl_po,
      status
    ).then((res) => {
      if (res.message === "Update Successful") {
        alert.show("Updated!");
      } else {
        alert.show("An Error Has Occured");
      }
    });
    reload();
  };

  const handleTextChangeStatus = (e) => {
    setstatus(e.target.value);
  };

  const handleTextChangeNotes = (e) => {
    setUpdateNotes(e.target.value);
  };

  const handleTextChangeAtl = (e) => {
    setatl_po(e.target.value);
  };

  const handleTextChangeFp = (e) => {
    setfp(e.target.value);
  };

  const handleTextChangeDispatch = (e) => {
    setdispatch_type(e.target.value);
  };

  const handleTextChangeDate = (e) => {
    setdate(e.target.value);
  };

  const handleTextChangeGvr = (e) => {
    setgvr_id(e.target.value);
  };

  const handleTextChangeFm = (e) => {
    setfm_ticket(e.target.value);
  };

  const handleTextChangeGpTicket = (e) => {
    setgp_ticket(e.target.value);
  };
  const handleTextChangeLocation = (e) => {
    setlocation(e.target.value);
  };

  const handleBranch = (e) => {
    setsb(e.target.value);
  };

  return (
    <div>
      <TextField
        sx={{ m: 2 }}
        required
        id="outlined-required"
        label="Enter GVR ID"
        defaultValue={gctix.gvr_id}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleTextChangeGvr}
      />
      <TextField
        sx={{ m: 2 }}
        required
        id="outlined-required"
        label="Enter GP Ticket"
        defaultValue={gctix.gp_ticket}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleTextChangeGpTicket}
      />
      <TextField
        sx={{ m: 2 }}
        required
        id="outlined-required"
        label="Enter FM Ticket"
        defaultValue={gctix.fm_ticket}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleTextChangeFm}
      />
      <TextField
        sx={{ m: 2 }}
        required
        id="outlined-required"
        label="Enter Site Name"
        defaultValue={gctix.location}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleTextChangeLocation}
      />
      <TextField
        sx={{ m: 2 }}
        required
        id="outlined-required"
        label="Enter Site Name"
        placeholder="YYYY-MM-DD"
        defaultValue={handleDate(gctix.date)}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleTextChangeDate}
      />
      <FormControl className={classes.formControl} sx={{ m: 2 }}>
        <InputLabel>Dispatch Type - {gctix.dispatch_type}</InputLabel>
        <Select onChange={handleTextChangeDispatch}>
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
      <TextField
        sx={{ m: 2 }}
        required
        id="outlined-required"
        label="Enter Fueling Point Affected"
        defaultValue={gctix.fp}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleTextChangeFp}
      />
      <TextField
        sx={{ m: 2 }}
        required
        id="outlined-required"
        label="Enter ATL PO#"
        defaultValue={gctix.atl_po}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleTextChangeAtl}
      />
      <FormControl className={classes.formControl} sx={{ m: 2 }}>
        <InputLabel>Branch - {gctix.sb}</InputLabel>
        <Branches handleBranch={handleBranch} />
      </FormControl>
      <FormControl className={classes.formControl} sx={{ m: 2 }}>
        <InputLabel>Status - {gctix.status}</InputLabel>
        <Select onChange={handleTextChangeStatus}>
          <MenuItem value={"Open"}>Open</MenuItem>
          <MenuItem value={"Closed"}>Closed</MenuItem>
        </Select>
      </FormControl>
      <TextField
        sx={{ m: 2, width: "81%" }}
        required
        id="outlined-required"
        label="Enter Notes"
        defaultValue={gctix.notes}
        InputLabelProps={{
          shrink: true,
        }}
        multiline
        rows={6}
        onChange={handleTextChangeNotes}
      />

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
    </div>
  );
  // let answer = id
  // console.log(id);
};

export default Trackermodal;
