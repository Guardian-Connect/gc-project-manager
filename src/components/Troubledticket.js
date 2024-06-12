import React from "react";
import { getTicketing } from "../api";
import Alertdisplay from "./Alertdisplay";
import { handleDateTwo as handleDate, getTroubled } from "../api";
import {
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Button,
  Dialog,
} from "@mui/material";
import Troubleddisplay from "./Troubleddisplay";

const Troubledticket = ({ searchInput, setSearchInput }) => {
  const [ticket, setTicketing] = React.useState([]);

  React.useEffect(() => {
    getTroubled().then((resp) => {
      console.log(resp.dispinfo.rows);
      setTicketing(resp.dispinfo.rows);
    });
  }, []);
  return (
    <div className="apptrack">
      {ticket
        .filter((client, index) => {
          const clientsId = client.gvr_id.toString();
          if (clientsId.includes(searchInput.toLowerCase())) {
            return true;
          }
          const gcticket = client.ticket_number;
          if (gcticket.includes(searchInput.toLowerCase())) {
            return true;
          }
        })
        .map((gctix) => (
          <Troubleddisplay gctix={gctix} />
        ))}
    </div>
  );
};

export default Troubledticket;
