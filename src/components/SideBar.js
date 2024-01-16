import React, { useEffect, useState } from "react";
import { getSomething } from "../api";
import { Typography, Card, ButtonBase } from "@mui/material";
import CsvDownload from "react-json-to-csv";
import { getSpecificData, getCompleteData } from "../api/index";

const SideBar = ({ mockData, setSearchInput }) => {
  const [message, setMessage] = useState([]);

  useEffect(async () => {
    await getSomething()
      .then((response) => {
        setMessage(response.rrsmatrix);
      })
      .catch((error) => {
        setMessage(error.message);
      });
  }, []);
  return (
    <div className="sidebar">
      <Typography
        variant="h4"
        sx={{ width: "100%", flexShrink: 1, alignContent: "center" }}
      >
        <div className="spacecenter">RRS Pricing Matrix</div>
        <div className="bottom"></div>
      </Typography>
      <Typography
        variant="h5"
        sx={{
          flexShrink: 1,
          alignSelf: "center",
          width: "100%",
          ml: 1,
          mr: 1,
          fontSize: 18,
        }}
      >
        {" "}
        GP - Customer Name - RRS Fee - Request Before RRS
      </Typography>
      <div className="bottom"></div>
      {message.map((rrs) => (
        <div key={rrs.id}>
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
            {rrs.gp_cust} - {rrs.cus_name} - {rrs.rrs} - {rrs.warm_start}
          </Typography>
        </div>
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
