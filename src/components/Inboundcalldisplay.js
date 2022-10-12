import React, { useEffect, useState } from "react";
import Trackermodal from "./Trackermodal";
import { getAllInbound } from "../api";
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
const Inboundcalldisplay = ({ setMessage, searchInput, setSearchInput }) => {
  return <div className="apptrack">Inbound</div>;
};
export default Inboundcalldisplay;
