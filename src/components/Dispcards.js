import React from "react";
import { Typography } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import { format } from "date-fns";
import Accordion from "@mui/material/Accordion";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import PosAtg from "./PosAtg";
import Dispensers from "./Dispensers";
const moment = require("moment");
const Dispcards = ({ site, setCount, count }) => {
  let today = moment.utc().format("MM/DD/yyyy");

  function handleDate(d) {
    let date = moment.utc(d).format("MM/DD/yyyy");
    return date;
  }

  function isLater(date1, today) {
    let d = handleDate(date1);
    if (moment.utc(d).isAfter(today)) {
      return <div>Warranty Date - {handleDate(site.warranty)}</div>;
    } else {
      return (
        <div className="yellow">
          Warranty Expired - {handleDate(site.warranty)}
        </div>
      );
    }
  }

  if (site.totaldisp != null) {
    return (
      <>
        <Accordion>
          <AccordionSummary
            expandIcon={<AddCircleIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div className="info">
              {site.totaldisp != null && (
                <Typography variant="h4" sx={{ width: "100%", flexShrink: 1 }}>
                  {site.onboarding === false ? (
                    <div>GVR ID - {site.gvr_id}</div>
                  ) : (
                    <div>
                      <StarBorderPurple500Icon /> GVR ID - {site.gvr_id}
                      <StarBorderPurple500Icon />
                    </div>
                  )}
                  <div>GP Customer - {site.gp_cust}</div>
                  <div>Contract Number - {site.contract}</div>
                  <div>Site Address - {site.site_address}</div>
                  <div>Number of Dispensers - {site.totaldisp}</div>
                  <div>Registration Date - {handleDate(site.activation)}</div>
                  <div>Renewal Date - {handleDate(site.renewal)}</div>
                  {isLater(site.warranty, today)}
                </Typography>
              )}
            </div>
          </AccordionSummary>
          <>{site.notes != null && <div>Notes - {site.notes}</div>}</>

          {/* Any ATG or POS Systems Get Created Here */}
          <PosAtg site={site} />

          {/* Any Dispenser Serial / Grade Mapping Are Going Here */}
          <Dispensers site={site} />
        </Accordion>
      </>
    );
  } else {
    return (
      <>
        <Accordion className="yellow">
          <AccordionSummary
            expandIcon={<AddCircleIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div className="yellow">
              <Typography variant="h4" sx={{ width: "100%", flexShrink: 1 }}>
                <div>Site Not Yet Activated.</div>
                {site.onboarding === false ? (
                  <div>GVR ID NEGATIVE - {site.gvr_id}</div>
                ) : (
                  <div>
                    <StarBorderPurple500Icon /> GVR ID - {site.gvr_id}
                    <StarBorderPurple500Icon />
                  </div>
                )}
                <div>GP Customer - {site.gp_cust}</div>
                <div>Site Address - {site.site_address}</div>
                <div className="center">
                  <Typography
                    variant="h3"
                    sx={{
                      justifyContent: "center",
                    }}
                  >
                    {site.notes != null && <div>See Notes</div>}
                  </Typography>
                </div>
              </Typography>
            </div>
          </AccordionSummary>
          <Typography variant="h4" sx={{ width: "50%" }}>
            {site.notes != null && <div>Notes - {site.notes}</div>}
          </Typography>
        </Accordion>
      </>
    );
  }
};

export default Dispcards;
