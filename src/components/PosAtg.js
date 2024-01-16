import React from "react";
import { Typography } from "@mui/material";

const PosAtg = ({ site }) => {
  let test = "NULL";
  return (
    <>
      {site.posvn != test && (
        <div className="disp">
          <Typography variant="h5">
            <div>POS Version #{site.posvn}</div>
          </Typography>
        </div>
      )}
      {site.posmain != test && (
        <div className="disp">
          <Typography variant="h5">
            <div>POS EDH/Commander Serial - {site.posmain}</div>
          </Typography>
        </div>
      )}{" "}
      {site.posreg1 != test && (
        <div className="disp">
          <Typography variant="h5">
            <div>POS Register 1 - {site.posreg1}</div>
          </Typography>
        </div>
      )}
      {site.posreg2 != test && (
        <div className="disp">
          <Typography variant="h5">
            <div>POS Register 2 - {site.posreg2}</div>
          </Typography>
        </div>
      )}
      {site.posreg3 != test && (
        <div className="disp">
          <Typography variant="h5">
            <div>POS Register 3 - {site.posreg3}</div>
          </Typography>
        </div>
      )}
      {site.atgmodel != test && (
        <div className="disp">
          <Typography variant="h5">
            <div>ATG Model Info - {site.atgmodel}</div>
          </Typography>
        </div>
      )}
    </>
  );
};

export default PosAtg;
