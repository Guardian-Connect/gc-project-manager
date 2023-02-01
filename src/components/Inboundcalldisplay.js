import React, { useEffect, useState } from "react";
import Trackermodal from "./Trackermodal";
import { findSb, getAllInbound, phoneNumber } from "../api";
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

const Inboundcalldisplay = ({ searchInput, setSearchInput }) => {
  const [message, setMessage] = useState([]);

  useEffect(async () => {
    await getAllInbound()
      .then((response) => {
        setMessage(response.inboundCalls);
      })
      .catch((error) => {
        setMessage(error.message);
      });
  }, []);

  return (
    <div className="apptrack">
      {message
        .filter((client, index) => {
          {
            const clientsGvr = client.gvr_id;
            if (clientsGvr.includes(searchInput.toLowerCase())) {
              return true;
            }
          }
        })
        .map((site) => (
          <Card
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              p: 1,
              m: 1,
              bgcolor: "background.paper",
              width: { md: "83%", lg: "75%" },
              borderRadius: 1,
              alignText: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
            key={site.id}
          >
            <CardActionArea onClick={() => console.log(site)}>
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ alignText: "center" }}
                >
                  GVR ID - {site.gvr_id}
                </Typography>
                <Typography variant="h5" component="div">
                  Call Date - {handleDate(site.date)}
                </Typography>
                <Typography variant="h5" component="div">
                  Call Time - {site.time}
                </Typography>
                <Typography variant="h5" component="div">
                  Caller Name - {site.name}
                </Typography>
                <Typography variant="h5" component="div">
                  Caller Number - {phoneNumber(site.number)}
                </Typography>
                <Typography variant="h5" component="div">
                  Caller Branch - {findSb(site.sb)}
                </Typography>
                <Typography variant="h5" component="div">
                  Problem Type - {site.problem_type}
                </Typography>
                <Typography variant="h5" component="div">
                  Notes - {site.notes}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
    </div>
  );
};
export default Inboundcalldisplay;
