import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { FormControl, Button } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { flushSync } from "react-dom";
import useLocalStorage from "./Export";
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

// React.useEffect(() => {
//   sessionStorage.setItem("newName", JSON.stringify(" "));
// }, []);

const names = [
  { name: "Majors", value: "MAJ0001" },
  { name: "Quick Gas", value: "QUI0003" },
  { name: "Quality Oil", value: "QUA0006" },
  { name: "GPM", value: "GPM0001" },
];

const status = [
  { name: "Notes", value: "N" },
  { name: "Not Completed", value: "X" },
  { name: "Quote Needed", value: "O" },
  { name: "Static", value: "S" },
  { name: "Complete", value: "C" },
];

const phase = [
  { name: "Phase 1", value: "1" },
  { name: "Phase 2", value: "2" },
  { name: "Phase 3", value: "3" },
  { name: "Phase 4", value: "4" },
  { name: "Phase 5", value: "5" },
  { name: "No Phase", value: "0" },
];
export default function Projectdisplaycontrols({
  filters = { filters },
  setFilters = { setFilters },
  tracker = { tracker },
  setTracker = { setTracker },
  handleClear = { handleClear },
  handleClickOne = { handleClickOne },
  handleClickThree = { handleClickThree },
  handleClickFour = { handleClickFour },
  handleClickSeven = { handleClickSeven },
}) {
  const [personName, setPersonName] = React.useState([]);
  const [statusName, setStatusName] = React.useState([]);
  const [phaseName, setPhaseName] = React.useState([]);
  const handleClearTwo = (event) => {
    setPersonName([]);
    setStatusName([]);
    setPhaseName([]);
    handleClear();
  };
  const handleTagCustomer = (event) => {
    let scores = event.target.value;
    for (let i = 0; i < scores.length; i++) {
      if (scores[i] === "MAJ0001") {
        handleClickOne(scores[i]);
      } else if (scores[i] === "QUI0003") {
        handleClickOne(scores[i]);
      } else if (scores[i] === "QUA0006") {
        handleClickOne(scores[i]);
      } else if (scores[i] === "GPM0001") {
        handleClickOne(scores[i]);
      } else if (!scores[i]) {
        console.log("ZERO");
      }
    }
  };

  const handleStatusEvent = (event) => {
    let scores = event.target.value;
    for (let i = 0; i < scores.length; i++) {
      if (scores[i] === "X") {
        handleClickThree(scores[i]);
      } else if (scores[i] === "O") {
        handleClickThree(scores[i]);
      } else if (scores[i] === "S") {
        handleClickThree(scores[i]);
      } else if (scores[i] === "C") {
        handleClickThree(scores[i]);
      } else if (scores[i] === "N") {
        handleClickFour();
      }
    }
  };

  const handlePhaseEvent = (event) => {
    let scores = event.target.value;
    for (let i = 0; i < scores.length; i++) {
      if (scores[i] === "1") {
        handleClickSeven(scores[i]);
      } else if (scores[i] === "2") {
        handleClickSeven(scores[i]);
      } else if (scores[i] === "3") {
        handleClickSeven(scores[i]);
      } else if (scores[i] === "4") {
        handleClickSeven(scores[i]);
      } else if (scores[i] === "5") {
        handleClickSeven(scores[i]);
      } else if (scores[i] === "0") {
        handleClickSeven(scores[i]);
      }
    }
  };

  const handleChangeOne = (event) => {
    handleTagCustomer(event);
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  const handleChangeTwo = (event) => {
    handleStatusEvent(event);
    const {
      target: { value },
    } = event;
    setStatusName(typeof value === "string" ? value.split(",") : value);
  };

  const handleChangeThree = (event) => {
    handlePhaseEvent(event);
    const {
      target: { value },
    } = event;
    setPhaseName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div className="stickytwo">
      <FormControl sx={{ m: 1, width: 250 }}>
        <InputLabel id="demo-multiple-name-label">Name</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChangeOne}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name.name} value={name.value}>
              {name.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, width: 250 }}>
        <InputLabel id="demo-multiple-name-label">Site Status</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
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
      <FormControl sx={{ m: 1, width: 250 }}>
        <InputLabel id="demo-multiple-name-label">Phase</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={phaseName}
          onChange={handleChangeThree}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {phase.map((name) => (
            <MenuItem key={name.name} value={name.value}>
              {name.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ width: "20%", m: 1 }}>
        <Button
          sx={{
            backgroundColor: "white",
            "&:active": {
              backgroundColor: "blue",
            },
            border: "1px solid green",
            color: "blue",
          }}
          onClick={handleClearTwo}
        >
          Clear All
        </Button>
      </FormControl>
    </div>
  );
}
