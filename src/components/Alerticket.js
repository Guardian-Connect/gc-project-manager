import React from "react";
import { getTicketing } from "../api";
import Alertdisplay from "./Alertdisplay";
import { getAllByAddressTicketing, getAllByGvrIdTicketing } from "../api";
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
const Alerticket = ({ setHeader }) => {
  const [message, setMessage] = React.useState([]);
  // React.useEffect(() => {
  //   getTicketing().then((resp) => {
  //     setMessage(resp.dispinfo.rows);
  //     setHeader("Alert Tickets");
  //   });
  // }, []);
  const alert = useAlert();
  const [statusName, setStatusName] = React.useState("gvr");
  const [searchInput, setSearchInput] = React.useState("");
  const [page, setPage] = React.useState(2);
  const [searching, setSearching] = React.useState(false);

  React.useEffect(() => {
    if (searching != true) {
      getTicketing().then((resp) => {
        setMessage(resp.dispinfo.rows);
        setHeader("Alert Tickets");
      });
    } else {
      return;
    }
  }, [page]);

  const status = [
    { name: "GVR ID", value: "gvr" },
    { name: "Address", value: "address" },
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
        getAllByAddressTicketing(searchInput).then((response) => {
          if (response.length === 0) {
            alert.show("Nothing Found, Please Try Again");
          } else if (response.length > 0) {
            console.log(response, "Response");
            setMessage(response);
            setPage(0);
          }
        });
      } else if (site === "gvr")
        getAllByGvrIdTicketing(searchInput).then((response) => {
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
      </div>
      {message.map((gctix) => (
        <>
          <Alertdisplay gctix={gctix} />
        </>
      ))}
    </div>
  );
};

export default Alerticket;
