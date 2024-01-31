import React from "react";
import {
  Typography,
  Card,
  ButtonBase,
  Button,
  FormControl,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import { getSitesGvrid } from "../api";
import { getSitesAddress } from "../api";
import Addresslookupdisplay from "./Addresslookupdisplay";

const Addresslookup = () => {
  const [searchInput, setSearchInput] = React.useState("");
  const [statusName, setStatusName] = React.useState("address");
  const [display, setDisplay] = React.useState([]);
  const [error, setError] = React.useState("");

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
    if (searchInput <= 0) {
      return;
    } else {
      if (site === "address") {
        getSitesAddress(searchInput).then((response) => {
          if (response.length === 0) {
            setDisplay("Nothing Found, Please Try Again");
          } else if (response.length > 0) {
            setDisplay(response);
          }
        });
      } else if (site === "gvr")
        getSitesGvrid(searchInput).then((response) => {
          if (response.length === 0) {
            setError("Nothing Found, Please Try Again");
          } else if (response.length > 0) {
            setDisplay(response);
          }
        });
    }
  };

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
    { name: "Address", value: "address" },
  ];

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
          label="Enter Customer Address"
          variant="outlined"
          placeholder="Search..."
          size="small"
        />
        <IconButton aria-label="delete" sx={{ mt: 3, ml: 1 }}>
          <SearchIcon onClick={handleClick} />
        </IconButton>
      </form>
      {/* {console.log(display.length)} */}
      <Addresslookupdisplay display={display} />
    </div>
  );
};

export default Addresslookup;
