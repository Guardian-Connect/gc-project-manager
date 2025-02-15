import React from "react";
import { Select, MenuItem } from "@mui/material";

const Branches = ({ handleBranch }) => {
  return (
    <Select onChange={handleBranch} defaultValue={""}>
      <MenuItem value={"OTH"}>Other</MenuItem>
      <MenuItem value={"APEC"}>APEC</MenuItem>
      <MenuItem value={"ATL"}>Atlanta</MenuItem>
      <MenuItem value={"BIR"}>Birmingham</MenuItem>
      <MenuItem value={"CHA"}>Charlotte</MenuItem>
      <MenuItem value={"CIK"}>Circle K</MenuItem>
      <MenuItem value={"CKPOC"}>POC - Circle K</MenuItem>
      <MenuItem value={"COL"}>Columbia</MenuItem>
      <MenuItem value={"CTX"}>CTX</MenuItem>
      <MenuItem value={"CUS"}>Customer</MenuItem>
      <MenuItem value={"DAL"}>Dallas</MenuItem>
      <MenuItem value={"DEN"}>Denver</MenuItem>
      <MenuItem value={"FTL"}>Fort Lauderdale</MenuItem>
      <MenuItem value={"FTM"}>Fort Myers</MenuItem>
      <MenuItem value={"GPM"}>GPM</MenuItem>
      <MenuItem value={"GRE"}>Greensboro</MenuItem>
      <MenuItem value={"GCS"}>Guardian Connect</MenuItem>
      <MenuItem value={"GUL"}>Gulf/Pensacola</MenuItem>
      <MenuItem value={"HOU"}>Houston</MenuItem>
      <MenuItem value={"JAC"}>Jackson</MenuItem>
      <MenuItem value={"JAX"}>Jacksonville</MenuItem>
      <MenuItem value={"KNX"}>Knoxville</MenuItem>
      <MenuItem value={"LAF"}>Lafayette</MenuItem>
      <MenuItem value={"NAS"}>Nashville</MenuItem>
      <MenuItem value={"OK"}>Oklahoma</MenuItem>
      <MenuItem value={"PARKERS"}>Parker's</MenuItem>
      <MenuItem value={"PES"}>Petro Solutions</MenuItem>
      <MenuItem value={"RAL"}>Raleigh</MenuItem>
      <MenuItem value={"RCH"}>Richmond</MenuItem>
      <MenuItem value={"ROA"}>Roanoke</MenuItem>
      <MenuItem value={"SAN"}>Sanford</MenuItem>
      <MenuItem value={"SAV"}>Savannah</MenuItem>
      <MenuItem value={"TAL"}>Tallahassee</MenuItem>
      <MenuItem value={"TAM"}>Tampa</MenuItem>
    </Select>
  );
};

export default Branches;
