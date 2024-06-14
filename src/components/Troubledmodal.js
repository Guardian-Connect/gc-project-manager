import React from "react";
import { handleDate, deleteAlert, updateTroubledDispensers } from "../api";
import {
  TextField,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { makeStyles } from "@mui/styles";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import { updateAlertTicket } from "../api";

const reload = () => {
  setTimeout(function () {
    window.location.reload();
  }, 5000);
};

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 226,
  },
}));

const Troubledmodal = ({ gctix }) => {
  const [loading, setLoading] = React.useState(false);
  const [firstDate, setFirstDate] = React.useState("");
  const [secondDate, setSecondDate] = React.useState("");
  const [firstContact, setFirstContact] = React.useState("");
  const [secondContact, setSecondContact] = React.useState("");
  const [notez, setNotez] = React.useState("");
  const [notes, setNotes] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [resoDate, setResoDate] = React.useState("");
  const classes = useStyles();

  const reload = () => {
    setTimeout(function () {
      window.location.reload();
    }, 3000);
  };

  const handleFirstContactDate = (e) => {
    setFirstDate(e.target.value);
    console.log(secondDate.length);
    if (secondDate.length <= 2) {
      console.log("adding weeks");
      addWeeks(2);
    }
    function addWeeks(weeks, date = new Date()) {
      date.setDate(date.getDate() + weeks * 7);
      let format =
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
      console.log(typeof format);
      return setSecondDate(format);
    }
  };

  const handleSecondContactDate = (e) => {
    setSecondDate(e.target.value);
  };

  const handleResoDate = (e) => {
    setResoDate(e.target.value);
  };

  const handleFirst = (e) => {
    setFirstContact(e.target.value);
  };

  const handleSecond = (e) => {
    setSecondContact(e.target.value);
  };
  const handleNotes = (e) => {
    setNotes(e.target.value);
  };

  const dateUpdate = (notez) => {
    let date = new Date();
    if (notez) {
      const test =
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
      const notes = test + " " + ":" + " " + notez;
      setNotes(notes);
      consoleTest();
    } else {
      consoleTest();
    }
  };
  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  const consoleTest = () => {
    setLoading(true);
    let id = gctix.id;
    // let date = new Date();
    // console.log(notez, "checking notez");
    // if (notez) {
    //   console.log("notez exist");
    //   const test =
    //     date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    //   const notes = test + " " + ":" + " " + notez;
    //   setNotes(notes);
    // }
    console.log("first notes check", notes);
    updateTroubledDispensers(
      id,
      firstDate,
      secondDate,
      firstContact,
      secondContact,
      notes,
      status,
      resoDate
    );
    // console.log(notes, "checking notes");
    reload();
  };

  return (
    <div className="testalertmodal">
      <FormControl sx={{ m: 2, width: 226 }}>
        <InputLabel>Status Update</InputLabel>
        <Select onChange={handleStatus}>
          {/* <MenuItem value={"Warranty Dispatch"}>Warranty Dispatch</MenuItem> */}
          <MenuItem value={"No Response"}>No Response</MenuItem>
          <MenuItem value={"Completed"}>Completed</MenuItem>
        </Select>
      </FormControl>
      <TextField
        sx={{ m: 2, width: 226 }}
        required
        id="outlined-required"
        label="Enter Resolution Date"
        placeholder="YYYY-MM-DD"
        defaultValue={handleDate(gctix.resolved_date)}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleResoDate}
      />
      <TextField
        sx={{ m: 2, width: "81%" }}
        required
        id="outlined-required"
        label="Enter Site Name"
        defaultValue={gctix.s_name}
        InputLabelProps={{
          shrink: true,
        }}
        // onChange={handleTextChangeSite}
      />
      <TextField
        sx={{ m: 2 }}
        required
        id="outlined-required"
        label="Enter GVR ID"
        defaultValue={gctix.gvr_id}
        InputLabelProps={{
          shrink: true,
        }}
        // onChange={handleTextChangeGvr}
      />
      <TextField
        sx={{ m: 2 }}
        required
        id="outlined-required"
        label="Warranty GVR ID"
        defaultValue={gctix.warr_gvr_id}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        sx={{ m: 2 }}
        required
        id="outlined-required"
        label="Alert Resolved Date"
        defaultValue={handleDate(gctix.date)}
        InputLabelProps={{
          shrink: true,
        }}
        // onChange={console.log("Just a display field")}
      />
      <TextField
        sx={{ m: 2 }}
        required
        id="outlined-required"
        label="Address ID Copy"
        defaultValue={gctix.add_id}
        InputLabelProps={{
          shrink: true,
        }}
        // onChange={console.log("Can't Change This Cause It Does NOTHING")}
      />
      <TextField
        sx={{ m: 2 }}
        required
        id="outlined-required"
        label="Enter GC Ticket"
        defaultValue={gctix.ticket_number}
        InputLabelProps={{
          shrink: true,
        }}
        // onChange={handleTextChangeGCTicket}
      />
      <TextField
        sx={{ m: 2 }}
        required
        id="outlined-required"
        label="Enter Fueling Point Affected"
        defaultValue={gctix.fueling_position}
        InputLabelProps={{
          shrink: true,
        }}
        // onChange={handleTextChangeFp}
      />
      <TextField
        sx={{ m: 2, width: 226 }}
        required
        id="outlined-required"
        label="Enter First Contact Date"
        placeholder="YYYY-MM-DD"
        defaultValue={handleDate(gctix.date_notified)}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleFirstContactDate}
      />
      <FormControl className={classes.formControl} sx={{ m: 2 }}>
        <InputLabel>Enter Contact Type</InputLabel>
        <Select onChange={handleFirst}>
          <MenuItem value={"Outlook Email"}>Outlook</MenuItem>
          <MenuItem value={"GCD Email"}>GCD Email</MenuItem>
          <MenuItem value={"FM Work Order"}>FM Work Order</MenuItem>
        </Select>
      </FormControl>
      <TextField
        sx={{ m: 2, width: 226 }}
        required
        id="outlined-required"
        label="Enter Next Contact Date"
        placeholder="YYYY-MM-DD"
        defaultValue={handleDate(gctix.next_date)}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleSecondContactDate}
      />
      <FormControl className={classes.formControl} sx={{ m: 2 }}>
        <InputLabel>Enter Second Contact Type</InputLabel>
        <Select onChange={handleSecond}>
          <MenuItem value={"Outlook Email"}>Outlook</MenuItem>
          <MenuItem value={"GCD Email"}>GCD Email</MenuItem>
          <MenuItem value={"FM Work Order"}>FM Work Order</MenuItem>
        </Select>
      </FormControl>
      <TextField
        sx={{ width: "83%", m: 1 }}
        required
        id="outlined-required"
        label="Enter Notes"
        defaultValue={gctix.notes}
        InputLabelProps={{
          shrink: true,
        }}
        fullWidth
        multiline
        rows={6}
        onChange={handleNotes}
      />

      <LoadingButton
        sx={{ m: 2, width: "82%" }}
        color="secondary"
        onClick={dateUpdate}
        loading={loading}
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="contained"
      >
        Update
      </LoadingButton>
    </div>
  );
};

export default Troubledmodal;
