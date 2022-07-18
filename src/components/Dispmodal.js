import React, { useEffect } from "react";
import Loader from "react-loader-spinner";
import { updateDisp } from "../api";
import logo from "../assests/logo.gif";
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
const moment = require("moment");
const Dispmodal = ({ site }) => {
  useEffect(() => {
    console.log(site.warranty, site.activation);
    setGvr_id(site.gvr_id);
    setGp_cust(site.gp_cust);
    setContract(site.contract);
    setAddress(site.site_address);
    setTotaldisp(site.totaldisp);
    setActivation(site.activation);
    setWarranty(site.warranty);
    // setRenewal(site.renewal);
    setPosvn(site.posvn);
    setPosmain(site.posmain);
    setPosreg1(site.posreg1);
    setPosreg2(site.posreg2);
    setPosreg3(site.posreg3);
    setAtgmodel(site.atgmodel);
    setDisp1(site.disp1);
    setGrades1(site.grades1);
    setDisp2(site.disp2);
    setGrades2(site.grades2);
    setDisp3(site.disp3);
    setGrades3(site.grades3);
    setDisp4(site.disp4);
    setGrades4(site.grades4);
    setDisp5(site.disp5);
    setGrades5(site.grades5);
    setDisp6(site.disp6);
    setGrades6(site.grades6);
    setDisp7(site.disp7);
    setGrades7(site.grades7);
    setDisp8(site.disp8);
    setGrades8(site.grades8);
    setDisp9(site.disp9);
    setGrades9(site.grades9);
    setDisp10(site.disp10);
    setGrades10(site.grades10);
  }, []);
  let date = moment.utc().format("yyyy-MM-DD");
  const [gvr_id, setGvr_id] = React.useState(0);
  const [gp_cust, setGp_cust] = React.useState("");
  const [contract, setContract] = React.useState("");
  const [site_address, setAddress] = React.useState("");
  const [totaldisp, setTotaldisp] = React.useState("");
  const [activation_date, setActivation] = React.useState("");
  const [warranty_date, setWarranty] = React.useState("");
  const [posvn, setPosvn] = React.useState("");
  const [posmain, setPosmain] = React.useState("");
  const [posreg1, setPosreg1] = React.useState("");
  const [posreg2, setPosreg2] = React.useState("");
  const [posreg3, setPosreg3] = React.useState("");
  const [atgmodel, setAtgmodel] = React.useState("");
  const [disp1, setDisp1] = React.useState("");
  const [grades1, setGrades1] = React.useState("");
  const [disp2, setDisp2] = React.useState("");
  const [grades2, setGrades2] = React.useState("");
  const [disp3, setDisp3] = React.useState("");
  const [grades3, setGrades3] = React.useState("");
  const [disp4, setDisp4] = React.useState("");
  const [grades4, setGrades4] = React.useState("");
  const [disp5, setDisp5] = React.useState("");
  const [grades5, setGrades5] = React.useState("");
  const [disp6, setDisp6] = React.useState("");
  const [grades6, setGrades6] = React.useState("");
  const [disp7, setDisp7] = React.useState("");
  const [grades7, setGrades7] = React.useState("");
  const [disp8, setDisp8] = React.useState("");
  const [grades8, setGrades8] = React.useState("");
  const [disp9, setDisp9] = React.useState("");
  const [grades9, setGrades9] = React.useState("");
  const [disp10, setDisp10] = React.useState("");
  const [grades10, setGrades10] = React.useState("");
  const [renewal, setRenewal] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const useStyles = makeStyles((theme) => ({
    formControl: {
      minWidth: 226,
    },
  }));
  const classes = useStyles();

  function handleDate(d) {
    let date = moment.utc(d).format("yyyy-MM-DD");
    return date;
  }

  const handleGrades10 = (e) => {
    setGrades10(e.target.value);
  };

  const handleDisp10 = (e) => {
    setDisp10("19/20" + " " + e.target.value);
  };

  const handleGrades9 = (e) => {
    setGrades9(e.target.value);
  };

  const handleDisp9 = (e) => {
    setDisp9("17/18" + " " + e.target.value);
  };

  const handleGrades8 = (e) => {
    setGrades8(e.target.value);
  };

  const handleDisp8 = (e) => {
    setDisp8("15/16" + " " + e.target.value);
  };

  const handleGrades7 = (e) => {
    setGrades7(e.target.value);
  };

  const handleDisp7 = (e) => {
    setDisp7("13/14" + " " + e.target.value);
  };

  const handleGrades6 = (e) => {
    setGrades6(e.target.value);
  };

  const handleDisp6 = (e) => {
    setDisp6("11/12" + " " + e.target.value);
  };

  const handleGrades5 = (e) => {
    setGrades5(e.target.value);
  };

  const handleDisp5 = (e) => {
    setDisp5("9/10" + " " + e.target.value);
  };

  const handleGrades4 = (e) => {
    setGrades4(e.target.value);
  };

  const handleDisp4 = (e) => {
    setDisp4("7/8" + " " + e.target.value);
  };

  const handleGrades3 = (e) => {
    setGrades3(e.target.value);
  };

  const handleDisp3 = (e) => {
    setDisp3("5/6" + " " + e.target.value);
  };

  const handleGrades2 = (e) => {
    setGrades2(e.target.value);
  };

  const handleDisp2 = (e) => {
    setDisp2("3/4" + " " + e.target.value);
  };

  const handleGrades1 = (e) => {
    setGrades1(e.target.value);
  };

  const handleDisp1 = (e) => {
    setDisp1("1/2" + " " + e.target.value);
  };

  const handleAtgmodel = (e) => {
    setAtgmodel(e.target.value);
  };

  const handlePosreg3 = (e) => {
    setPosreg3(e.target.value);
  };

  const handlePosreg2 = (e) => {
    setPosreg2(e.target.value);
  };

  const handlePosreg1 = (e) => {
    setPosreg1(e.target.value);
  };

  const handlePosmain = (e) => {
    setPosmain(e.target.value);
  };

  const handlePosvn = (e) => {
    setPosvn(e.target.value);
  };

  const handleWarranty = (e) => {
    setWarranty(handleDate(e.target.value));
  };

  const handleTotalActivationDate = (e) => {
    let split = e.target.value;
    let split2 = split.split("-");
    let split3 = Number(split2[0]) + 1;
    let remove = split2.shift();
    let combine = split2.join("-");
    let renewal_date = split3 + "-" + combine;
    setActivation(e.target.value);
    setRenewal(renewal_date);
  };

  const handleTotaldisp = (e) => {
    setTotaldisp(e.target.value);
  };

  const handleTextChangeAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleTextChangeGvr = (e) => {
    setGvr_id(e.target.value);
  };

  const handleTextChangeGp = (e) => {
    setGp_cust(e.target.value);
  };

  const handleTextChangeContract = (e) => {
    setContract(e.target.value);
  };
  const reload = () => {
    setTimeout(function () {
      window.location.reload();
    }, 5000);
  };

  const consoleTest = () => {
    let id = site.id;
    // console.log(
    //   id,
    //   gvr_id,
    //   gp_cust,
    //   contract,
    //   site_address,
    //   totaldisp,
    //   activation_date,
    //   warranty_date,
    //   renewal,
    //   posvn,
    //   posmain,
    //   posreg1,
    //   posreg2,
    //   posreg3,
    //   atgmodel,
    //   disp1,
    //   grades1,
    //   disp2,
    //   grades2,
    //   disp3,
    //   grades3,
    //   disp4,
    //   grades4,
    //   disp5,
    //   grades5,
    //   disp6,
    //   grades6,
    //   disp7,
    //   grades7,
    //   disp8,
    //   grades8,
    //   disp9,
    //   grades9,
    //   disp10,
    //   grades10
    // );
    // if (activation_date.length != 0) {
    //   console.log("firing");
    //   let split = activation_date;
    //   let split2 = split.split("-");
    //   let split3 = Number(split2[0]) + 1;
    //   let remove = split2.shift();
    //   let combine = split2.join("-");
    //   let renewal = split3 + "-" + combine;
    //   return renewal;
    // }
    // console.log(renewal);
    setLoading(true);
    updateDisp(
      id,
      gvr_id,
      gp_cust,
      contract,
      site_address,
      totaldisp,
      activation_date,
      warranty_date,
      renewal,
      posvn,
      posmain,
      posreg1,
      posreg2,
      posreg3,
      atgmodel,
      disp1,
      grades1,
      disp2,
      grades2,
      disp3,
      grades3,
      disp4,
      grades4,
      disp5,
      grades5,
      disp6,
      grades6,
      disp7,
      grades7,
      disp8,
      grades8,
      disp9,
      grades9,
      disp10,
      grades10
    );
    reload();
  };
  return (
    <>
      <div>
        <TextField
          sx={{ m: 2 }}
          required
          id="outlined-required"
          label="Enter GVR ID"
          defaultValue={site.gvr_id}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleTextChangeGvr}
        />
        <TextField
          sx={{ m: 2 }}
          required
          id="outlined-required"
          label="Enter GP Customer Number"
          defaultValue={site.gp_cust}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleTextChangeGp}
        />
        <TextField
          sx={{ m: 2 }}
          required
          id="outlined-required"
          label="Enter Contract Number"
          defaultValue={site.contract}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleTextChangeContract}
        />
        <TextField
          sx={{ m: 2 }}
          required
          id="outlined-required"
          label="Enter Site Address"
          defaultValue={site.site_address}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleTextChangeAddress}
        />
        <TextField
          sx={{ m: 2 }}
          required
          id="outlined-required"
          label="Enter Number of Dispensers"
          defaultValue={site.totaldisp}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleTotaldisp}
        />

        <TextField
          sx={{ m: 2 }}
          required
          id="outlined-required"
          label="Enter Registration Date"
          defaultValue={handleDate(site.activation)}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleTotalActivationDate}
        />

        <TextField
          sx={{ m: 2 }}
          required
          id="outlined-required"
          label="Enter Warranty Expiration Date"
          defaultValue={handleDate(site.warranty)}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleWarranty}
        />

        <TextField
          sx={{ m: 2 }}
          required
          id="outlined-required"
          label="POS Version #"
          defaultValue={site.posvn}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handlePosvn}
        />

        <TextField
          sx={{ m: 2 }}
          required
          id="outlined-required"
          label="POS EDH/Commander Console Serial #"
          defaultValue={site.posmain}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handlePosmain}
        />

        <TextField
          sx={{ m: 2 }}
          required
          id="outlined-required"
          label="Register 1 / Manager Work Station"
          defaultValue={site.posreg1}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handlePosreg1}
        />

        <TextField
          sx={{ m: 2 }}
          required
          id="outlined-required"
          label="Register 2 / Manager Work Station"
          defaultValue={site.posreg2}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handlePosreg2}
        />

        <TextField
          sx={{ m: 2 }}
          required
          id="outlined-required"
          label="Register 3 / Manager Work Station"
          defaultValue={site.posreg3}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handlePosreg3}
        />
        <TextField
          sx={{ m: 2, width: "81%" }}
          required
          id="outlined-required"
          label="ATG Mode Info"
          defaultValue={site.atgmodel}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleAtgmodel}
        />

        <TextField
          sx={{ m: 2 }}
          required
          id="outlined-required"
          label="Set Dispenser 1 Serial Number + Position"
          defaultValue={site.disp1}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleDisp1}
        />

        <FormControl className={classes.formControl} sx={{ ml: 1, mt: 2 }}>
          <InputLabel>Dispenser 1 Grades</InputLabel>
          <Select onChange={handleGrades1}>
            <MenuItem value={"Regular Mid-Grade Premium "}>
              Reg Mid Prem
            </MenuItem>
            <MenuItem value={"Regular Mid-Grade Premium Diesel"}>
              Reg Mid Prem Dsl
            </MenuItem>
            <MenuItem value={"Regular Mid-Grade Premium Non-Ethanol"}>
              Reg Mid Prem Non-Eth
            </MenuItem>
            <MenuItem value={"Diesel"}>Stand Alone Diesel</MenuItem>
          </Select>
        </FormControl>

        <TextField
          sx={{ m: 2 }}
          required
          id="outlined-required"
          label="Set Dispenser 2 Serial Number + Position"
          defaultValue={site.disp2}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleDisp2}
        />

        <FormControl className={classes.formControl} sx={{ ml: 1, mt: 2 }}>
          <InputLabel>Dispenser 2 Grades</InputLabel>
          <Select onChange={handleGrades2}>
            <MenuItem value={"Regular Mid-Grade Premium "}>
              Reg Mid Prem
            </MenuItem>
            <MenuItem value={"Regular Mid-Grade Premium Diesel"}>
              Reg Mid Prem Dsl
            </MenuItem>
            <MenuItem value={"Regular Mid-Grade Premium Non-Ethanol"}>
              Reg Mid Prem Non-Eth
            </MenuItem>
            <MenuItem value={"Diesel"}>Stand Alone Diesel</MenuItem>
          </Select>
        </FormControl>

        <TextField
          sx={{ m: 2 }}
          required
          id="outlined-required"
          label="Set Dispenser 3 Serial Number + Position"
          defaultValue={site.disp3}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleDisp3}
        />

        <FormControl className={classes.formControl} sx={{ ml: 1, mt: 2 }}>
          <InputLabel>Dispenser 3 Grades</InputLabel>
          <Select onChange={handleGrades3}>
            <MenuItem value={"Regular Mid-Grade Premium "}>
              Reg Mid Prem
            </MenuItem>
            <MenuItem value={"Regular Mid-Grade Premium Diesel"}>
              Reg Mid Prem Dsl
            </MenuItem>
            <MenuItem value={"Regular Mid-Grade Premium Non-Ethanol"}>
              Reg Mid Prem Non-Eth
            </MenuItem>
            <MenuItem value={"Diesel"}>Stand Alone Diesel</MenuItem>
          </Select>
        </FormControl>

        <TextField
          sx={{ m: 2 }}
          required
          id="outlined-required"
          label="Set Dispenser 4 Serial Number + Position"
          defaultValue={site.disp4}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleDisp4}
        />

        <FormControl className={classes.formControl} sx={{ ml: 1, mt: 2 }}>
          <InputLabel>Dispenser 4 Grades</InputLabel>
          <Select onChange={handleGrades4}>
            <MenuItem value={"Regular Mid-Grade Premium "}>
              Reg Mid Prem
            </MenuItem>
            <MenuItem value={"Regular Mid-Grade Premium Diesel"}>
              Reg Mid Prem Dsl
            </MenuItem>
            <MenuItem value={"Regular Mid-Grade Premium Non-Ethanol"}>
              Reg Mid Prem Non-Eth
            </MenuItem>
            <MenuItem value={"Diesel"}>Stand Alone Diesel</MenuItem>
          </Select>
        </FormControl>

        <TextField
          sx={{ m: 2 }}
          required
          id="outlined-required"
          label="Set Dispenser 5 Serial Number + Position"
          defaultValue={site.disp5}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleDisp5}
        />

        <FormControl className={classes.formControl} sx={{ ml: 1, mt: 2 }}>
          <InputLabel>Dispenser 5 Grades</InputLabel>
          <Select onChange={handleGrades5}>
            <MenuItem value={"Regular Mid-Grade Premium "}>
              Reg Mid Prem
            </MenuItem>
            <MenuItem value={"Regular Mid-Grade Premium Diesel"}>
              Reg Mid Prem Dsl
            </MenuItem>
            <MenuItem value={"Regular Mid-Grade Premium Non-Ethanol"}>
              Reg Mid Prem Non-Eth
            </MenuItem>
            <MenuItem value={"Diesel"}>Stand Alone Diesel</MenuItem>
          </Select>
        </FormControl>

        <TextField
          sx={{ m: 2 }}
          required
          id="outlined-required"
          label="Set Dispenser 6 Serial Number + Position"
          defaultValue={site.disp6}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleDisp6}
        />

        <FormControl className={classes.formControl} sx={{ ml: 1, mt: 2 }}>
          <InputLabel>Dispenser 6 Grades</InputLabel>
          <Select onChange={handleGrades6}>
            <MenuItem value={"Regular Mid-Grade Premium "}>
              Reg Mid Prem
            </MenuItem>
            <MenuItem value={"Regular Mid-Grade Premium Diesel"}>
              Reg Mid Prem Dsl
            </MenuItem>
            <MenuItem value={"Regular Mid-Grade Premium Non-Ethanol"}>
              Reg Mid Prem Non-Eth
            </MenuItem>
            <MenuItem value={"Diesel"}>Stand Alone Diesel</MenuItem>
          </Select>
        </FormControl>

        <TextField
          sx={{ m: 2 }}
          required
          id="outlined-required"
          label="Set Dispenser 7 Serial Number + Position"
          defaultValue={site.disp7}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleDisp7}
        />

        <FormControl className={classes.formControl} sx={{ ml: 1, mt: 2 }}>
          <InputLabel>Dispenser 7 Grades</InputLabel>
          <Select onChange={handleGrades7}>
            <MenuItem value={"Regular Mid-Grade Premium "}>
              Reg Mid Prem
            </MenuItem>
            <MenuItem value={"Regular Mid-Grade Premium Diesel"}>
              Reg Mid Prem Dsl
            </MenuItem>
            <MenuItem value={"Regular Mid-Grade Premium Non-Ethanol"}>
              Reg Mid Prem Non-Eth
            </MenuItem>
            <MenuItem value={"Diesel"}>Stand Alone Diesel</MenuItem>
          </Select>
        </FormControl>

        <TextField
          sx={{ m: 2 }}
          required
          id="outlined-required"
          label="Set Dispenser 8 Serial Number + Position"
          defaultValue={site.disp8}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleDisp8}
        />

        <FormControl className={classes.formControl} sx={{ ml: 1, mt: 2 }}>
          <InputLabel>Dispenser 8 Grades</InputLabel>
          <Select onChange={handleGrades8}>
            <MenuItem value={"Regular Mid-Grade Premium "}>
              Reg Mid Prem
            </MenuItem>
            <MenuItem value={"Regular Mid-Grade Premium Diesel"}>
              Reg Mid Prem Dsl
            </MenuItem>
            <MenuItem value={"Regular Mid-Grade Premium Non-Ethanol"}>
              Reg Mid Prem Non-Eth
            </MenuItem>
            <MenuItem value={"Diesel"}>Stand Alone Diesel</MenuItem>
          </Select>
        </FormControl>

        <TextField
          sx={{ m: 2 }}
          required
          id="outlined-required"
          label="Set Dispenser 9 Serial Number + Position"
          defaultValue={site.disp9}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleDisp9}
        />

        <FormControl className={classes.formControl} sx={{ ml: 1, mt: 2 }}>
          <InputLabel>Dispenser 9 Grades</InputLabel>
          <Select onChange={handleGrades9}>
            <MenuItem value={"Regular Mid-Grade Premium "}>
              Reg Mid Prem
            </MenuItem>
            <MenuItem value={"Regular Mid-Grade Premium Diesel"}>
              Reg Mid Prem Dsl
            </MenuItem>
            <MenuItem value={"Regular Mid-Grade Premium Non-Ethanol"}>
              Reg Mid Prem Non-Eth
            </MenuItem>
            <MenuItem value={"Diesel"}>Stand Alone Diesel</MenuItem>
          </Select>
        </FormControl>

        <TextField
          sx={{ m: 2 }}
          required
          id="outlined-required"
          label="Set Dispenser 10 Serial Number + Position"
          defaultValue={site.disp10}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleDisp10}
        />

        <FormControl className={classes.formControl} sx={{ ml: 1, mt: 2 }}>
          <InputLabel>Dispenser 10 Grades</InputLabel>
          <Select onChange={handleGrades10}>
            <MenuItem value={"Regular Mid-Grade Premium "}>
              Reg Mid Prem
            </MenuItem>
            <MenuItem value={"Regular Mid-Grade Premium Diesel"}>
              Reg Mid Prem Dsl
            </MenuItem>
            <MenuItem value={"Regular Mid-Grade Premium Non-Ethanol"}>
              Reg Mid Prem Non-Eth
            </MenuItem>
            <MenuItem value={"Diesel"}>Stand Alone Diesel</MenuItem>
          </Select>
        </FormControl>

        {/* <Button
          sx={{ m: 2, width: "82%" }}
          variant="contained"
          onClick={consoleTest}
        >
          Submit
        </Button> */}
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
    </>
  );
};

export default Dispmodal;
