import React, { useEffect, useState } from "react";
import Dispcards from "./Dispcards";
import AppAppBar from "./modules/views/AppAppBar";
import { Typography, Card, CardContent, CardActionArea } from "@mui/material";
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

  function handleDate(d) {
    let date = moment.utc(d).format("MM/DD/yyyy");
    return date;
  }

  return (
    <div className="app">
      {console.log(tracker)}
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
          //   const company = client.fm_ticket;
          //   if (company.includes(searchInput.toUpperCase())) {
          //     return true;
          //   }
          //   const siteName = client.s_name.toUpperCase();
          //   if (siteName.includes(searchInput.toUpperCase())) {
          //     return true;
          //   }
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
              width: "75%",
              borderRadius: 1,
              alignText: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
            key={gctix.id}
          >
            <CardActionArea>
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
                  {gctix.fm_ticket != null && (
                    <>Fm Ticket - {gctix.fm_ticket}</>
                  )}
                  {gctix.fm_ticket === null && <>No FM Ticket Listed</>}
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
                    {gctix.awarranty_status === null && (
                      <>No Warranty Status Entered</>
                    )}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {gctix.notes != null && <>Call Notes : {gctix.notes} </>}
                    {gctix.notes === null && <>No Call Notes Entered</>}
                  </Typography>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
    </div>
  );
};
export default Gctrackerdisplay;
