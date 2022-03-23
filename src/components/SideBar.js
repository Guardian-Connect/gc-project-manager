import React from "react";
import { Typography } from "@mui/material";
import CsvDownload from "react-json-to-csv";
const SideBar = ({ mockData }) => {
  let proOneCon = sessionStorage.getItem("ponecon");
  let proOneDis = sessionStorage.getItem("ponedis");
  let pTwoCon = sessionStorage.getItem("pTwoCon");
  let pTwoDis = sessionStorage.getItem("pTwoDis");
  let pThreeCon = sessionStorage.getItem("pThreeCon");
  let pThreeDis = sessionStorage.getItem("pThreeDis");
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
      <Typography variant="h5" sx={{ flexShrink: 1, alignSelf: "center" }}>
        <div className="space">Major's Management</div>
      </Typography>
      <Typography
        variant="h6"
        sx={{ width: "100%", flexShrink: 1, alignSelf: "center" }}
      >
        <div>Connected - {proOneCon}</div>
        <div className="bottom">Not Connected - {proOneDis}</div>
      </Typography>
      <Typography
        variant="h5"
        sx={{ width: "100%", flexShrink: 1, alignSelf: "center" }}
      >
        <div className="space">Lion's Pride</div>
      </Typography>
      <Typography
        variant="h6"
        sx={{ width: "100%", flexShrink: 1, alignSelf: "center" }}
      >
        <div>Connected - {pTwoCon}</div>
        <div className="bottom">Not Connected - {pTwoDis}</div>
      </Typography>
      <Typography
        variant="h5"
        sx={{ width: "100%", flexShrink: 1, alignSelf: "center" }}
      >
        <div className="space">SE Petro</div>
      </Typography>
      <Typography
        variant="h6"
        sx={{ width: "100%", flexShrink: 1, alignSelf: "center" }}
      >
        <div>Connected - {pThreeCon}</div>
        <div className="bottom">Not Connected - {pThreeDis}</div>
      </Typography>
      {/* CSV Download Option */}
      {/* <CsvDownload data={mockData} /> */}
    </div>
  );
};

export default SideBar;
