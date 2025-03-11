import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";
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
import { makeStyles } from "@mui/styles";

const Allsites = ({ addSite, addEmail, createDisp, setHeader }) => {
  const [loading, setLoading] = React.useState(false);
  const [gvr_id, setGvr_id] = useState(0);
  const [gp_cust, setGp_cust] = useState("");
  const [cus_name, setCus_name] = useState("");
  const [site_address, setSite_address] = useState("");
  const [site_city, setSite_city] = useState("");
  const [site_state, setSite_state] = useState("");
  const [site_zip, setSite_zip] = useState("");
  const [cus_email1, setCus_email1] = useState("");
  const [cus_email2, setCus_email2] = useState("");
  const [contract, setContract] = useState("");
  const [custAddId, setCustAddId] = useState("N/A");
  const [rrs, setRrs] = useState("");
  const [contractor, setContractor] = useState("Guardian");
  const alert = useAlert();
  const useStyles = makeStyles((theme) => ({
    formControl: {
      minWidth: 226,
    },
  }));

  useEffect(async () => {
    setHeader("Site Entry");
  }, []);

  const classes = useStyles();

  const handleTextChangeCustAddId = (e) => {
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

  const handleTextChangeEmail1 = (e) => {
    setCus_email1(e.target.value);
  };

  const handleTextChangeEmail2 = (e) => {
    setCus_email2(e.target.value);
  };

  const handleTextChangeSiteAddress = (e) => {
    setSite_address(e.target.value);
  };

  const handleTextChangeSiteCity = (e) => {
    setSite_city(e.target.value);
  };

  const handleTextChangeSiteState = (e) => {
    setSite_state(e.target.value);
  };

  const handleTextChangeSiteZip = (e) => {
    setSite_zip(e.target.value);
  };

  const handleContract = (e) => {
    setContract(e.target.value);
  };

  const handleRrs = (e) => {
    setRrs(e.target.value);
  };

  const handleContractor = (e) => {
    setContractor(e.target.value);
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
    site_city,
    site_state,
    site_zip,
    contract,
    cus_email1,
    cus_email2,
    rrs,
    custAddId,
    contractor
  ) => {
    setLoading(true);
    console.log(
      gvr_id,
      gp_cust,
      cus_name,
      site_address,
      site_city,
      site_state,
      site_zip,
      contract,
      cus_email1,
      cus_email2,
      rrs,
      custAddId,
      contractor
    );
    addSite(
      gvr_id,
      gp_cust,
      cus_name,
      site_address,
      site_city,
      site_state,
      site_zip,
      contract,
      cus_email1,
      cus_email2,
      rrs,
      custAddId,
      contractor
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
          className={classes.formControl}
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
          className={classes.formControl}
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
          className={classes.formControl}
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
          className={classes.formControl}
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
          className={classes.formControl}
          sx={{ m: 1 }}
          required
          id="outlined-required"
          label="Enter Site Address"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleTextChangeSiteAddress}
        />

        <TextField
          className={classes.formControl}
          sx={{ m: 1 }}
          required
          id="outlined-required"
          label="Enter Site City"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleTextChangeSiteCity}
        />

        <TextField
          className={classes.formControl}
          sx={{ m: 1 }}
          required
          id="outlined-required"
          label="Enter Site State"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleTextChangeSiteState}
        />

        <TextField
          className={classes.formControl}
          sx={{ m: 1 }}
          required
          id="outlined-required"
          label="Enter Site Zip"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleTextChangeSiteZip}
        />

        <TextField
          className={classes.formControl}
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
          className={classes.formControl}
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
          className={classes.formControl}
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
            <MenuItem value={"JC-0"}>Job Cost</MenuItem>
            <MenuItem value={"Free Trial-P"}>Free Trial</MenuItem>
            <MenuItem value={"100"}>$100</MenuItem>
            <MenuItem value={"Plus"}>Plus</MenuItem>
            <MenuItem value={"Premium"}>Premium</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl} sx={{ m: 1 }}>
          <InputLabel>Originating Contract</InputLabel>
          <Select onChange={handleContractor}>
            <MenuItem value={"Guardian"}>Guardian Connect</MenuItem>
            <MenuItem value={"Nexus"}>Nexus</MenuItem>
            <MenuItem value={"Simard"}>Simard</MenuItem>
          </Select>
        </FormControl>

        <Box textAlign="center">
          <LoadingButton
            sx={{ m: 1, width: "25%" }}
            color="secondary"
            onClick={() => {
              addData(
                gvr_id,
                gp_cust,
                cus_name,
                site_address,
                site_city,
                site_state,
                site_zip,
                contract,
                cus_email1,
                cus_email2,
                rrs,
                custAddId,
                contractor
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
