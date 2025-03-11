import React, { useEffect, useState } from "react";
import Trackermodal from "./Trackermodal";
import { handleDateTwo as handleDate } from "../api";
import { getAllByAddressTracker, getAllByGvrIdTracker } from "../api";
//copy below for search setup
import Select, { SelectChangeEvent } from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputLabel from "@mui/material/InputLabel";
import { useAlert } from "react-alert";
//stop copy
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
const moment = require("moment");
const Gctrackerdisplay = ({ setHeader }) => {
  const [message, setMessage] = useState([]);
  const [filters, setFilters] = useState([]);
  const primary = "white";
  const secondary = "blue";
  const [open, setOpen] = React.useState(false);
  const [gctix, setGctix] = React.useState({});
  const [buttonOne, setButtonOne] = useState(primary);
  const [buttonTwo, setButtonTwo] = useState("yellow");
  const [buttonThree, setButtonThree] = useState(primary);
  const [textOne, setTextOne] = useState(secondary);
  const [textTwo, setTextTwo] = useState(secondary);
  const [textThree, setTextThree] = useState(secondary);
  //copy below to next comment for base search
  const [statusName, setStatusName] = React.useState("gvr");
  const [searchInput, setSearchInput] = React.useState("");
  const [page, setPage] = React.useState(2);
  const [searching, setSearching] = React.useState(false);
  const alert = useAlert();

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
        getAllByAddressTracker(searchInput).then((response) => {
          if (response.length === 0) {
            alert.show("Nothing Found, Please Try Again");
          } else if (response.length > 0) {
            setMessage(response);
            setPage(0);
          }
        });
      } else if (site === "gvr")
        getAllByGvrIdTracker(searchInput).then((response) => {
          if (response.length === 0) {
            alert.show("Nothing Found, Please Try Again");
          } else if (response.length > 0) {
            setMessage(response);
            setPage(0);
          }
        });
    }
  };

  //Copy to here.
  // useEffect(() => {
  //   getGcTracker().then((resp) => {
  //     //   console.log(resp.dispinfo, "inbound");
  //     setMessage(resp.dispinfo);
  //     setHeader("GC Tracker");
  //   });
  // }, [page]);

  useEffect(() => {
    if (searching != true) {
      getGcTracker().then((resp) => {
        setMessage(resp.dispinfo);
        setHeader("GC Tracker");
      });
    } else {
      return;
    }
  }, [page]);

  const handleClickOne = () => {
    setFilters([...filters, (item) => item.status.includes("Closed")]);
    setButtonOne(secondary);
    setTextOne(primary);
  };

  const handleClickTwo = () => {
    setFilters([...filters, (item) => item.status.includes("Open")]);
    setButtonTwo(secondary);
    setTextTwo(primary);
  };

  const handleClickThree = () => {
    setFilters([...filters, (item) => item.dispatch_type.includes("Install")]);
    setButtonThree(secondary);
    setTextThree(primary);
  };

  const handleClear = () => {
    setFilters([]);
    setSearchInput("");
    setButtonOne(primary);
    setButtonTwo("yellow");
    setButtonThree(primary);
    setTextOne(secondary);
    setTextTwo(secondary);
    setTextThree(secondary);
  };

  const handleClickOpen = (gctix) => {
    setGctix(gctix);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
      </div>
      {/* <FormControl sx={{ width: "20%", m: 1 }}>
          <Button
            sx={{
              backgroundColor: buttonThree,
              border: "1px solid green",
              color: textThree,
            }}
            onClick={handleClickThree}
          >
            Install Tickets
          </Button>
        </FormControl>
        <FormControl sx={{ width: "20%", m: 1 }}>
          <Button
            sx={{
              backgroundColor: buttonOne,
              border: "1px solid green",
              color: textOne,
            }}
            onClick={handleClickOne}
          >
            Closed Tickets
          </Button>
        </FormControl>
        <FormControl sx={{ width: "20%", m: 1 }}>
          <Button
            sx={{
              backgroundColor: buttonTwo,
              border: "1px solid green",
              color: textTwo,
            }}
            onClick={handleClickTwo}
          >
            Open Tickets
          </Button>
        </FormControl>
        <FormControl sx={{ width: "15%", m: 1 }}>
          <Button
            sx={{
              backgroundColor: "white",
              "&:active": {
                backgroundColor: "blue",
              },
              border: "1px solid green",
              color: "blue",
            }}
            onClick={handleClear}
          >
            Clear
          </Button>
        </FormControl> */}

      {message.map((gctix) => (
        <div className="Gctrackerdisplay">
          <Card
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              p: 1,
              m: 1,
              bgcolor: "yellow",
              ...(gctix.status === "Closed" && {
                bgcolor: "background.paper",
              }),
              width: { md: "83%", lg: "75%" },
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
                    {gctix.atl_po != null && <>GC Ticket # {gctix.atl_po} </>}
                    {gctix.atl_po === null && <>No GC Ticket Number Entered</>}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {gctix.parts != null && (
                      <>Part Number Used - {gctix.parts}</>
                    )}
                    {gctix.parts === null && <></>}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {gctix.part_desc != null && (
                      <>Part Description - {gctix.part_desc}</>
                    )}
                    {gctix.parts === null && <></>}
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
                    {gctix.email != null && <>Email Status - {gctix.email} </>}
                    {gctix.email === null && <>No Email Status Needed</>}
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
        </div>
      ))}
      <Dialog open={open} onClose={handleClose}>
        <Trackermodal gctix={gctix} />
      </Dialog>
    </div>
  );
};
export default Gctrackerdisplay;
