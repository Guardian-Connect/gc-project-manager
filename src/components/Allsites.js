import React, { useState, useEffect } from "react";
import SendIcon from "@mui/icons-material/Send";
import CheckIcon from "@mui/icons-material/Check";
import { useAlert } from "react-alert";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
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

const Allsites = ({ addSite, addEmail, createDisp }) => {
  const [loading, setLoading] = React.useState(false);
  const [gvr_id, setGvr_id] = useState(0);
  const [gp_cust, setGp_cust] = useState("");
  const [cus_name, setCus_name] = useState("");
  const [site_address, setSite_address] = useState("");
  const [cust_gp, setCust_gp] = useState("");
  // const [rrs, setRrs] = useState(0);
  const [cus_email1, setCus_email1] = useState("");
  const [cus_email2, setCus_email2] = useState("");
  const [cus_email3, setCus_email3] = useState("");
  const [cus_email4, setCus_email4] = useState("");
  const [cus_email5, setCus_email5] = useState("");
  const [cus_email6, setCus_email6] = useState("");
  const [contract, setContract] = useState("");
  const [custAddId, setCustAddId] = useState("N/A");
  const [rrs, setRrs] = useState("");
  const alert = useAlert();
  const useStyles = makeStyles((theme) => ({
    formControl: {
      minWidth: 226,
    },
  }));
  const classes = useStyles();

  const handleTextChangeCustAddId = (e) => {
    console.log(e.target.value);
    setCustAddId(e.target.value);
  };
  const handleTextChangeGvr = (e) => {
    setGvr_id(e.target.value);
  };

  const handleTextChangeGp = (e) => {
    setGp_cust(e.target.value);
  };

  const handleTextChangeCus = (e) => {
    setCus_name(e.target.value);
  };

  const handleTextChangeRrs = (e) => {
    setRrs(e.target.value);
  };

  const handleTextChangeEmail1 = (e) => {
    setCus_email1(e.target.value);
  };

  const handleTextChangeEmail2 = (e) => {
    setCus_email2(e.target.value);
  };
  const handleTextChangeEmail3 = (e) => {
    setCus_email3(e.target.value);
  };

  const handleTextChangeEmail4 = (e) => {
    setCus_email4(e.target.value);
  };

  const handleTextChangeEmail5 = (e) => {
    setCus_email5(e.target.value);
  };
  const handleTextChangeEmail6 = (e) => {
    setCus_email6(e.target.value);
  };

  const handleTextChangeSite = (e) => {
    setSite_address(e.target.value);
  };

  const handleContract = (e) => {
    setContract(e.target.value);
  };

  const handleRrs = (e) => {
    setRrs(e.target.value);
  };
  const reload = () => {
    setTimeout(function () {
      window.location.reload();
    }, 5000);
  };

  const addData = (
    gvr_id,
    gp_cust,
    cus_name,
    site_address,
    contract,
    cus_email1,
    cus_email2,
    rrs,
    custAddId
  ) => {
    setLoading(true);
    console.log(
      gvr_id,
      gp_cust,
      cus_name,
      site_address,
      contract,
      cus_email1,
      cus_email2,
      rrs,
      custAddId
    );
    addSite(
      gvr_id,
      gp_cust,
      cus_name,
      site_address,
      contract,
      cus_email1,
      cus_email2,
      rrs,
      custAddId
    ).then((res) => {
      alert.show(res);

      reload();
    });
  };

  return (
    <div className="app">
      <Box
        sx={{
          // display: "flex",
          // flexDirection: "row",
          p: 1,
          ml: -30,
          width: "85%",
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        <Typography sx={{ textAlign: "center" }}>Site DB</Typography>

        {/* <div className="spaceform"> */}
        <TextField
          sx={{ m: 1 }}
          required
          id="outlined-required"
          label="Enter GVR ID"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleTextChangeGvr}
        />

        <TextField
          sx={{ m: 1 }}
          required
          id="outlined-required"
          label="Enter GP Customer Number"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleTextChangeGp}
        />

        <TextField
          sx={{ m: 1 }}
          required
          id="outlined-required"
          label="Enter Customer Address ID"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleTextChangeCustAddId}
        />

        <TextField
          sx={{ m: 1 }}
          required
          id="outlined-required"
          label="Enter Customer Name"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleTextChangeCus}
        />

        <TextField
          sx={{ m: 1 }}
          required
          id="outlined-required"
          label="Enter Site Address"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleTextChangeSite}
        />

        <TextField
          sx={{ m: 1 }}
          required
          id="outlined-required"
          label="Enter Job Costs Contract #"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleContract}
        />
        <TextField
          sx={{ m: 1 }}
          required
          id="outlined-required"
          label="Enter Primary Contact Name"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleTextChangeEmail1}
        />
        <TextField
          sx={{ m: 1 }}
          required
          id="outlined-required"
          label="Enter Primary Contact Email Address"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleTextChangeEmail2}
        />
        <FormControl className={classes.formControl} sx={{ m: 1 }}>
          <InputLabel>RRS Fees</InputLabel>
          <Select onChange={handleRrs}>
            <MenuItem value={"100"}>$100</MenuItem>
            <MenuItem value={"200"}>$200</MenuItem>
          </Select>
        </FormControl>

        <Box textAlign="center">
          <LoadingButton
            sx={{ m: 2, width: "25%" }}
            color="secondary"
            onClick={() => {
              addData(
                gvr_id,
                gp_cust,
                cus_name,
                site_address,
                contract,
                cus_email1,
                cus_email2,
                rrs,
                custAddId
              );
            }}
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

export default Allsites;
