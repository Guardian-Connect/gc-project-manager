import React from "react";
import AppAppBar from "./modules/views/AppAppBar";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
const Main = ({
  message,
  setMessage,
  count,
  setCount,
  searchInput,
  setSearchInput,
}) => {
  let history = useHistory();

  return (
    <>
      <div id="header">
        <AppAppBar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          count={count}
        />
      </div>
      <Button
        variant="outlined"
        onClick={() => {
          history.push("/second");
        }}
      >
        Complete List of Sites
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          setSearchInput("MAJ0001");
          history.push("/second");
        }}
      >
        Majors Management
      </Button>
    </>
  );
};

export default Main;
