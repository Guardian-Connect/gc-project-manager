import React, { useEffect, useState } from "react";
import AppAppBar from "./modules/views/AppAppBar";
import { getAllByAddress, getSomething, getAllByGvrId } from "../api";
import { useAlert } from "react-alert";
import {
  FormControl,
  Button,
  makeStyles,
  useTheme,
  Typography,
} from "@mui/material";
import Dispcardz from "./Dispcardz";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const Start = ({ count, setCount, setHeader }) => {
  const [message, setMessage] = useState([]);
  const [filters, setFilters] = useState([]);
  const [page, setPage] = useState(1);
  const [button, setButton] = useState("Load More");
  const [previousButton, setPreviousButton] = useState("Load Previous");
  const [statusName, setStatusName] = React.useState("gvr");
  const [searchInput, setSearchInput] = React.useState("");
  const [notFound, setNotFound] = React.useState("");
  const [total, setTotal] = React.useState(0);
  const alert = useAlert();
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleChangeTwo = (e) => {
    setStatusName(e.target.value);
  };

  const handleNextPage = () => {
    setPage((page) => {
      const newPage = page + 1;
      return newPage;
    });
    handleStuff();
  };

  const handleStuff = () => {
    getSomethingNew();
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
      getSomethingNew();
    } else if ((page = 1)) {
      setPage(1);
    }
  };

  const getSomethingNew = async () => {
    await getSomething(page)
      .then((response) => {
        setMessage(response.dispinfo);
      })
      .catch((error) => {
        setMessage(error.message);
      });
  };

  useEffect(async () => {
    await getSomething(page)
      .then((response) => {
        console.log(response.resDisp.length);
        setTotal(response.resDisp.length);
        setMessage(response.dispinfo);
        setHeader("Dispenser Information");
      })
      .catch((error) => {
        setMessage(error.message);
      });
  }, [page]);

  const handleClick = (e) => {
    let site = statusName;
    // setPage(0);
    e.preventDefault();
    if (searchInput <= 0) {
      return;
    } else {
      if (site === "address") {
        getAllByAddress(searchInput).then((response) => {
          if (response.length === 0) {
            alert.show("Nothing Found, Please Try Again");
          } else if (response.length > 0) {
            setMessage(response);
            // setPage(0);
          }
        });
      } else if (site === "gvr")
        getAllByGvrId(searchInput).then((response) => {
          if (response.length === 0) {
            alert.show("Nothing Found, Please Try Again");
          } else if (response.length > 0) {
            setMessage(response);
            // setPage(0);
          }
        });
    }
  };

  // const applyFilters = (message) => {
  //   return message.filter((item) => {
  //     return filters.every((filter) => {
  //       return filter(item);
  //     });
  //   });
  // };

  // const filteredItems = applyFilters(message);

  const status = [
    { name: "GVR ID", value: "gvr" },
    { name: "Address", value: "address" },
  ];

  let allPages = Math.ceil(total / 100) * 100;
  let finalPages = allPages / 100;

  return (
    <div className="apptrack">
      <h2>
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
          <div className="stickytwo" style={{ mb: 5 }}>
            Page # - {page} / {finalPages}
            {message.length === 100 && page != 0 && (
              <Button
                sx={{
                  border: 1,
                  marginBottom: 5,
                  marginLeft: 7,
                  marginTop: 2,
                  borderColor: "white",
                  width: 250,
                }}
                variant="contained"
                onClick={async () => {
                  handleNextPage();
                }}
              >
                {button}
              </Button>
            )}
            {message.length < 100 && page != 0 && (
              <Button
                sx={{
                  border: 1,
                  marginBottom: 5,
                  marginLeft: 7,
                  marginTop: 2,
                  borderColor: "white",
                  width: 250,
                }}
                variant="contained"
              >
                Last Page
              </Button>
            )}
            {page <= 1 ? (
              <Button
                sx={{
                  border: 1,
                  marginLeft: 1,
                  marginBottom: 5,
                  marginTop: 2,
                  borderColor: "white",
                  width: 250,
                }}
                variant="contained"
              >
                First Page
              </Button>
            ) : (
              <Button
                sx={{
                  border: 1,
                  marginLeft: 1,
                  marginBottom: 5,
                  marginTop: 2,
                  borderColor: "white",
                  width: 250,
                }}
                variant="contained"
                onClick={async () => {
                  handlePreviousPage();
                }}
              >
                {previousButton}
              </Button>
            )}
          </div>
        </div>
        {message.map((site) => (
          <>
            <div key={site.id}>
              <Dispcardz site={site} setCount={setCount} count={count} />
            </div>
          </>
        ))}
      </h2>
      {message.length === 100 && page != 0 && (
        <Button
          sx={{
            border: 1,
            marginBottom: 5,
            marginLeft: 7,
            marginTop: 2,
            borderColor: "white",
            width: 250,
          }}
          variant="contained"
          onClick={async () => {
            handleNextPage();
          }}
        >
          {button}
        </Button>
      )}
      {message.length < 100 && page != 0 && (
        <Button
          sx={{
            border: 1,
            marginBottom: 5,
            marginLeft: 7,
            marginTop: 2,
            borderColor: "white",
            width: 250,
          }}
          variant="contained"
        >
          Last Page
        </Button>
      )}
      {page <= 1 ? (
        <Button
          sx={{
            border: 1,
            marginLeft: 1,
            marginBottom: 5,
            marginTop: 2,
            borderColor: "white",
            width: 250,
          }}
          variant="contained"
        >
          First Page
        </Button>
      ) : (
        <Button
          sx={{
            border: 1,
            marginLeft: 1,
            marginBottom: 5,
            marginTop: 2,
            borderColor: "white",
            width: 250,
          }}
          variant="contained"
          onClick={async () => {
            handlePreviousPage();
          }}
        >
          {previousButton}
        </Button>
      )}
    </div>
  );
};

export default Start;
