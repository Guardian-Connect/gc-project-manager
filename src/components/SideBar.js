import React from "react";
import { Typography, Card, ButtonBase } from "@mui/material";
import CsvDownload from "react-json-to-csv";
const SideBar = ({ mockData, setSearchInput }) => {
  let proOneCon = sessionStorage.getItem("ponecon");
  let proOneDis = sessionStorage.getItem("ponedis");
  let pTwoCon = sessionStorage.getItem("pTwoCon");
  let pTwoDis = sessionStorage.getItem("pTwoDis");
  let pThreeCon = sessionStorage.getItem("pThreeCon");
  let pThreeDis = sessionStorage.getItem("pThreeDis");
  const clickyMaj = (event) => {
    let input = event.target.attributes[1].value
    event.preventDefault();
    console.log("Clicked", event.target.attributes[1].value)
    setSearchInput(input)
  }
  return (
    <div className="sidebar">
      <Typography
        variant="h4"
        sx={{ width: "100%", flexShrink: 1, alignContent: "center" }}
      >
        <div className="spacecenter">Project Counts</div>
        <div className="bottom"></div>
      </Typography>
      {/* ALL PROJECTS START HERE */}
      {/* Starting Project 1 */}
      <Card variant="outlined">
        <ButtonBase
        onClick={clickyMaj}>
      <Typography variant="h5" sx={{ flexShrink: 1, alignSelf: "center" }}>
        <div className="space" value="MAJ0001">Major's Management</div>
      </Typography>
      </ButtonBase>
      <Typography
        variant="h6"
        sx={{ width: "100%", flexShrink: 1, alignSelf: "center" }}
      >
        <div>Connected - {proOneCon}</div>
        <div className="bottom">Not Connected - {proOneDis}</div>
      </Typography>
      </Card>
      {/* Starting Project 2 */}
      <Card variant="outlined">
      <ButtonBase
        onClick={clickyMaj}>
      <Typography
        variant="h5"
        sx={{ width: "100%", flexShrink: 1, alignSelf: "center" }}
      >
        <div className="space" value="LIO0002">Lion's Pride</div>
      </Typography>
      </ButtonBase>
      <Typography
        variant="h6"
        sx={{ width: "100%", flexShrink: 1, alignSelf: "center" }}
      >
        <div>Connected - {pTwoCon}</div>
        <div className="bottom">Not Connected - {pTwoDis}</div>
      </Typography>
      </Card>
      {/* Starting Project 3 */}
      <Card variant="outlined">
      <ButtonBase
        onClick={clickyMaj}>
      <Typography
        variant="h5"
        sx={{ width: "100%", flexShrink: 1, alignSelf: "center" }}
      >
        
        <div className="space" value="SOU0008">SE Petro</div>
      </Typography>
      </ButtonBase>
      <Typography
        variant="h6"
        sx={{ width: "100%", flexShrink: 1, alignSelf: "center" }}
      >
        <div>Connected - {pThreeCon}</div>
        <div className="bottom">Not Connected - {pThreeDis}</div>
      </Typography>
      </Card>
      {/* CSV Download Option */}
      {/* <CsvDownload data={mockData} /> */}
    </div>
  );
};

export default SideBar;
