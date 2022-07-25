import React, { useState, useEffect } from "react";
import SendIcon from "@mui/icons-material/Send";
import CheckIcon from "@mui/icons-material/Check";
import {
  Typography,
  MenuItem,
  Stack,
  Menu,
  Button,
  TextField,
  Alert,
  Box,
} from "@mui/material";

const Allsites = ({ addSite, addEmail, createDisp }) => {
  const [gvr_id, setGvr_id] = useState(0);
  const [gp_cust, setGp_cust] = useState("");
  const [cus_name, setCus_name] = useState("");
  const [site_address, setSite_address] = useState("");
  const [cust_gp, setCust_gp] = useState("");
  const [rrs, setRrs] = useState(0);
  const [cus_email1, setCus_email1] = useState("");
  const [cus_email2, setCus_email2] = useState("");
  const [cus_email3, setCus_email3] = useState("");
  const [cus_email4, setCus_email4] = useState("");
  const [cus_email5, setCus_email5] = useState("");
  const [cus_email6, setCus_email6] = useState("");
  const [contract, setContract] = useState("");

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

  const addData = (gvr_id, gp_cust, cus_name, site_address, contract) => {
    console.log(gvr_id, gp_cust, cus_name, site_address, contract);
    addSite(gvr_id, gp_cust, cus_name, site_address, contract).then((res) => {
      console.log(res);
      return (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
            {res}
          </Alert>
        </Stack>
      );
      // window.location.reload();
    });
    // window.location.reload();
  };

  return (
    <div className="app">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        <Box textAlign="center">
          <Typography>Site DB</Typography>
        </Box>
        <div className="spaceform">
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
          <Box textAlign="center">
            <Button
              sx={{ width: "15%" }}
              variant="contained"
              endIcon={<SendIcon />}
              onClick={() => {
                addData(gvr_id, gp_cust, cus_name, site_address, contract);
              }}
            >
              Submit
            </Button>
          </Box>
        </div>
        <Box textAlign="center">
          <Typography>Customer Contact DB</Typography>
        </Box>
        <div className="spaceform">
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
            label="Enter RRS Amount or 0"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleTextChangeRrs}
          />

          <TextField
            sx={{ m: 1 }}
            required
            id="outlined-required"
            label="Enter Primary Email Address"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleTextChangeEmail1}
          />
          <TextField
            sx={{ m: 1 }}
            required
            id="outlined-required"
            label="Enter Email Address 2"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleTextChangeEmail2}
          />

          <TextField
            sx={{ m: 1 }}
            required
            id="outlined-required"
            label="Enter Email Address 3"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleTextChangeEmail3}
          />

          <TextField
            sx={{ m: 1 }}
            required
            id="outlined-required"
            label="Enter Email Address 4"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleTextChangeEmail4}
          />

          <TextField
            sx={{ m: 1 }}
            required
            id="outlined-required"
            label="Enter Email Address 5"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleTextChangeEmail5}
          />

          <TextField
            sx={{ m: 1 }}
            required
            id="outlined-required"
            label="Enter Email Address 6"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleTextChangeEmail6}
          />
          <Box sx={{ textAlign: "center" }}>
            <Button
              sx={{ width: "15%" }}
              variant="contained"
              endIcon={<SendIcon />}
              onClick={() => {
                addEmail(
                  gp_cust,
                  cus_name,
                  rrs,
                  cus_email1,
                  cus_email2,
                  cus_email3,
                  cus_email4,
                  cus_email5,
                  cus_email6
                ).then((response) => {
                  window.location.reload();
                });
              }}
            >
              Submit
            </Button>
          </Box>
        </div>
      </Box>
    </div>
  );
};

export default Allsites;
