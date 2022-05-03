import React from "react";
import { Typography, Card, ButtonBase } from "@mui/material";
import CsvDownload from "react-json-to-csv";
import { getSpecificData, getCompleteData } from "../api/index";
import { useHistory } from "react-router-dom";
let projOne = "MAJ0001";
let projTwo = "LIO0002";
let projThree = "SOU0008";
const SideBar = ({ mockData, setSearchInput }) => {
  let proOneCon = sessionStorage.getItem("ponecon");
  let proOneDis = sessionStorage.getItem("ponedis");
  let pTwoCon = sessionStorage.getItem("pTwoCon");
  let pTwoDis = sessionStorage.getItem("pTwoDis");
  let pThreeCon = sessionStorage.getItem("pThreeCon");
  let pThreeDis = sessionStorage.getItem("pThreeDis");
  let history = useHistory();

  const clickyMaj = (event) => {
    let input = event.target.attributes[0].value;
    event.preventDefault();
    // console.log("Clicked", event.target.attributes[1].value);
    setSearchInput(input);
  };

  async function clickData(event) {
    let input = event.target.attributes[1].value;
    event.preventDefault();
    console.log(input);
    // console.log("Clicked", event.target.attributes[1].value);
    await getSpecificData(input);
    history.push("/details");
    window.location.reload(``);
  }

  async function clickCon(event) {
    console.log(event);
    let input = event.target.attributes[0].value;
    event.preventDefault();
    await getCompleteData(input);
    history.push("/details");
    window.location.reload(``);
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
          onClick={clickyMaj}
          sx={{ typography: "h6", width: "100%" }}
        >
          <Typography
            variant="h5"
            sx={{ flexShrink: 1, alignSelf: "center", width: "100%" }}
          >
            <div value={projOne}>Major's Management</div>
          </Typography>
        </ButtonBase>
        <Typography
          variant="h6"
          sx={{ width: "100%", flexShrink: 1, alignSelf: "center" }}
        >
          <ButtonBase
            onClick={clickCon}
            sx={{ typography: "h6", width: "100%" }}
          >
            <div value={projOne}>Connected - {proOneCon}</div>
          </ButtonBase>
          <ButtonBase
            onClick={clickData}
            sx={{ typography: "h6", width: "100%" }}
          >
            <div className="bottom" value={projOne}>
              Not Connected - {proOneDis}
            </div>
          </ButtonBase>
        </Typography>
      </Card>
      {/* Starting Project 2 */}
      <Card variant="outlined">
        <ButtonBase
          onClick={clickyMaj}
          sx={{ typography: "h6", width: "100%" }}
        >
          <Typography
            variant="h5"
            sx={{ flexShrink: 1, alignSelf: "center", width: "100%" }}
          >
            <div value={projTwo} className="space">
              Lion's Pride (changes)
            </div>
          </Typography>
        </ButtonBase>
        <Typography
          variant="h6"
          sx={{ width: "100%", flexShrink: 1, alignSelf: "center" }}
        >
          <ButtonBase
            onClick={clickCon}
            sx={{ typography: "h6", width: "100%" }}
          >
            <div value={projTwo}>Connected - {pTwoCon}</div>
          </ButtonBase>
          <ButtonBase
            onClick={clickData}
            sx={{ typography: "h6", width: "100%" }}
          >
            <div className="bottom" value={projTwo}>
              Not Connected - {pTwoDis}
            </div>
          </ButtonBase>
        </Typography>
      </Card>
      {/* Starting Project 3 */}
      <Card variant="outlined">
        <ButtonBase
          onClick={clickyMaj}
          sx={{ typography: "h6", width: "100%" }}
        >
          <Typography
            variant="h5"
            sx={{ flexShrink: 1, alignSelf: "center", width: "100%" }}
          >
            <div value={projThree} className="space">
              SE Petro
            </div>
          </Typography>
        </ButtonBase>
        <Typography
          variant="h6"
          sx={{ width: "100%", flexShrink: 1, alignSelf: "center" }}
        >
          <ButtonBase
            onClick={clickCon}
            sx={{ typography: "h6", width: "100%" }}
          >
            <div value={projThree}>Connected - {pThreeCon}</div>
          </ButtonBase>
          <ButtonBase
            onClick={clickData}
            sx={{ typography: "h6", width: "100%" }}
          >
            <div className="bottom" value={projThree}>
              Not Connected - {pThreeDis}
            </div>
          </ButtonBase>
        </Typography>
      </Card>
    </div>
  );
};

export default SideBar;
