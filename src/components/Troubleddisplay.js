import React from "react";
import {
  handleDateTwo as handleDate,
  handleDate as handleDateTwo,
} from "../api";
import {
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Button,
  Dialog,
} from "@mui/material";
import Alertmodal from "./Alertmodal";
import Troubledmodal from "./Troubledmodal";

const Troubleddisplay = ({ gctix }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (gctix) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const moment = require("moment");
  let today = moment.utc().format("MM/DD/yyyy");
  return (
    <div>
      {" "}
      <div key={gctix.id}>
        <Card
          sx={{
            bgcolor: "yellow",
            ...(handleDateTwo(gctix.warr) >= handleDateTwo(today) && {
              bgcolor: "#6495ED",
            }),
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            p: 1,
            m: 1,
            width: { md: "90%", lg: "75%" },
            borderRadius: 1,
            alignText: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
          key={gctix.id}
        >
          <CardActionArea onClick={() => handleClickOpen(gctix)}>
            <CardContent>
              {/* <Typography
                variant="h5"
                component="div"
                sx={{ alignText: "center" }}
              >
                Site Name - {gctix.s_name}
              </Typography> */}
              <Typography variant="h5" component="div">
                GVR ID - {gctix.gvr_id}
              </Typography>
              <Typography variant="h5" component="div">
                {gctix.warr_gvr_id === null && <></>}
                {gctix.warr_gvr_id != null && (
                  <>Warranty GVR ID - {gctix.warr_gvr_id} </>
                )}
              </Typography>
              <Typography variant="h5" component="div">
                Address ID - {gctix.add_id}
              </Typography>
              <Typography variant="h5" component="div">
                GP Cust - {gctix.gp_cust}
              </Typography>
              <Typography variant="h5" component="div">
                {gctix.rrs != null &&
                  gctix.rrs != "Plus" &&
                  gctix.rrs != "Premium" && (
                    <>RRS Charge Amount - {gctix.rrs}</>
                  )}
                {gctix.rrs === "Plus" && <>Plus Customer - Free Reboot</>}
                {gctix.rrs === "Premium" && <>Premium Customer - Free Reboot</>}
                {gctix.rrs === null && <>No RRS Fees Found For Customer</>}
              </Typography>

              <Typography variant="h5" component="div">
                Warranty Date - {handleDate(gctix.warr)}
              </Typography>
              <Typography variant="h5" component="div">
                Alert Resolved Date - {handleDate(gctix.date)}
              </Typography>
              <Typography variant="h5" component="div">
                Dashboard Ticket # {gctix.ticket_number}
              </Typography>

              <Typography variant="h5" component="div">
                Fueling Point Affected - #{gctix.fueling_position}
              </Typography>
              <Typography variant="h5" component="div">
                Component Affected - {gctix.component_name}
              </Typography>
              <Typography variant="h5" component="div">
                Cause - {gctix.cause}
              </Typography>
              <Typography variant="h5" component="div">
                {gctix.cus_notification === null && (
                  <>No Customer Contact Sent</>
                )}
                {gctix.cus_notification != null && (
                  <>Customer Notified - {gctix.cus_notification}</>
                )}
              </Typography>
              <Typography variant="h5" component="div">
                {gctix.date_notified === null && <>No Customer Contact Date</>}
                {gctix.date_notified != null && (
                  <>Customer Notified - {handleDate(gctix.date_notified)}</>
                )}
              </Typography>
              <Typography variant="h5" component="div">
                {gctix.next_date === null && <>No Follow Up Date</>}
                {gctix.next_date != null && (
                  <>Next Follow Up Date - {handleDate(gctix.next_date)}</>
                )}
              </Typography>
              <Typography variant="h5" component="div">
                {gctix.notes === null && <>No Notes</>}
                {gctix.notes != null && <>Notes - {gctix.notes}</>}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Dialog open={open} onClose={handleClose}>
          <Troubledmodal gctix={gctix} />
        </Dialog>
      </div>
    </div>
  );
};

export default Troubleddisplay;
