import React, { useEffect, useState } from "react";
import { getAllManagers } from "../api";
import { Typography, Card, ButtonBase } from "@mui/material";
import CsvDownload from "react-json-to-csv";
import { getSpecificData, getCompleteData } from "../api/index";
import { useHistory } from "react-router-dom";

const SideBar = ({ mockData, setSearchInput }) => {
  let history = useHistory();
  const [message, setMessage] = useState([]);

  useEffect(async () => {
    await getAllManagers()
      .then((response) => {
        setMessage(response.managers);
      })
      .catch((error) => {
        setMessage(error.message);
      });
  }, []);
  return (
    <div className="sidebar">
      <Typography
        variant="h4"
        sx={{
          width: "100%",
          flexShrink: 1,
          alignContent: "center",
          mr: 20,
        }}
      >
        <div className="spacecenter">GFT Contacts</div>
        <div className="bottom"></div>
      </Typography>

      <div className="bottom"></div>
      {message.map((managers) => (
        <>
          <div key={managers.id}>
            <Typography
              variant="h5"
              sx={{
                flexShrink: 1,
                alignSelf: "center",
                width: "100%",
                m: 1,
                fontSize: 17,
              }}
            >
              <u>{managers.branch}</u>
            </Typography>
          </div>
          <div key={managers.id}>
            <Typography
              variant="h5"
              sx={{
                flexShrink: 1,
                alignSelf: "center",
                width: "100%",
                ml: 1,
                mr: 3,
                fontSize: 17,
              }}
            >
              {managers.s_manager} - {managers.s_manager_name}
            </Typography>
          </div>
          <div key={managers.id}>
            <Typography
              variant="h5"
              sx={{
                flexShrink: 1,
                alignSelf: "center",
                width: "100%",
                ml: 1,
                mr: 3,
                fontSize: 17,
              }}
            >
              {managers.b_manager} - {managers.b_manager_name}
            </Typography>
          </div>
          {/* <div key={managers.id}>
            <Typography
              variant="h5"
              sx={{
                flexShrink: 1,
                alignSelf: "center",
                width: "100%",
                ml: 1,
                mr: 3,
                fontSize: 17,
              }}
            >
              {managers.warm_start}
            </Typography>
          </div> */}
        </>
      ))}

      {/* ALL PROJECTS START HERE */}
      {/* Starting Project 1 */}
      {/* <Card variant="outlined">
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
      </Card> */}
      {/* Starting Project 2 */}
      {/* <Card variant="outlined">
        <ButtonBase
          onClick={clickyMaj}
          sx={{ typography: "h6", width: "100%" }}
        >
          <Typography
            variant="h5"
            sx={{ flexShrink: 1, alignSelf: "center", width: "100%" }}
          >
            <div value={projTwo} className="space">
              Lion's Pride
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
      </Card> */}
      {/* Starting Project 3 */}
      {/* <Card variant="outlined">
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
      </Card> */}
    </div>
  );
};

export default SideBar;
