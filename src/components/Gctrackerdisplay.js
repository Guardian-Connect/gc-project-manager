import React, { useEffect, useState } from "react";
import Trackermodal from "./Trackermodal";
import { handleDateTwo as handleDate } from "../api";
import {
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Button,
  Dialog,
} from "@mui/material";
import { getGcTracker } from "../api";
const moment = require("moment");
const Gctrackerdisplay = ({ setMessage, searchInput, setSearchInput }) => {
  const [tracker, setTracker] = useState([]);

  useEffect(() => {
    getGcTracker().then((resp) => {
      //   console.log(resp.dispinfo, "inbound");
      setTracker(resp.dispinfo);
    });
  }, []);

  const [open, setOpen] = React.useState(false);
  const [gctix, setGctix] = React.useState({});
  const handleClickOpen = (gctix) => {
    setGctix(gctix);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="apptrack">
      {tracker
        .filter((client, index) => {
          const clientsAdd = client.address;
          if (clientsAdd.includes(searchInput.toLowerCase())) {
            return true;
          }
          const clientsId = client.gvr_id;
          if (clientsId.includes(searchInput.toLowerCase())) {
            return true;
          }
          const clientsGp = client.gp;
          if (clientsGp.includes(searchInput.toUpperCase())) {
            return true;
          }
          const clientsGptick = client.gp_ticket;
          if (clientsGptick.includes(searchInput.toUpperCase())) {
            return true;
          }
          const clientsFm = client.fm_ticket;
          if (clientsFm.includes(searchInput.toUpperCase())) {
            return true;
          }
        })
        .map((gctix) => (
          <Card
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              p: 1,
              m: 1,
              bgcolor: "background.paper",
              ...(gctix.status === "Closed" && {
                bgcolor: "#29b6f6",
              }),
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
                  GVR ID - {gctix.gvr_id}
                </Typography>
                <Typography variant="h5" component="div">
                  GP Ticket # {gctix.gp_ticket}
                </Typography>
                <Typography variant="h5" component="div">
                  Ticket Status - {gctix.status}
                </Typography>
                <Typography variant="h5" component="div">
                  {gctix.fm_ticket != "000000" && (
                    <>Fm Ticket - {gctix.fm_ticket}</>
                  )}
                  {gctix.fm_ticket === "000000" && <>No FM Ticket Listed</>}
                </Typography>
                <Typography variant="h5" component="div">
                  {gctix.location != null && <>Site Name - {gctix.location} </>}
                  {gctix.location === null && <>No Site Name Listed</>}
                </Typography>
                <Typography variant="h5" component="div">
                  Dispatch Date - {handleDate(gctix.date)}
                </Typography>
                <Typography variant="h5" component="div">
                  Dispatch Type - {gctix.dispatch_type}
                </Typography>
                <Typography variant="h5" component="div">
                  {gctix.fp != null && (
                    <>Fueling Points Affected - {gctix.fp}</>
                  )}
                  {gctix.fp === null && <>No Fueling Points Listed</>}
                  <Typography variant="h5" component="div">
                    {gctix.atl_po != null && <>ATL PO # {gctix.atl_po} </>}
                    {gctix.atl_po === null && <>No ATL PO Number Entered</>}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {gctix.warranty_status != null && (
                      <>Warranty Status {gctix.warranty_status} </>
                    )}
                    {gctix.warranty_status === null && (
                      <>No Warranty Status Entered</>
                    )}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {gctix.sb != null && <>Service Branch - {gctix.sb} </>}
                    {gctix.asb === null && <>No Service Branch Entered</>}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {gctix.update_notes != null && (
                      <>Ticket Update Notes : {gctix.update_notes} </>
                    )}
                    {gctix.update_notes === null && (
                      <>No Call Update Notes Entered</>
                    )}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {gctix.notes != null && (
                      <>Dispatch Notes : {gctix.notes} </>
                    )}
                    {gctix.notes === null && <>No Dispatch Notes Entered</>}
                  </Typography>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      <Dialog open={open} onClose={handleClose}>
        <Trackermodal gctix={gctix} />
      </Dialog>
    </div>
  );
};
export default Gctrackerdisplay;
