import React from "react";
import {
  Typography,
  Card,
  ButtonBase,
  Button,
  FormControl,
} from "@mui/material";
import Alertdisplay from "./Alertdisplay";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import { getTicketingSearchGp, getTicketingSearchGvr } from "../api";
import CsvDownloadButton from "react-json-to-csv";
const Alertticketlookup = () => {
  const [searchInput, setSearchInput] = React.useState("");
  const [statusName, setStatusName] = React.useState("gvr");
  const [display, setDisplay] = React.useState([]);
  const [error, setError] = React.useState("");
  const [ticket, setTicketing] = React.useState([]);
  let mockData = JSON.parse(sessionStorage.getItem("SearchResult"));

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const status = [
    { name: "GVR ID", value: "gvr" },
    { name: "GP Customer", value: "gp" },
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
    e.preventDefault();
    console.log(site, searchInput);
    if (searchInput <= 0) {
      return;
    } else {
      if (site === "gp") {
        getTicketingSearchGp(searchInput).then((response) => {
          console.log(response);
          if (response.length === 0) {
            setDisplay("Nothing Found, Please Try Again");
          } else if (response.length > 0) {
            setDisplay(response);
          }
        });
      } else if (site === "gvr")
        getTicketingSearchGvr(searchInput).then((response) => {
          console.log(response);
          if (response.length === 0) {
            setError("Nothing Found, Please Try Again");
          } else if (response.length > 0) {
            setDisplay(response);
          }
        });
    }
  };
  return (
    <div className="apptrack">
      <form>
        <FormControl size="small" sx={{ width: 250, ml: 25, mt: 3 }}>
          <InputLabel id="demo-multiple-name-label">Search Area</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            value={statusName}
            onChange={handleChangeTwo}
            input={<OutlinedInput label="Name" />}
            MenuProps={MenuProps}
          >
            {status.map((name) => (
              <MenuItem key={name.name} value={name.value}>
                {name.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          sx={{ mt: 3, ml: 1 }}
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
        <IconButton aria-label="delete" sx={{ mt: 3, ml: 1 }}>
          <SearchIcon onClick={handleClick} />
        </IconButton>
      </form>
      {/* <div className="apptrack"> */}
      {display.length > 0 && (
        <>
          <CsvDownloadButton
            data={mockData}
            filename="Ticketing.csv"
            style={{
              boxShadow: "inset 0px 1px 0px 0px #e184f3",
              background:
                "linear-gradient(to bottom, #c123de 5%, #a20dbd 100%)",
              backgroundColor: "#c123de",
              borderRadius: "6px",
              border: "1px solid white",
              display: "inline-block",
              cursor: "pointer",
              color: "#ffffff",
              fontSize: "15px",
              fontWeight: "bold",
              padding: "6px 24px",
              textDecoration: "none",
              textShadow: "0px 1px 0px #9b14b3",
              marginRight: "10px",
              marginLeft: "50px",
            }}
          >
            Report Download
          </CsvDownloadButton>
        </>
      )}
      {display.map((gctix) => (
        <Alertdisplay gctix={gctix} />
      ))}
      {/* </div> */}
    </div>
  );
};

export default Alertticketlookup;
