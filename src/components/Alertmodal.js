import React from "react";
import {
  handleDateTwo as handleDate,
  deleteAlert,
  createTroubledDisp,
} from "../api";
import {
  TextField,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  Typography,
} from "@mui/material";
import { useAlert } from "react-alert";
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

const Alertmodal = ({ gctix }) => {
  const [loading, setLoading] = React.useState(false);
  const [majorsrrs, setMajorsRRS] = React.useState(false);
  const [parkers, setParkersRRS] = React.useState(false);
  const [others, setOthersRRS] = React.useState(false);
  const [confirmation, setConfirmation] = React.useState("");
  const [sr, setSR] = React.useState("");
  const [gpticket, setGPTicket] = React.useState("");
  const [fp, setFP] = React.useState("");
  const [gc, setGCTicket] = React.useState("");
  const [site, setSite] = React.useState("");
  const [asc, setAsc] = React.useState("");
  const [gvr, setGvr] = React.useState("");
  const [error, setError] = React.useState("");
  const classes = useStyles();
  const alert = useAlert();
  const consoleTest = () => {
    // console.log(asc.length, "asc");
    if (asc.length === 0) {
      setError("ASC Number Needs To Be Filled Out");
    } else if (gpticket.length === 0) {
      setError("GP Ticket Number Needs To Be Filled Out");
    } else {
      let id = gctix.id;
      setLoading(true);
      updateAlertTicket(
        id,
        asc,
        confirmation,
        sr,
        gpticket,
        fp,
        gc,
        site,
        gvr
      ).then((res) => {
        console.log(res);
        if (res.message === "Update Successful") {
          alert.show("Updated!");
        } else {
          alert.show("An Error Has Occured");
        }
      });
      reload();
    }
  };

  const handleTextChangeSite = (e) => {
    setSite(e.target.value);
  };

  const handleTextChangeAsc = (e) => {
    setAsc(e.target.value);
  };

  const handleTextChangeGvr = (e) => {
    setGvr(e.target.value);
  };

  const handleTextChangeGCTicket = (e) => {
    setGCTicket(e.target.value);
  };

  const handleTextChangeFp = (e) => {
    setFP(e.target.value);
  };

  const handleTextChangeGPTicket = (e) => {
    setGPTicket(e.target.value);
  };

  const handleTextChangeSR = (e) => {
    setSR(e.target.value);
  };

  const handleTextChangeConfirmation = (e) => {
    setConfirmation(e.target.value);
  };

  const handleTextChangeOtherRRS = (e) => {
    setOthersRRS(e.target.value);
  };

  const handleTextChangeMajorsRRS = (e) => {
    setMajorsRRS(e.target.value);
  };

  const handleTextChangeParkersRRS = (e) => {
    setParkersRRS(e.target.value);
  };

  const handleDelete = () => {
    let id = gctix.id;
    setLoading(true);
    deleteAlert(id);
    reload();
  };

  const handleTrouble = () => {
    let id = gctix.id;
    setLoading(true);
    createTroubledDisp(id);
    reload();
  };

  return (
    <div className="testalertmodal">
      <LoadingButton
        sx={{ m: 2, width: "41%" }}
        color="secondary"
        onClick={handleTrouble}
        loading={loading}
        loadingPosition="start"
        variant="contained"
        startIcon={<AutoFixHighIcon />}
      >
        Troubled
      </LoadingButton>
      <LoadingButton
        sx={{ m: 2, width: "41%" }}
        color="secondary"
        onClick={handleDelete}
        loading={loading}
        loadingPosition="start"
        variant="contained"
        startIcon={<DeleteForeverIcon />}
      >
        Delete
      </LoadingButton>
      <Typography variant="h5" component="div" sx={{ ml: 3, color: "red" }}>
        {error}
      </Typography>
      <TextField
        sx={{ m: 2, width: "81%" }}
        required
        id="outlined-required"
        label="Enter Site Name"
        defaultValue={gctix.s_name}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleTextChangeSite}
      />
      <TextField
        sx={{ m: 2, width: "81%" }}
        required
        id="outlined-required"
        label="Enter ASC Number"
        defaultValue={gctix.asc_number}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleTextChangeAsc}
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
        onChange={handleTextChangeGvr}
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
        onChange={handleTextChangeGCTicket}
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
        onChange={handleTextChangeFp}
      />
      <TextField
        sx={{ m: 2 }}
        required
        id="outlined-required"
        label="Enter GP Ticket Number"
        defaultValue={gctix.gp_ticket}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleTextChangeGPTicket}
      />
      <TextField
        sx={{ m: 2 }}
        required
        id="outlined-required"
        label="Enter SR #"
        defaultValue={gctix.sr_number}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleTextChangeSR}
      />{" "}
      <TextField
        sx={{ m: 2 }}
        required
        id="outlined-required"
        label="Enter Confirmation Number"
        defaultValue={gctix.confirmation_number}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleTextChangeConfirmation}
      />{" "}
      {/* <FormControl className={classes.formControl} sx={{ m: 2 }}>
        <InputLabel>Majors RRS?</InputLabel>
        <Select onChange={handleTextChangeMajorsRRS}>
          <MenuItem value={true}>Yes</MenuItem>
          <MenuItem value={false}>No</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl} sx={{ m: 2 }}>
        <InputLabel>Parkers RRS?</InputLabel>
        <Select onChange={handleTextChangeParkersRRS}>
          <MenuItem value={true}>Yes</MenuItem>
          <MenuItem value={false}>No</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl} sx={{ m: 2 }}>
        <InputLabel>Other RRS?</InputLabel>
        <Select onChange={handleTextChangeOtherRRS}>
          <MenuItem value={"100"}>$100</MenuItem>
          <MenuItem value={"200"}>$200</MenuItem>
          <MenuItem value={false}>No</MenuItem>
        </Select>
      </FormControl> */}
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
};

export default Alertmodal;
