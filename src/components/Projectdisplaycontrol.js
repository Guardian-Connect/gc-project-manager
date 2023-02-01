import React from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Box,
  Button,
} from "@mui/material";
const Projectdisplaycontrol = ({
  filters,
  setFilters,
  tracker,
  setTracker,
  buttonOne,
  setButtonOne,
  buttonTwo,
  setButtonTwo,
  buttonThree,
  setButtonThree,
  buttonFour,
  setButtonFour,
  buttonFive,
  setButtonFive,
  buttonSix,
  setButtonSix,
  buttonSeven,
  setButtonSeven,
  buttonEight,
  setButtonEight,
  buttonNine,
  setButtonNine,
  buttonTen,
  setButtonTen,
  buttonEleven,
  setButtonEleven,
  textOne,
  setTextOne,
  textTwo,
  setTextTwo,
  textThree,
  setTextThree,
  textFour,
  setTextFour,
  textFive,
  setTextFive,
  textSix,
  setTextSix,
  textSeven,
  setTextSeven,
  textEight,
  setTextEight,
  textNine,
  setTextNine,
  textTen,
  setTextTen,
  textEleven,
  setTextEleven,
  phase,
  setPhase,
  handleClear,
  handleClickOne,
  handleClickTwo,
  handleClickThree,
  handleClickFour,
  handleClickFive,
  handlePhaseOne,
  handlePhaseTwo,
  handlePhaseThree,
  handlePhaseFour,
  handlePhaseFive,
  handlePhaseZero,
  phaseOne,
  setPhaseOne,
}) => {
  return (
    <>
      <div className="stickytwo">
        <FormControl sx={{ width: "25%", m: 1 }}>
          <Button
            sx={{
              backgroundColor: buttonOne,
              border: "1px solid green",
              color: textOne,
              "@media(min-width:768px)": {
                width: "120%",
              },
            }}
            onClick={handleClickOne}
          >
            Major's
          </Button>
        </FormControl>
        <FormControl sx={{ width: "25%", m: 1 }}>
          <Button
            sx={{
              backgroundColor: buttonTwo,
              border: "1px solid green",
              color: textTwo,
              "@media(min-width:768px)": {
                width: "120%",
              },
            }}
            onClick={handleClickTwo}
          >
            Quick Gas / Susie Q's
          </Button>
        </FormControl>
      </div>

      <div className="sticky">
        <FormControl sx={{ width: "20%", m: 1 }}>
          <Button
            sx={{
              backgroundColor: buttonThree,
              border: "1px solid green",
              color: textThree,
            }}
            onClick={handleClickThree}
          >
            Notes
          </Button>
        </FormControl>
        <FormControl sx={{ width: "20%", m: 1 }}>
          <Button
            sx={{
              backgroundColor: buttonFour,
              border: "1px solid green",
              color: textFour,
            }}
            onClick={handleClickFour}
          >
            Not Completed
          </Button>
        </FormControl>
        <FormControl sx={{ width: "20%", m: 1 }}>
          <Button
            sx={{
              backgroundColor: buttonFive,
              border: "1px solid green",
              color: textFive,
            }}
            onClick={handleClickFive}
          >
            Quotes Needed
          </Button>
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
            onClick={handleClear}
          >
            Clear
          </Button>
        </FormControl>
      </div>
      <div className="stickythree">
        <FormControl sx={{ width: "15%", m: 1 }}>
          <Button
            sx={{
              backgroundColor: buttonSix,
              border: "1px solid green",
              color: textSix,
            }}
            onClick={handlePhaseOne}
          >
            Phase 1
          </Button>
        </FormControl>
        <FormControl sx={{ width: "15%", m: 1 }}>
          <Button
            sx={{
              backgroundColor: buttonSeven,
              border: "1px solid green",
              color: textSeven,
            }}
            onClick={handlePhaseTwo}
          >
            Phase 2
          </Button>
        </FormControl>
        <FormControl sx={{ width: "15%", m: 1 }}>
          <Button
            sx={{
              backgroundColor: buttonEight,
              border: "1px solid green",
              color: textEight,
            }}
            onClick={handlePhaseThree}
          >
            Phase 3
          </Button>
        </FormControl>
        <FormControl sx={{ width: "15%", m: 1 }}>
          <Button
            sx={{
              backgroundColor: buttonNine,
              border: "1px solid green",
              color: textNine,
            }}
            onClick={handlePhaseFour}
          >
            Phase 4
          </Button>
        </FormControl>
        <FormControl sx={{ width: "15%", m: 1 }}>
          <Button
            sx={{
              backgroundColor: buttonTen,
              border: "1px solid green",
              color: textTen,
            }}
            onClick={handlePhaseFive}
          >
            Phase 5
          </Button>
        </FormControl>
        <FormControl sx={{ width: "15%", m: 1 }}>
          <Button
            sx={{
              backgroundColor: buttonEleven,
              border: "1px solid green",
              color: textEleven,
            }}
            onClick={handlePhaseZero}
          >
            No Phase
          </Button>
        </FormControl>
      </div>
    </>
  );
};

export default Projectdisplaycontrol;
