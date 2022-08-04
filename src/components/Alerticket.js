import React from "react";
import { getTicketing } from "../api";
import Alertdisplay from "./Alertdisplay";
import { handleDateTwo as handleDate } from "../api";
import {
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Button,
  Dialog,
} from "@mui/material";
const Alerticket = ({ searchInput, setSearchInput }) => {
  const [ticket, setTicketing] = React.useState([]);

  React.useEffect(() => {
    getTicketing().then((resp) => {
      setTicketing(resp.dispinfo.rows);
    });
  }, []);
  return (
    <div className="apptrack">
      {ticket
        .filter((client, index) => {
          const clientsId = client.gvr_id;
          if (clientsId.includes(searchInput.toLowerCase())) {
            return true;
          }
          const gcticket = client.ticket_number;
          if (gcticket.includes(searchInput.toLowerCase())) {
            return true;
          }
        })
        .map((gctix) => (
          <Alertdisplay gctix={gctix} />
        ))}
    </div>
  );
};

export default Alerticket;
