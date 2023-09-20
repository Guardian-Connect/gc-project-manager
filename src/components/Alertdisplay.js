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
const Alertdisplay = ({ gctix }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (gctix) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const moment = require("moment");
  let today = moment.utc().format("MM/DD/yyyy");

  if (gctix.gp_ticket != null) {
    return (
      <div key={gctix.id}>
        <Card
          sx={{
            bgcolor: "background.paper",
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
  } else if (gctix.contract_status === "0-FREETRIAL") {
    return (
      <div key={gctix.id}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            p: 1,
            m: 1,
            bgcolor: "red",
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
  } else if (handleDateTwo(gctix.warr) >= handleDateTwo(today)) {
    return (
      <div key={gctix.id}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            p: 1,
            m: 1,
            bgcolor: "#6495ED",
            // width: "100%",
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
              </Typography>{" "}
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
            // width: "100%",
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
              </Typography>{" "}
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
