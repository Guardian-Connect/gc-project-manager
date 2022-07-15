import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { Typography, Button, TextField, Modal, Box } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import { format } from "date-fns";
import Accordion from "@mui/material/Accordion";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import PosAtg from "./PosAtg";
import Dispensers from "./Dispensers";
import Dispmodal from "./Dispmodal";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
const moment = require("moment");
const Dispcards = ({ site, setCount, count }) => {
  let today = moment.utc().format("MM/DD/yyyy");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleDate(d) {
    let date = moment.utc(d).format("MM/DD/yyyy");
    // console.log(date);
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
                  {console.log(site)}
                  {site.onboarding === false ? (
                    <div>GVR ID - {site.gvr_id} </div>
                  ) : (
                    <div>GVR ID - {site.gvr_id} </div>
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
          <Button variant="outlined" onClick={handleClickOpen}>
            Edit Dispenser
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <Dispmodal site={site} />
          </Dialog>
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
                  <div>GVR ID - {site.gvr_id}</div>
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
          <Typography variant="h4" sx={{ width: "100%" }}>
            {site.notes != null && <div>Notes - {site.notes}</div>}
          </Typography>
          <Button variant="outlined" onClick={handleClickOpen}>
            Edit Dispenser
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <Dispmodal site={site} />
          </Dialog>
        </Accordion>
        <div></div>
      </>
    );
  }
};

export default Dispcards;
