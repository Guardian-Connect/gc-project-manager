import React from "react";
import { handleDateTwo as handleDate, deleteAlert } from "../api";
import {
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Button,
  Dialog,
} from "@mui/material";
import Alertmodal from "./Alertmodal";
const Alertdisplay = ({ gctix }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (gctix) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  if (gctix.gp_ticket != null) {
    return (
      <div key={gctix.id}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            p: 1,
            m: 1,
            bgcolor: "background.paper",
            width: "75%",
            borderRadius: 1,
            alignText: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
          key={gctix.id}
        >
          <CardActionArea onClick={() => handleClickOpen(gctix)}>
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{ alignText: "center" }}
              >
                Site Name - {gctix.s_name}
              </Typography>
              <Typography variant="h5" component="div">
                GVR ID - {gctix.gvr_id}
              </Typography>
              <Typography variant="h5" component="div">
                Address ID - {gctix.add_id}
              </Typography>
              <Typography variant="h5" component="div">
                Warranty Date - {handleDate(gctix.warr)}
              </Typography>
              <Typography variant="h5" component="div">
                Dashboard Ticket # {gctix.ticket_number}
              </Typography>
              <Typography variant="h5" component="div">
                Alert Status - {gctix.status}
              </Typography>
              <Typography variant="h5" component="div">
                Address & City - {gctix.address}, {gctix.city}
              </Typography>
              <Typography variant="h5" component="div">
                Alert Resolved Date - {handleDate(gctix.date)}
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
                Dashboard Status - {gctix.status}
              </Typography>
              <Typography variant="h5" component="div">
                {gctix.gp_ticket != null && <>GP Ticket # {gctix.gp_ticket} </>}
                {gctix.gp_ticket === null && <>No GP Ticket Number Entered</>}
              </Typography>
              <Typography variant="h5" component="div">
                {gctix.sr_number != null && (
                  <>Gilbarco SR # {gctix.sr_number} </>
                )}
                {gctix.sr_number === null && <>No Gilbarco SR Number Entered</>}
              </Typography>
              <Typography variant="h5" component="div">
                {gctix.confirmation_number != null && (
                  <>Gilbarco Confirmation # {gctix.confirmation_number} </>
                )}
                {gctix.confirmation_number === null && (
                  <>No Gilbarco Confirmation Number Entered</>
                )}
              </Typography>
              <Typography variant="h5" component="div">
                {gctix.majors_rrs != null && (
                  <>Majors RRS {gctix.majors_rrs} </>
                )}
              </Typography>
              <Typography variant="h5" component="div">
                {gctix.parkers_rrs != null && (
                  <>Parkers RRS {gctix.parkers_rrs} </>
                )}
              </Typography>
              <Typography variant="h5" component="div">
                {gctix.rrs_charges != null && (
                  <>Other RRS Charges {gctix.rrs_charges} </>
                )}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Dialog open={open} onClose={handleClose}>
          <Alertmodal gctix={gctix} />
        </Dialog>
      </div>
    );
  } else {
    return (
      <div key={gctix.id}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            p: 1,
            m: 1,
            bgcolor: "yellow",
            width: "75%",
            borderRadius: 1,
            alignText: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
          key={gctix.id}
        >
          <CardActionArea onClick={() => handleClickOpen(gctix)}>
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{ alignText: "center" }}
              >
                Site Name - {gctix.s_name}
              </Typography>
              <Typography variant="h5" component="div">
                GVR ID - {gctix.gvr_id}
              </Typography>
              <Typography variant="h5" component="div">
                Address ID - {gctix.add_id}
              </Typography>
              <Typography variant="h5" component="div">
                Warranty Date - {handleDate(gctix.warr)}
              </Typography>
              <Typography variant="h5" component="div">
                Dashboard Ticket # {gctix.ticket_number}
              </Typography>
              <Typography variant="h5" component="div">
                Alert Status - {gctix.status}
              </Typography>
              <Typography variant="h5" component="div">
                Address & City - {gctix.address}, {gctix.city}
              </Typography>
              <Typography variant="h5" component="div">
                Alert Resolved Date - {handleDate(gctix.date)}
              </Typography>
              <Typography variant="h5" component="div">
                Dispenser Affected - #{gctix.fueling_position}
              </Typography>
              <Typography variant="h5" component="div">
                Component Affected - {gctix.component_name}
              </Typography>
              <Typography variant="h5" component="div">
                Cause - {gctix.cause}
              </Typography>
              <Typography variant="h5" component="div">
                Dashboard Status - {gctix.status}
              </Typography>
              <Typography variant="h5" component="div">
                {gctix.gp_ticket != null && <>GP Ticket # {gctix.gp_ticket} </>}
                {gctix.gp_ticket === null && <>No GP Ticket Number Entered</>}
              </Typography>
              <Typography variant="h5" component="div">
                {gctix.sr_number != null && (
                  <>Gilbarco SR # {gctix.sr_number} </>
                )}
                {gctix.sr_number === null && <>No Gilbarco SR Number Entered</>}
              </Typography>
              <Typography variant="h5" component="div">
                {gctix.confirmation_number != null && (
                  <>Gilbarco Confirmation # {gctix.confirmation_number} </>
                )}
                {gctix.confirmation_number === null && (
                  <>No Gilbarco Confirmation Number Entered</>
                )}
              </Typography>
              <Typography variant="h5" component="div">
                {gctix.majors_rrs != null && <>Majors RRS </>}
              </Typography>
              <Typography variant="h5" component="div">
                {gctix.parkers_rrs != null && <>Parkers RRS </>}
              </Typography>
              <Typography variant="h5" component="div">
                {gctix.rrs_charges != null && <>Other RRS Charges</>}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Dialog open={open} onClose={handleClose}>
          <Alertmodal gctix={gctix} />
        </Dialog>
      </div>
    );
  }
};

export default Alertdisplay;
