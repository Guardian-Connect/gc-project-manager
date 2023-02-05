import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { Typography, Card, CardContent, Button } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import { format } from "date-fns";
import Accordion from "@mui/material/Accordion";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import PosAtg from "./PosAtg";
import Dispensers from "./Dispensers";
import Dispmodal from "./Dispmodal";
import Dialog from "@mui/material/Dialog";
import { handleDateTwo as handleDate, isLater } from "../api";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
const moment = require("moment");
let today = moment.utc().format("yyyy-MM-DD");
const Dispcardz = ({ site, setCount, count }) => {
  const [open, setOpen] = React.useState(false);
  const withoutFirstTwo = (e) => {
    let cStatus = e.slice(2);
    return cStatus;
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Accordion
      sx={{
        m: 1,
        bgcolor: "white",
        ...(site.quote != "C" && {
          bgcolor: "yellow",
        }),
        width: { md: "83%", lg: "75%" },
      }}
      key={site.id}
    >
      <AccordionSummary
        expandIcon={<AddCircleIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <CardContent>
          <Typography variant="h5" component="div">
            GVR ID - {site.gvr_id}
          </Typography>
          <Typography variant="h5" component="div">
            {site.add_id != "#N/A" && <>Address ID - {site.add_id} </>}
            {site.add_id === "#N/A" && <>No Address ID Available</>}
          </Typography>
          <Typography variant="h5" component="div">
            {site.gp_cust != "#N/A" && <>GP Customer - {site.gp_cust}</>}
            {site.gp_cust === "#N/A" && <>No GP Customer Listed</>}
          </Typography>
          <Typography variant="h5" component="div">
            {site.cus_name != "#N/A" && <>Customer Name - {site.cus_name}</>}
            {site.cus_name === "#N/A" && <>No Customer Name Listed</>}
          </Typography>
          <Typography variant="h5" component="div">
            {site.contract != null && <>Contract Number - {site.contract}</>}
            {site.contract === null && <>No Contract Number Listed</>}
          </Typography>
          <Typography variant="h5" component="div">
            Contract Status - {site.contract_status}
          </Typography>
          <Typography variant="h5" component="div">
            Site Address - {site.site_address}
          </Typography>
          <Typography variant="h5" component="div">
            Number of Dispensers - {site.totaldisp}
          </Typography>
          <Typography variant="h5" component="div">
            {site.activation != null && (
              <>Registration Date - {handleDate(site.activation)} </>
            )}
            {site.activation === null && <>No Registration Date Available</>}
          </Typography>
          <Typography variant="h5" component="div">
            {site.renewal != null && (
              <>Renewal Date - {handleDate(site.renewal)} </>
            )}
            {site.renewal === null && <>No Renewal Date Available</>}
          </Typography>
          <Typography variant="h5" component="div">
            {site.warranty != null && (
              <>Warranty Date - {handleDate(site.warranty)}</>
            )}
            {site.warranty === null && <>No Warranty Information Available</>}
          </Typography>
        </CardContent>
      </AccordionSummary>
      <Typography variant="h5" component="div">
        {site.notes != "X" && <> Notes : {site.notes} </>}
        {site.notes === "X" && <>No Notes Entered</>}
      </Typography>
      <PosAtg site={site} />
      <Dispensers site={site} />
      <Button variant="contained" onClick={handleClickOpen} sx={{ m: 1 }}>
        Edit Dispenser
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Dispmodal site={site} />
      </Dialog>
    </Accordion>
  );
};

export default Dispcardz;
