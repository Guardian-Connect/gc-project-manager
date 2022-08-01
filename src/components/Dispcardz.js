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

const Dispcardz = ({ site, setCount, count }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (site.totaldisp != null) {
    return (
      <Accordion
        sx={{
          m: 1,
          bgcolor: "background.paper",
          width: "65%",
          borderRadius: 1,
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
              GP Customer - {site.gp_cust}
            </Typography>
            <Typography variant="h5" component="div">
              Contract Number - {site.contract}
            </Typography>
            <Typography variant="h5" component="div">
              Site Address - {site.site_address}
            </Typography>
            <Typography variant="h5" component="div">
              Number of Dispensers - {site.totaldisp}
            </Typography>
            <Typography variant="h5" component="div">
              Registration Date - {handleDate(site.activation)}
            </Typography>
            <Typography variant="h5" component="div">
              Renewal Date - {handleDate(site.renewal)}
            </Typography>
            <Typography variant="h5" component="div">
              Warranty Date - {handleDate(site.warranty_date)}
            </Typography>
          </CardContent>
        </AccordionSummary>
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
  } else {
    return (
      <Accordion
        sx={{
          m: 1,
          bgcolor: "yellow",
          width: "65%",
          borderRadius: 1,
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
              GP Customer - {site.gp_cust}
            </Typography>
            <Typography variant="h5" component="div">
              Site Address - {site.site_address}
            </Typography>
          </CardContent>
        </AccordionSummary>
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
  }
};

export default Dispcardz;
