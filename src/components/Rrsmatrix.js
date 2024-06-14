import React, { useEffect, useState } from "react";
import { getSomething } from "../api";
// import { Typography, Card, ButtonBase } from "@mui/material";
import CsvDownload from "react-json-to-csv";
import { getSpecificData, getCompleteData } from "../api/index";
import { useHistory } from "react-router-dom";
import Rrsmodal from "./Rrsmodal";
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
const Rrsmatrix = ({ rrs }) => {
  const [message, setMessage] = useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  // useEffect(async () => {
  //   await getSomething()
  //     .then((response) => {
  //       setMessage(response.rrsmatrix);
  //     })
  //     .catch((error) => {
  //       setMessage(error.message);
  //     });
  // }, []);
  return (
    <Accordion
      sx={{
        m: 1,
        bgcolor: "white",
        // ...(site.quote != "C" && {
        //   bgcolor: "yellow",
        // }),
        width: { md: "83%", lg: "75%" },
      }}
      key={rrs.id}
    >
      <AccordionSummary
        expandIcon={<AddCircleIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <CardContent>
          <Typography variant="h5" component="div">
            Customer Number - {rrs.gp_cust}
          </Typography>
          <Typography variant="h5" component="div">
            Customer Name - {rrs.cus_name}
          </Typography>
          <Typography variant="h5" component="div">
            RRS Info - {rrs.rrs}
          </Typography>
        </CardContent>
      </AccordionSummary>
    </Accordion>
  );
};

export default Rrsmatrix;
