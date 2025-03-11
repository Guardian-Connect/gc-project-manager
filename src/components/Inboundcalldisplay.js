import React, { useEffect, useState } from "react";
import {
  findSb,
  getAllByAddressInbound,
  getAllByGvrIdInbound,
  getAllInbound,
  phoneNumber,
} from "../api";
import { handleDateTwo as handleDate } from "../api";
import {
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Button,
  Dialog,
  FormControl,
} from "@mui/material";
import { getGcTracker } from "../api";
import Inboundmodal from "./Inboundmodal";
import { useAlert } from "react-alert";
//copy below for search setup
import Select, { SelectChangeEvent } from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputLabel from "@mui/material/InputLabel";
//stop copy
const moment = require("moment");

const Inboundcalldisplay = ({ setHeader }) => {
  const [message, setMessage] = useState([]);
  const [statusName, setStatusName] = React.useState("gvr");
  const [searchInput, setSearchInput] = React.useState("");
  const [page, setPage] = React.useState(2);
  const [searching, setSearching] = React.useState(false);
  const [notFound, setNotFound] = React.useState("");
  // const [open, setOpen] = React.useState(false);
  const user = sessionStorage.getItem("user");
  const alert = useAlert();
  // useEffect(async () => {
  //   await getAllInbound()
  //     .then((response) => {
  //       setMessage(response.inboundCalls);
  //       setHeader("Inbound Calls");
  //     })
  //     .catch((error) => {
  //       setMessage(error.message);
  //     });
  // }, []);

  React.useEffect(() => {
    if (searching != true) {
      getAllInbound()
        .then((resp) => {
          setMessage(resp.inboundCalls);
          setHeader("Inbound Calls");
        })
        .catch((error) => {
          setMessage(error.message);
        });
    } else {
      return;
    }
  }, [page]);

  const status = [
    { name: "GVR ID", value: "gvr" },
    // { name: "Address", value: "address" },
  ];

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleChangeTwo = (e) => {
    setStatusName(e.target.value);
  };
  const handleClick = (e) => {
    let site = statusName;
    // setPage(0);
    e.preventDefault();
    setSearching(true);
    if (searchInput <= 0) {
      return;
    } else {
      if (site === "address") {
        getAllByAddressInbound(searchInput).then((response) => {
          if (response.length === 0) {
            alert.show("Nothing Found, Please Try Again");
          } else if (response.length > 0) {
            console.log(response.length, "Response");
            setMessage(response);
            setPage(0);
          }
        });
      } else if (site === "gvr")
        getAllByGvrIdInbound(searchInput).then((response) => {
          if (response.length === 0) {
            alert.show("Nothing Found, Please Try Again");
          } else if (response.length > 0) {
            setMessage(response);
            setPage(0);
          }
        });
    }
  };

  return (
    <div className="apptrack">
      <div className="stickytwo">
        <div style={{ border: "2px solid grey" }}>
          <FormControl size="small" sx={{ width: 250, ml: 10, mt: 1, mb: 1 }}>
            <InputLabel id="demo-multiple-name-label">Search Area</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              value={statusName}
              onChange={handleChangeTwo}
              input={<OutlinedInput label="Name" />}
              // MenuProps={MenuProps}
            >
              {status.map((name) => (
                <MenuItem key={name.name} value={name.value}>
                  {name.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            sx={{ ml: 1, mt: 1, mb: 1 }}
            id="search-bar"
            className="text"
            onInput={(e) => {
              handleChange(e);
            }}
            label="Enter Customer Info"
            variant="outlined"
            placeholder="Search..."
            size="small"
          />
          <IconButton aria-label="delete" sx={{ ml: 1, mt: 1, mb: 1 }}>
            <SearchIcon onClick={handleClick} />
          </IconButton>
        </div>
        <Typography
          variant="h5"
          component="div"
          sx={{
            m: 1,
            bgcolor: "white",
            ...(notFound.length != 0 && {
              bgcolor: "yellow",
            }),
          }}
        >
          {notFound}
        </Typography>
      </div>

      {message.map((site) => (
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
          {/* <CardActionArea onClick={() => handleClickOpen()}> */}
          <CardActionArea>
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
                {site.number.length >= 2 && (
                  <>Caller Number - {phoneNumber(site.number)}</>
                )}{" "}
                {site.number <= 1 && <></>}
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
      {/* <Dialog open={open} onClose={handleClose}>
        <Inboundmodal />
      </Dialog> */}
    </div>
  );
};
export default Inboundcalldisplay;
