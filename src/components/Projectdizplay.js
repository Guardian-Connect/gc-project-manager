import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { flushSync } from "react-dom";
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

const names = [
  { name: "Majors", value: "MAJ0001" },
  { name: "Quick Gas", value: "QUI0003" },
  { name: "Quality Oil", value: "QUA0006" },
];

export default function MultipleSelectCheckmarks({
  filters = { filters },
  setFilters = { setFilters },
  tracker = { tracker },
  setTracker = { setTracker },
  buttonOne = { buttonOne },
  setButtonOne = { setButtonOne },
  buttonTwo = { buttonTwo },
  setButtonTwo = { setButtonTwo },
  buttonThree = { buttonThree },
  setButtonThree = { setButtonThree },
  buttonFour = { buttonFour },
  setButtonFour = { setButtonFour },
  buttonFive = { buttonFive },
  setButtonFive = { setButtonFive },
  buttonSix = { buttonSix },
  setButtonSix = { setButtonSix },
  buttonSeven = { buttonSeven },
  setButtonSeven = { setButtonSeven },
  buttonEight = { buttonEight },
  setButtonEight = { setButtonEight },
  buttonNine = { buttonNine },
  setButtonNine = { setButtonNine },
  buttonTen = { buttonTen },
  setButtonTen = { setButtonTen },
  buttonEleven = { buttonEleven },
  setButtonEleven = { setButtonEleven },
  buttonTwelve = { buttonTwelve },
  setButtonTwelve = { setButtonTwelve },
  buttonThirteen = { buttonThirteen },
  setButtonThirteen = { setButtonThirteen },
  textOne = { textOne },
  setTextOne = { setTextOne },
  textTwo = { textTwo },
  setTextTwo = { setTextTwo },
  textThree = { textThree },
  setTextThree = { setTextThree },
  textFour = { textFour },
  setTextFour = { setTextFour },
  textFive = { textFive },
  setTextFive = { setTextFive },
  textSix = { textSix },
  setTextSix = { setTextSix },
  textSeven = { textSeven },
  setTextSeven = { setTextSeven },
  textEight = { textEight },
  setTextEight = { setTextEight },
  textNine = { textNine },
  setTextNine = { setTextNine },
  textTen = { textTen },
  setTextTen = { setTextTen },
  textEleven = { textEleven },
  setTextEleven = { setTextEleven },
  textTwelve = { textTwelve },
  setTextTwelve = { setTextTwelve },
  textThirteen = { textThirteen },
  setTextThirteen = { setTextThirteen },
  handleClear = { handleClear },
  handleClickOne = { handleClickOne },
  handleClickTwo = { handleClickTwo },
  handleClickThree = { handleClickThree },
  handleClickFour = { handleClickFour },
  handleClickFive = { handleClickFive },
  handlePhaseOne = { handlePhaseOne },
  handlePhaseTwo = { handlePhaseTwo },
  handlePhaseThree = { handlePhaseThree },
  handlePhaseFour = { handlePhaseFour },
  handlePhaseFive = { handlePhaseFive },
  handlePhaseZero = { handlePhaseZero },
  handleClickSix = { handleClickSix },
  handleClickSeven = { handleClickSeven },
}) {
  const [personName, setPersonName] = React.useState([]);
  const [name, setName] = React.useState([]);
  const [checkedState, setCheckedState] = React.useState({
    MAJ0001: false,
    QUI0003: false,
    QUA0006: false,
  });

  const reset = () => {
    setCheckedState({
      MAJ0001: false,
      QUI0003: false,
      QUA0006: false,
    });
    handleClear();
  };
  const handleTag = (event) => {
    console.log(event.target.value[0]);
    const name = [];
    let value = event.target.value[0];
    console.log(typeof value);
    console.log(value === "MAJ0001");
    if (value === "MAJ0001") {
      flushSync(() => {
        setName("Majors");
      });
    } else if (value === "QUI0003") {
      flushSync(() => {
        setName("Quick Gas");
      });
    } else if (value === "QUA0006") {
      flushSync(() => {
        name.push("Quality Oil");
      });
    }
    console.log(name);
    console.log("Name", typeof name);
    setPersonName(
      //   // const {
      //   //   target: { name },
      //   // } = event;
      //   // setPersonName(
      //   //   // On autofill we get a stringified value.
      typeof name === "string" ? name.split(",") : name
    );
  };

  const handleChange = (event) => {
    setCheckedState({
      ...checkedState,
      [event.target.name]: event.target.checked,
    });
    let value = event.target.value;
    if (event.target.checked === true) {
      handleClickOne(value);
    } else reset();
    // if (event.target.value === "MAJ0001") {
    //   handleClickOne();
    // } else if (event.target.value === '')
  };

  return (
    <div className="stickytwo">
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Customer</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleTag}
          input={<OutlinedInput label="Tag" />}
          label="Customer"
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            // <>{console.log(name)}</>
            <MenuItem key={name.name} value={name.value}>
              <Checkbox
                key={name.name}
                value={name.value}
                onChange={handleChange}
                checked={checkedState.name}
                name={name.name}
              />
              <ListItemText primary={name.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
