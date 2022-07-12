import React, { useEffect } from "react";
import { Typography, TextField, Button } from "@mui/material";

const Dispmodal = ({ site }) => {
  useEffect(() => {
    setGvr_id(site.gvr_id);
    setGp_cust(site.gp_cust);
  }, []);

  const [gvr_id, setGvr_id] = React.useState(0);
  const [gp_cust, setGp_cust] = React.useState("");
  const handleTextChangeGvr = (e) => {
    setGvr_id(e.target.value);
  };

  const handleTextChangeGp = (e) => {
    setGp_cust(e.target.value);
  };

  const consoleTest = () => {
    console.log(gvr_id, gp_cust);
  };
  return (
    <>
      <TextField
        sx={{ ml: 1, mt: 9, mr: 1 }}
        required
        id="outlined-required"
        label="GVR ID"
        defaultValue={site.gvr_id}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleTextChangeGvr}
      />
      <TextField
        sx={{ ml: 1, mt: 2, mr: 1 }}
        required
        id="outlined-required"
        label="GP Customer Number"
        defaultValue={site.gp_cust}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleTextChangeGp}
      />

      <Button sx={{ mt: 2 }} variant="contained" onClick={consoleTest}>
        Submit
      </Button>
    </>
  );
};

export default Dispmodal;
