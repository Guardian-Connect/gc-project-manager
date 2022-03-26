import React, { useState } from "react";
import CsvDownload from "react-json-to-csv";
import { CSVLink } from "react-csv";
import { Typography, MenuItem, Menu, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Select from "react-select";
import { getReportData } from "../api";
import useLocalStorage from "./Export";
const Report = ({ children }) => {
  let mockData = JSON.parse(sessionStorage.getItem("mockData"));
  const [startDate, setStartDate] = useState("2022-1-1");
  const [endDate, setEndDate] = useState("2022-1-1");
  const [gpComp, setGpComp] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [buttonState, setButtonState] = useLocalStorage(false);
  const handleStartChange = (e) => {
    setStartDate(e.target.value);
  };
  const handleEndChange = (e) => {
    setEndDate(e.target.value);
  };
  const handleGpChange = async (selectedOption) => {
    setGpComp(selectedOption.value);
    // console.log(gpComp, startDate, endDate);
    // await getReportData(startDate, endDate, gpComp);
  };

  const clickReport = (e) => {
    e.preventDefault();
    setButtonState(true);
    getReportData(startDate, endDate, gpComp).then((resp) => {
      window.location.reload();
    });
  };
  let options = JSON.parse(sessionStorage.getItem("menuItems"));
  // const handleData = (e) => {
  //   console.log("test");
  // };
  return (
    <div className="app">
      <TextField
        id="date"
        label="Start Date"
        type="date"
        defaultValue="2022-01-01"
        value={startDate}
        onChange={handleStartChange}
        sx={{ width: 220, marginTop: 5 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="date"
        label="End Date"
        type="date"
        defaultValue="2022-01-01"
        value={endDate}
        onChange={handleEndChange}
        sx={{ width: 220, marginLeft: 2, marginTop: 5 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <>
        {buttonState ? (
          <Typography
            variant="h4"
            sx={{ width: "100%", flexShrink: 1, marginTop: 10 }}
          >
            <CSVLink
              data={mockData}
              filename={"Guardian Connect DB.csv"}
              className="btn btn-primary"
              target="_blank"
              onClick={() => {
                setButtonState(false);
              }}
            >
              Click to Download CSV
            </CSVLink>
          </Typography>
        ) : (
          <Typography
            variant="h4"
            sx={{ width: 455, flexShrink: 1, marginTop: 3 }}
          >
            <Typography
              variant="h6"
              sx={{ width: 455, flexShrink: 1, marginTop: 3 }}
            >
              <Select
                defaultValue={selectedOption}
                onChange={handleGpChange}
                options={options}
              />
            </Typography>
            <Button
              variant="contained"
              onClick={clickReport}
              sx={{ width: 455, flexShrink: 1, marginTop: 3 }}
            >
              Click to Search for CSV Report
            </Button>
          </Typography>
        )}
      </>
      {/* </Typography> */}
    </div>
  );
};

export default Report;

{
  /* <CsvDownload
          // onClick={(e) => handleData()}
          data={mockData}
          filename="good_data.csv"
          style={{
            boxShadow: "inset 0px 1px 0px 0px #e184f3",
            background: "linear-gradient(to bottom, #c123de 5%, #a20dbd 100%)",
            backgroundColor: "#c123de",
            borderRadius: "6px",
            border: "1px solid #a511c0",
            display: "inline-block",
            cursor: "pointer",
            color: "#ffffff",
            fontSize: "15px",
            fontWeight: "bold",
            padding: "6px 24px",
            textDecoration: "none",
            textShadow: "0px 1px 0px #9b14b3",
          }}
        >
          Click to Download CSV
        </CsvDownload> */
}
