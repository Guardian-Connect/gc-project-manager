import React, { useEffect } from "react";
import { updateDisp } from "../api";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import { handleDate } from "../api";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
const moment = require("moment");
const Dispmodal = ({ site }) => {
  useEffect(() => {
    setThisGuy(site.gvr_id);
    setGvr_id(site.gvr_id);
    setGp_cust(site.gp_cust);
    setContract(site.contract);
    setAddress(site.site_address);
    setTotaldisp(site.totaldisp);
    if (site.activation === null) {
      setActivation("");
    } else {
      setActivation(site.activation);
    }
    if (site.warranty === null) {
      setWarranty("");
    } else {
      setWarranty(site.warranty);
    }
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
    setQuote(site.quote);
    setNotes(site.notes);
    setModel1(site.model1);
    setModel2(site.model2);
    setModel3(site.model3);
    setModel4(site.model4);
    setModel5(site.model5);
    setModel6(site.model6);
    setModel7(site.model7);
    setModel8(site.model8);
    setModel9(site.model9);
    setModel10(site.model10);
    // setNotes(site.notes);
  }, []);
  let date = moment.utc().format("yyyy-MM-DD");
  const [gvr_id, setGvr_id] = React.useState(0);
  const [warr_gvr_id, setWarr_Gvr_id] = React.useState(0);
  const [gp_cust, setGp_cust] = React.useState("");
  const [contract, setContract] = React.useState("");
  const [site_address, setAddress] = React.useState("");
  const [totaldisp, setTotaldisp] = React.useState("");
  const [activation_date, setActivation] = React.useState("YYYY-MM-DD");
  const [warranty_date, setWarranty] = React.useState("YYYY-MM-DD");
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
  const [disp11, setDisp11] = React.useState("");
  const [grades10, setGrades10] = React.useState("");
  const [grades11, setGrades11] = React.useState("");
  const [renewal, setRenewal] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [notes, setNotes] = React.useState("X");
  const [add_id, setAdd_id] = React.useState("");
  const [contractStatus, setContractStatus] = React.useState("");
  const [quote, setQuote] = React.useState("X");
  const [vendorRevenue, setVendorRevenue] = React.useState("");
  const [branchRevenue, setBranchRevenue] = React.useState("");
  const [model1, setModel1] = React.useState("");
  const [model2, setModel2] = React.useState("");
  const [model3, setModel3] = React.useState("");
  const [model4, setModel4] = React.useState("");
  const [model5, setModel5] = React.useState("");
  const [model6, setModel6] = React.useState("");
  const [model7, setModel7] = React.useState("");
  const [model8, setModel8] = React.useState("");
  const [model9, setModel9] = React.useState("");
  const [model10, setModel10] = React.useState("");
  const [model11, setModel11] = React.useState("");
  const [grades12, setGrades12] = React.useState("");
  const [disp12, setDisp12] = React.useState("");
  const [model12, setModel12] = React.useState("");
  const [grades13, setGrades13] = React.useState("");
  const [disp13, setDisp13] = React.useState("");
  const [model13, setModel13] = React.useState("");
  const [grades14, setGrades14] = React.useState("");
  const [disp14, setDisp14] = React.useState("");
  const [model14, setModel14] = React.useState("");
  const [grades15, setGrades15] = React.useState("");
  const [disp15, setDisp15] = React.useState("");
  const [model15, setModel15] = React.useState("");
  const [grades16, setGrades16] = React.useState("");
  const [disp16, setDisp16] = React.useState("");
  const [model16, setModel16] = React.useState("");
  const [grades17, setGrades17] = React.useState("");
  const [disp17, setDisp17] = React.useState("");
  const [model17, setModel17] = React.useState("");
  const [grades18, setGrades18] = React.useState("");
  const [disp18, setDisp18] = React.useState("");
  const [model18, setModel18] = React.useState("");
  const [grades19, setGrades19] = React.useState("");
  const [disp19, setDisp19] = React.useState("");
  const [model19, setModel19] = React.useState("");
  const [grades20, setGrades20] = React.useState("");
  const [disp20, setDisp20] = React.useState("");
  const [model20, setModel20] = React.useState("");
  const [grades21, setGrades21] = React.useState("");
  const [disp21, setDisp21] = React.useState("");
  const [model21, setModel21] = React.useState("");
  const [thisGuy, setThisGuy] = React.useState(0);
  const [gcdStatus, setGcdStatus] = React.useState("");
  const [jc, setJc] = React.useState("");
  const useStyles = makeStyles((theme) => ({
    formControl: {
      minWidth: 226,
    },
  }));
  const classes = useStyles();

  const handleJc = (e) => {
    setJc(e.target.value);
  };

  const handleModel21 = (e) => {
    setModel21(e.target.value);
  };

  const handleDisp21 = (e) => {
    setDisp21("41/42" + " " + e.target.value);
  };

  const handleGrades21 = (e) => {
    setGrades21(e.target.value);
  };

  const handleModel20 = (e) => {
    setModel20(e.target.value);
  };

  const handleDisp20 = (e) => {
    setDisp20("39/40" + " " + e.target.value);
  };

  const handleGrades20 = (e) => {
    setGrades20(e.target.value);
  };

  const handleModel19 = (e) => {
    setModel19(e.target.value);
  };

  const handleDisp19 = (e) => {
    setDisp19("37/38" + " " + e.target.value);
  };

  const handleGrades19 = (e) => {
    setGrades19(e.target.value);
  };

  const handleModel18 = (e) => {
    setModel18(e.target.value);
  };

  const handleDisp18 = (e) => {
    setDisp18("35/36" + " " + e.target.value);
  };

  const handleGrades18 = (e) => {
    setGrades18(e.target.value);
  };

  const handleModel17 = (e) => {
    setModel17(e.target.value);
  };

  const handleDisp17 = (e) => {
    setDisp17("33/34" + " " + e.target.value);
  };

  const handleGrades17 = (e) => {
    setGrades17(e.target.value);
  };

  const handleModel16 = (e) => {
    setModel16(e.target.value);
  };

  const handleDisp16 = (e) => {
    setDisp16("31/32" + " " + e.target.value);
  };

  const handleGrades16 = (e) => {
    setGrades16(e.target.value);
  };

  const handleModel15 = (e) => {
    setModel15(e.target.value);
  };

  const handleDisp15 = (e) => {
    setDisp15("29/30" + " " + e.target.value);
  };

  const handleGrades15 = (e) => {
    setGrades15(e.target.value);
  };

  const handleModel14 = (e) => {
    setModel14(e.target.value);
  };

  const handleDisp14 = (e) => {
    setDisp14("27/28" + " " + e.target.value);
  };

  const handleGrades14 = (e) => {
    setGrades14(e.target.value);
  };

  const handleModel13 = (e) => {
    setModel13(e.target.value);
  };

  const handleDisp13 = (e) => {
    setDisp13("25/26" + " " + e.target.value);
  };

  const handleGrades13 = (e) => {
    setGrades13(e.target.value);
  };
  const handleModel12 = (e) => {
    setModel12(e.target.value);
  };

  const handleDisp12 = (e) => {
    setDisp12("23/24" + " " + e.target.value);
  };

  const handleGrades12 = (e) => {
    setGrades12(e.target.value);
  };
  const handleModel11 = (e) => {
    setModel11(e.target.value);
  };

  const handleDisp11 = (e) => {
    setDisp11("21/22" + " " + e.target.value);
  };

  const handleGrades11 = (e) => {
    setGrades11(e.target.value);
  };

  const handleModel1 = (e) => {
    setModel1(e.target.value);
  };

  const handleModel2 = (e) => {
    setModel2(e.target.value);
  };

  const handleModel3 = (e) => {
    setModel3(e.target.value);
  };

  const handleModel4 = (e) => {
    setModel4(e.target.value);
  };

  const handleModel5 = (e) => {
    setModel5(e.target.value);
  };

  const handleModel6 = (e) => {
    setModel6(e.target.value);
  };

  const handleModel7 = (e) => {
    setModel7(e.target.value);
  };

  const handleModel8 = (e) => {
    setModel8(e.target.value);
  };

  const handleModel9 = (e) => {
    setModel9(e.target.value);
  };

  const handleModel10 = (e) => {
    setModel10(e.target.value);
  };

  const handleNotes = (e) => {
    setNotes(e.target.value);
  };

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

  const handleGcdStatus = (e) => {
    setGcdStatus(e.target.value);
  };

  const handleWarranty = (e) => {
    setWarranty(handleDate(e.target.value));
  };

  const handleQuote = (e) => {
    if (e.target.value === "$350") {
      setBranchRevenue("$350");
      setVendorRevenue("0");
      setQuote("C");
    } else if (e.target.value === "$200") {
      setVendorRevenue("$200");
      setBranchRevenue("0");
      setQuote("C");
    } else {
      setQuote(e.target.value);
      setVendorRevenue("0");
      setBranchRevenue("0");
    }
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

  const handleTextChangeWarrGvr = (e) => {
    setWarr_Gvr_id(e.target.value);
  };

  const handleTextChangeGp = (e) => {
    setGp_cust(e.target.value);
  };

  const handleTextChangeContract = (e) => {
    setContract(e.target.value);
  };

  const handleContractStatus = (e) => {
    setContractStatus(e.target.value);
  };

  const handleAddId = (e) => {
    setAdd_id(e.target.value);
  };
  const reload = () => {
    setTimeout(function () {
      window.location.reload();
    }, 5000);
  };

  const consoleTest = () => {
    console.log(gvr_id);
    // if (branchRevenue === "$350") {
    //   vendorRevenue = null;
    //   quote = "X";
    // } else if (vendorRevenue === "$250") {
    //   branchRevenue = null;
    //   quote = "X";
    // } else if (quote === "O") {
    //   vendorRevenue = null;
    //   branchRevenue = null;
    // }
    if (notes.length === 0) {
      setNotes("X");
    }
    setLoading(true);
    updateDisp(
      thisGuy,
      gvr_id,
      gp_cust,
      contract,
      add_id,
      contractStatus,
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
      jc,
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
      grades10,
      grades11,
      disp11,
      model11,
      grades12,
      disp12,
      model12,
      grades13,
      disp13,
      model13,
      grades14,
      disp14,
      model14,
      grades15,
      disp15,
      model15,
      grades16,
      disp16,
      model16,
      grades17,
      disp17,
      model17,
      grades18,
      disp18,
      model18,
      grades19,
      disp19,
      model19,
      grades20,
      disp20,
      model20,
      grades21,
      disp21,
      model21,
      model1,
      model2,
      model3,
      model4,
      model5,
      model6,
      model7,
      model8,
      model9,
      model10,
      notes,
      quote,
      vendorRevenue,
      branchRevenue,
      gcdStatus,
      warr_gvr_id
    );
    reload();
  };
  return (
    <>
      <div className="testDispmodal">
        <TextField
          sx={{ m: 2, width: 226 }}
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
          sx={{ m: 2, width: 226 }}
          required
          id="outlined-required"
          label="Enter Warranty GVR ID"
          defaultValue={site.warr_gvr_id}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleTextChangeWarrGvr}
        />
        <TextField
          sx={{ m: 2, width: 226 }}
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
          sx={{ m: 2, width: 226 }}
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
          sx={{ m: 2, width: 226 }}
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
          sx={{ m: 2, width: 226 }}
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
          sx={{ m: 2, width: 226 }}
          required
          id="outlined-required"
          label="Enter Registration Date"
          placeholder="YYYY-MM-DD"
          defaultValue={handleDate(site.activation)}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleTotalActivationDate}
        />

        <TextField
          sx={{ m: 2, width: 226 }}
          required
          id="outlined-required"
          label="Enter Warranty Expiration Date"
          placeholder="YYYY-MM-DD"
          defaultValue={handleDate(site.warranty)}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleWarranty}
        />

        {/* <TextField
          sx={{ m: 2, width: 226 }}
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
          sx={{ m: 2, width: 226 }}
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
          sx={{ m: 2, width: 226 }}
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
          sx={{ m: 2, width: 226 }}
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
          sx={{ m: 2, width: 226 }}
          required
          id="outlined-required"
          label="Register 3 / Manager Work Station"
          defaultValue={site.posreg3}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handlePosreg3}
        /> */}
        <TextField
          sx={{ m: 2, width: 226 }}
          required
          id="outlined-required"
          label="Address ID"
          defaultValue={site.add_id}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleAddId}
        />
        <FormControl className={classes.formControl} sx={{ m: 2 }}>
          <InputLabel>Contract Status</InputLabel>
          <Select onChange={handleContractStatus}>
            <MenuItem value={"0-FREETRIAL"}>Free Trial</MenuItem>
            <MenuItem value={"1-PENDING"}>Pending</MenuItem>
            <MenuItem value={"2-MONITORING"}>Monitoring</MenuItem>
            <MenuItem value={"3-STATIC"}>Static</MenuItem>
            <MenuItem value={"4-MONITORINGREADYTOBILL"}>
              Monitoring Ready to Bill
            </MenuItem>
            <MenuItem value={"7-DECOMMISSIONED"}>Decommissioned</MenuItem>
            <MenuItem value={"8-EXPIRED"}>Expired</MenuItem>
            <MenuItem value={"9-CANCELLED"}>Cancelled</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl} sx={{ m: 2 }}>
          <InputLabel>Site Status?</InputLabel>
          <Select onChange={handleQuote}>
            <MenuItem value={"X"}>Install Open</MenuItem>
            <MenuItem value={"O"}>Quote Needed</MenuItem>
            <MenuItem value={"Needs Warranty"}>
              Completed - Needs Warranty/Commissioning
            </MenuItem>
            <MenuItem value={"CB"}>Completed - Branch</MenuItem>
            <MenuItem value={"CV"}>Completed - Vendor</MenuItem>
            {/* <MenuItem value={"$200"}>Completed - Vendor</MenuItem> */}
            <MenuItem value={"S"}>Static</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl} sx={{ m: 2 }}>
          <InputLabel>GCD Status?</InputLabel>
          <Select onChange={handleGcdStatus}>
            <MenuItem value={"GCD - Contracted"}>Contracted</MenuItem>
            <MenuItem value={"GCD - Not Contracted"}>Not Contracted</MenuItem>
            <MenuItem value={"IS360 Only"}>Active</MenuItem>
            <MenuItem value={"Provisioned"}>Provisioned</MenuItem>
            <MenuItem value={"No Dashboard Records"}>
              No Dashboard Records
            </MenuItem>
          </Select>
        </FormControl>
        <TextField
          sx={{ m: 2, width: "81%" }}
          required
          id="outlined-required"
          label="JC Ticket Number"
          defaultValue={site.jc_ticket}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleJc}
        />
        {/* 
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
        /> */}
        <div className="border">
          <TextField
            sx={{ m: 2, width: "81%" }}
            required
            id="outlined-required"
            label="Notes"
            defaultValue={site.notes}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleNotes}
          />
        </div>
        <div className="border">
          <TextField
            sx={{ m: 2, width: "81%" }}
            required
            id="outlined-required"
            label="Set Dispenser 1 Serial Number + Position"
            defaultValue={site.disp1}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleDisp1}
          />

          <TextField
            sx={{ m: 2 }}
            required
            id="outlined-required"
            label="Set Dispenser 1 Model Number"
            defaultValue={site.model1}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleModel1}
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
              <MenuItem value={"Non-Ethanol Diesel"}>Non-Eth Dsl</MenuItem>
              <MenuItem value={"Diesel"}>Stand Alone Diesel</MenuItem>
              <MenuItem value={"Non-Ethanol Only"}>
                Stand Alone Non-Ethanol
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="border">
          <TextField
            sx={{ m: 2, width: "81%" }}
            required
            id="outlined-required"
            label="Set Dispenser 2 Serial Number + Position"
            defaultValue={site.disp2}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleDisp2}
          />
          <TextField
            sx={{ m: 2 }}
            required
            id="outlined-required"
            label="Set Dispenser 2 Model Number"
            defaultValue={site.model2}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleModel2}
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
              <MenuItem value={"Non-Ethanol Diesel"}>Non-Eth Dsl</MenuItem>
              <MenuItem value={"Diesel"}>Stand Alone Diesel</MenuItem>
              <MenuItem value={"Non-Ethanol Only"}>
                Stand Alone Non-Ethanol
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="border">
          <TextField
            sx={{ m: 2, width: "81%" }}
            required
            id="outlined-required"
            label="Set Dispenser 3 Serial Number + Position"
            defaultValue={site.disp3}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleDisp3}
          />

          <TextField
            sx={{ m: 2 }}
            required
            id="outlined-required"
            label="Set Dispenser 3 Model Number"
            defaultValue={site.model3}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleModel3}
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
              <MenuItem value={"Non-Ethanol Diesel"}>Non-Eth Dsl</MenuItem>
              <MenuItem value={"Diesel"}>Stand Alone Diesel</MenuItem>
              <MenuItem value={"Non-Ethanol Only"}>
                Stand Alone Non-Ethanol
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="border">
          <TextField
            sx={{ m: 2, width: "81%" }}
            required
            id="outlined-required"
            label="Set Dispenser 4 Serial Number + Position"
            defaultValue={site.disp4}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleDisp4}
          />

          <TextField
            sx={{ m: 2 }}
            required
            id="outlined-required"
            label="Set Dispenser 4 Model Number"
            defaultValue={site.model4}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleModel4}
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
              <MenuItem value={"Non-Ethanol Diesel"}>Non-Eth Dsl</MenuItem>
              <MenuItem value={"Diesel"}>Stand Alone Diesel</MenuItem>
              <MenuItem value={"Non-Ethanol Only"}>
                Stand Alone Non-Ethanol
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="border">
          <TextField
            sx={{ m: 2, width: "81%" }}
            required
            id="outlined-required"
            label="Set Dispenser 5 Serial Number + Position"
            defaultValue={site.disp5}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleDisp5}
          />

          <TextField
            sx={{ m: 2 }}
            required
            id="outlined-required"
            label="Set Dispenser 5 Model Number"
            defaultValue={site.model5}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleModel5}
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
              <MenuItem value={"Non-Ethanol Diesel"}>Non-Eth Dsl</MenuItem>
              <MenuItem value={"Diesel"}>Stand Alone Diesel</MenuItem>
              <MenuItem value={"Non-Ethanol Only"}>
                Stand Alone Non-Ethanol
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="border">
          <TextField
            sx={{ m: 2, width: "81%" }}
            required
            id="outlined-required"
            label="Set Dispenser 6 Serial Number + Position"
            defaultValue={site.disp6}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleDisp6}
          />

          <TextField
            sx={{ m: 2 }}
            required
            id="outlined-required"
            label="Set Dispenser 6 Model Number"
            defaultValue={site.model6}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleModel6}
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
              <MenuItem value={"Non-Ethanol Diesel"}>Non-Eth Dsl</MenuItem>
              <MenuItem value={"Diesel"}>Stand Alone Diesel</MenuItem>
              <MenuItem value={"Non-Ethanol Only"}>
                Stand Alone Non-Ethanol
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="border">
          <TextField
            sx={{ m: 2, width: "81%" }}
            required
            id="outlined-required"
            label="Set Dispenser 7 Serial Number + Position"
            defaultValue={site.disp7}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleDisp7}
          />

          <TextField
            sx={{ m: 2 }}
            required
            id="outlined-required"
            label="Set Dispenser 7 Model Number"
            defaultValue={site.model7}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleModel7}
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
              <MenuItem value={"Non-Ethanol Diesel"}>Non-Eth Dsl</MenuItem>
              <MenuItem value={"Diesel"}>Stand Alone Diesel</MenuItem>
              <MenuItem value={"Non-Ethanol Only"}>
                Stand Alone Non-Ethanol
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="border">
          <TextField
            sx={{ m: 2, width: "81%" }}
            required
            id="outlined-required"
            label="Set Dispenser 8 Serial Number + Position"
            defaultValue={site.disp8}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleDisp8}
          />

          <TextField
            sx={{ m: 2 }}
            required
            id="outlined-required"
            label="Set Dispenser 8 Model Number"
            defaultValue={site.model8}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleModel8}
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
              <MenuItem value={"Non-Ethanol Diesel"}>Non-Eth Dsl</MenuItem>
              <MenuItem value={"Diesel"}>Stand Alone Diesel</MenuItem>
              <MenuItem value={"Non-Ethanol Only"}>
                Stand Alone Non-Ethanol
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="border">
          <TextField
            sx={{ m: 2, width: "81%" }}
            required
            id="outlined-required"
            label="Set Dispenser 9 Serial Number + Position"
            defaultValue={site.disp9}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleDisp9}
          />

          <TextField
            sx={{ m: 2 }}
            required
            id="outlined-required"
            label="Set Dispenser 9 Model Number"
            defaultValue={site.model9}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleModel9}
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
              <MenuItem value={"Non-Ethanol Diesel"}>Non-Eth Dsl</MenuItem>
              <MenuItem value={"Diesel"}>Stand Alone Diesel</MenuItem>
              <MenuItem value={"Non-Ethanol Only"}>
                Stand Alone Non-Ethanol
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="border">
          <TextField
            sx={{ m: 2, width: "81%" }}
            required
            id="outlined-required"
            label="Set Dispenser 10 Serial Number + Position"
            defaultValue={site.disp10}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleDisp10}
          />

          <TextField
            sx={{ m: 2 }}
            required
            id="outlined-required"
            label="Set Dispenser 10 Model Number"
            defaultValue={site.model10}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleModel10}
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
              <MenuItem value={"Non-Ethanol Diesel"}>Non-Eth Dsl</MenuItem>
              <MenuItem value={"Diesel"}>Stand Alone Diesel</MenuItem>
              <MenuItem value={"Non-Ethanol Only"}>
                Stand Alone Non-Ethanol
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="border">
          <TextField
            sx={{ m: 2, width: "81%" }}
            required
            id="outlined-required"
            label="Set Dispenser 11 Serial Number + Position"
            defaultValue={site.disp11}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleDisp11}
          />

          <TextField
            sx={{ m: 2 }}
            required
            id="outlined-required"
            label="Set Dispenser 11 Model Number"
            defaultValue={site.model11}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleModel11}
          />

          <FormControl className={classes.formControl} sx={{ ml: 1, mt: 2 }}>
            <InputLabel>Dispenser 11 Grades</InputLabel>
            <Select onChange={handleGrades11}>
              <MenuItem value={"Regular Mid-Grade Premium "}>
                Reg Mid Prem
              </MenuItem>
              <MenuItem value={"Regular Mid-Grade Premium Diesel"}>
                Reg Mid Prem Dsl
              </MenuItem>
              <MenuItem value={"Regular Mid-Grade Premium Non-Ethanol"}>
                Reg Mid Prem Non-Eth
              </MenuItem>
              <MenuItem value={"Non-Ethanol Diesel"}>Non-Eth Dsl</MenuItem>
              <MenuItem value={"Diesel"}>Stand Alone Diesel</MenuItem>
              <MenuItem value={"Non-Ethanol Only"}>
                Stand Alone Non-Ethanol
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="border">
          <TextField
            sx={{ m: 2, width: "81%" }}
            required
            id="outlined-required"
            label="Set Dispenser 12 Serial Number + Position"
            defaultValue={site.disp12}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleDisp12}
          />

          <TextField
            sx={{ m: 2 }}
            required
            id="outlined-required"
            label="Set Dispenser 12 Model Number"
            defaultValue={site.model12}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleModel12}
          />

          <FormControl className={classes.formControl} sx={{ ml: 1, mt: 2 }}>
            <InputLabel>Dispenser 12 Grades</InputLabel>
            <Select onChange={handleGrades12}>
              <MenuItem value={"Regular Mid-Grade Premium "}>
                Reg Mid Prem
              </MenuItem>
              <MenuItem value={"Regular Mid-Grade Premium Diesel"}>
                Reg Mid Prem Dsl
              </MenuItem>
              <MenuItem value={"Regular Mid-Grade Premium Non-Ethanol"}>
                Reg Mid Prem Non-Eth
              </MenuItem>
              <MenuItem value={"Non-Ethanol Diesel"}>Non-Eth Dsl</MenuItem>
              <MenuItem value={"Diesel"}>Stand Alone Diesel</MenuItem>
              <MenuItem value={"Non-Ethanol Only"}>
                Stand Alone Non-Ethanol
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="border">
          <TextField
            sx={{ m: 2, width: "81%" }}
            required
            id="outlined-required"
            label="Set Dispenser 13 Serial Number + Position"
            defaultValue={site.disp13}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleDisp13}
          />

          <TextField
            sx={{ m: 2 }}
            required
            id="outlined-required"
            label="Set Dispenser 13 Model Number"
            defaultValue={site.model13}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleModel13}
          />

          <FormControl className={classes.formControl} sx={{ ml: 1, mt: 2 }}>
            <InputLabel>Dispenser 13 Grades</InputLabel>
            <Select onChange={handleGrades13}>
              <MenuItem value={"Regular Mid-Grade Premium "}>
                Reg Mid Prem
              </MenuItem>
              <MenuItem value={"Regular Mid-Grade Premium Diesel"}>
                Reg Mid Prem Dsl
              </MenuItem>
              <MenuItem value={"Regular Mid-Grade Premium Non-Ethanol"}>
                Reg Mid Prem Non-Eth
              </MenuItem>
              <MenuItem value={"Non-Ethanol Diesel"}>Non-Eth Dsl</MenuItem>
              <MenuItem value={"Diesel"}>Stand Alone Diesel</MenuItem>
              <MenuItem value={"Non-Ethanol Only"}>
                Stand Alone Non-Ethanol
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="border">
          <TextField
            sx={{ m: 2, width: "81%" }}
            required
            id="outlined-required"
            label="Set Dispenser 14 Serial Number + Position"
            defaultValue={site.disp14}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleDisp14}
          />

          <TextField
            sx={{ m: 2 }}
            required
            id="outlined-required"
            label="Set Dispenser 14 Model Number"
            defaultValue={site.model14}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleModel14}
          />

          <FormControl className={classes.formControl} sx={{ ml: 1, mt: 2 }}>
            <InputLabel>Dispenser 14 Grades</InputLabel>
            <Select onChange={handleGrades14}>
              <MenuItem value={"Regular Mid-Grade Premium "}>
                Reg Mid Prem
              </MenuItem>
              <MenuItem value={"Regular Mid-Grade Premium Diesel"}>
                Reg Mid Prem Dsl
              </MenuItem>
              <MenuItem value={"Regular Mid-Grade Premium Non-Ethanol"}>
                Reg Mid Prem Non-Eth
              </MenuItem>
              <MenuItem value={"Non-Ethanol Diesel"}>Non-Eth Dsl</MenuItem>
              <MenuItem value={"Diesel"}>Stand Alone Diesel</MenuItem>
              <MenuItem value={"Non-Ethanol Only"}>
                Stand Alone Non-Ethanol
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="border">
          <TextField
            sx={{ m: 2, width: "81%" }}
            required
            id="outlined-required"
            label="Set Dispenser 15 Serial Number + Position"
            defaultValue={site.disp15}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleDisp15}
          />

          <TextField
            sx={{ m: 2 }}
            required
            id="outlined-required"
            label="Set Dispenser 15 Model Number"
            defaultValue={site.model15}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleModel15}
          />

          <FormControl className={classes.formControl} sx={{ ml: 1, mt: 2 }}>
            <InputLabel>Dispenser 15 Grades</InputLabel>
            <Select onChange={handleGrades15}>
              <MenuItem value={"Regular Mid-Grade Premium "}>
                Reg Mid Prem
              </MenuItem>
              <MenuItem value={"Regular Mid-Grade Premium Diesel"}>
                Reg Mid Prem Dsl
              </MenuItem>
              <MenuItem value={"Regular Mid-Grade Premium Non-Ethanol"}>
                Reg Mid Prem Non-Eth
              </MenuItem>
              <MenuItem value={"Non-Ethanol Diesel"}>Non-Eth Dsl</MenuItem>
              <MenuItem value={"Diesel"}>Stand Alone Diesel</MenuItem>
              <MenuItem value={"Non-Ethanol Only"}>
                Stand Alone Non-Ethanol
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="border">
          <TextField
            sx={{ m: 2, width: "81%" }}
            required
            id="outlined-required"
            label="Set Dispenser 16 Serial Number + Position"
            defaultValue={site.disp16}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleDisp16}
          />

          <TextField
            sx={{ m: 2 }}
            required
            id="outlined-required"
            label="Set Dispenser 16 Model Number"
            defaultValue={site.model16}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleModel16}
          />

          <FormControl className={classes.formControl} sx={{ ml: 1, mt: 2 }}>
            <InputLabel>Dispenser 16 Grades</InputLabel>
            <Select onChange={handleGrades16}>
              <MenuItem value={"Regular Mid-Grade Premium "}>
                Reg Mid Prem
              </MenuItem>
              <MenuItem value={"Regular Mid-Grade Premium Diesel"}>
                Reg Mid Prem Dsl
              </MenuItem>
              <MenuItem value={"Regular Mid-Grade Premium Non-Ethanol"}>
                Reg Mid Prem Non-Eth
              </MenuItem>
              <MenuItem value={"Non-Ethanol Diesel"}>Non-Eth Dsl</MenuItem>
              <MenuItem value={"Diesel"}>Stand Alone Diesel</MenuItem>
              <MenuItem value={"Non-Ethanol Only"}>
                Stand Alone Non-Ethanol
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="border">
          <TextField
            sx={{ m: 2, width: "81%" }}
            required
            id="outlined-required"
            label="Set Dispenser 17 Serial Number + Position"
            defaultValue={site.disp17}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleDisp17}
          />

          <TextField
            sx={{ m: 2 }}
            required
            id="outlined-required"
            label="Set Dispenser 17 Model Number"
            defaultValue={site.model17}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleModel17}
          />

          <FormControl className={classes.formControl} sx={{ ml: 1, mt: 2 }}>
            <InputLabel>Dispenser 17 Grades</InputLabel>
            <Select onChange={handleGrades17}>
              <MenuItem value={"Regular Mid-Grade Premium "}>
                Reg Mid Prem
              </MenuItem>
              <MenuItem value={"Regular Mid-Grade Premium Diesel"}>
                Reg Mid Prem Dsl
              </MenuItem>
              <MenuItem value={"Regular Mid-Grade Premium Non-Ethanol"}>
                Reg Mid Prem Non-Eth
              </MenuItem>
              <MenuItem value={"Non-Ethanol Diesel"}>Non-Eth Dsl</MenuItem>
              <MenuItem value={"Diesel"}>Stand Alone Diesel</MenuItem>
              <MenuItem value={"Non-Ethanol Only"}>
                Stand Alone Non-Ethanol
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="border">
          <TextField
            sx={{ m: 2, width: "81%" }}
            required
            id="outlined-required"
            label="Set Dispenser 18 Serial Number + Position"
            defaultValue={site.disp18}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleDisp18}
          />

          <TextField
            sx={{ m: 2 }}
            required
            id="outlined-required"
            label="Set Dispenser 18 Model Number"
            defaultValue={site.model18}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleModel18}
          />

          <FormControl className={classes.formControl} sx={{ ml: 1, mt: 2 }}>
            <InputLabel>Dispenser 18 Grades</InputLabel>
            <Select onChange={handleGrades18}>
              <MenuItem value={"Regular Mid-Grade Premium "}>
                Reg Mid Prem
              </MenuItem>
              <MenuItem value={"Regular Mid-Grade Premium Diesel"}>
                Reg Mid Prem Dsl
              </MenuItem>
              <MenuItem value={"Regular Mid-Grade Premium Non-Ethanol"}>
                Reg Mid Prem Non-Eth
              </MenuItem>
              <MenuItem value={"Non-Ethanol Diesel"}>Non-Eth Dsl</MenuItem>
              <MenuItem value={"Diesel"}>Stand Alone Diesel</MenuItem>
              <MenuItem value={"Non-Ethanol Only"}>
                Stand Alone Non-Ethanol
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="border">
          <TextField
            sx={{ m: 2, width: "81%" }}
            required
            id="outlined-required"
            label="Set Dispenser 19 Serial Number + Position"
            defaultValue={site.disp19}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleDisp19}
          />

          <TextField
            sx={{ m: 2 }}
            required
            id="outlined-required"
            label="Set Dispenser 19 Model Number"
            defaultValue={site.model19}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleModel19}
          />

          <FormControl className={classes.formControl} sx={{ ml: 1, mt: 2 }}>
            <InputLabel>Dispenser 19 Grades</InputLabel>
            <Select onChange={handleGrades19}>
              <MenuItem value={"Regular Mid-Grade Premium "}>
                Reg Mid Prem
              </MenuItem>
              <MenuItem value={"Regular Mid-Grade Premium Diesel"}>
                Reg Mid Prem Dsl
              </MenuItem>
              <MenuItem value={"Regular Mid-Grade Premium Non-Ethanol"}>
                Reg Mid Prem Non-Eth
              </MenuItem>
              <MenuItem value={"Non-Ethanol Diesel"}>Non-Eth Dsl</MenuItem>
              <MenuItem value={"Diesel"}>Stand Alone Diesel</MenuItem>
              <MenuItem value={"Non-Ethanol Only"}>
                Stand Alone Non-Ethanol
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="border">
          <TextField
            sx={{ m: 2, width: "81%" }}
            required
            id="outlined-required"
            label="Set Dispenser 20 Serial Number + Position"
            defaultValue={site.disp20}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleDisp20}
          />

          <TextField
            sx={{ m: 2 }}
            required
            id="outlined-required"
            label="Set Dispenser 20 Model Number"
            defaultValue={site.model20}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleModel20}
          />

          <FormControl className={classes.formControl} sx={{ ml: 1, mt: 2 }}>
            <InputLabel>Dispenser 20 Grades</InputLabel>
            <Select onChange={handleGrades20}>
              <MenuItem value={"Regular Mid-Grade Premium "}>
                Reg Mid Prem
              </MenuItem>
              <MenuItem value={"Regular Mid-Grade Premium Diesel"}>
                Reg Mid Prem Dsl
              </MenuItem>
              <MenuItem value={"Regular Mid-Grade Premium Non-Ethanol"}>
                Reg Mid Prem Non-Eth
              </MenuItem>
              <MenuItem value={"Non-Ethanol Diesel"}>Non-Eth Dsl</MenuItem>
              <MenuItem value={"Diesel"}>Stand Alone Diesel</MenuItem>
              <MenuItem value={"Non-Ethanol Only"}>
                Stand Alone Non-Ethanol
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="border">
          <TextField
            sx={{ m: 2, width: "81%" }}
            required
            id="outlined-required"
            label="Set Dispenser 21 Serial Number + Position"
            defaultValue={site.disp21}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleDisp21}
          />

          <TextField
            sx={{ m: 2 }}
            required
            id="outlined-required"
            label="Set Dispenser 21 Model Number"
            defaultValue={site.model21}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleModel21}
          />

          <FormControl className={classes.formControl} sx={{ ml: 1, mt: 2 }}>
            <InputLabel>Dispenser 21 Grades</InputLabel>
            <Select onChange={handleGrades21}>
              <MenuItem value={"Regular Mid-Grade Premium "}>
                Reg Mid Prem
              </MenuItem>
              <MenuItem value={"Regular Mid-Grade Premium Diesel"}>
                Reg Mid Prem Dsl
              </MenuItem>
              <MenuItem value={"Regular Mid-Grade Premium Non-Ethanol"}>
                Reg Mid Prem Non-Eth
              </MenuItem>
              <MenuItem value={"Non-Ethanol Diesel"}>Non-Eth Dsl</MenuItem>
              <MenuItem value={"Diesel"}>Stand Alone Diesel</MenuItem>
              <MenuItem value={"Non-Ethanol Only"}>
                Stand Alone Non-Ethanol
              </MenuItem>
            </Select>
          </FormControl>
        </div>

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
