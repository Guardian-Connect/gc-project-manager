import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import Dispcards from "./Dispcards";
// import Header from "./Header";
import AppAppBar from "./modules/views/AppAppBar";
// import { format } from "date-fns";
// import { getSomething } from "../api";
// import ResponsiveDrawer from "./Drawer";
// import logo from "../assests/logo.gif";
const Start = ({
  setMessage,
  count,
  setCount,
  searchInput,
  setSearchInput,
}) => {
  const message = JSON.parse(sessionStorage.getItem("dispinf"));
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  // useEffect(() => {
  //   console.log("test", message);
  //   message.map((site) => {
  //     if (site.totaldisp === null) {
  //       setCount(count++);
  //     } else {
  //     }
  //   });
  // }, []);

  return (
    <>
      <>
        <div id="header">
          <AppAppBar
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            count={count}
          />
        </div>
        <div className="App">
          <h2>
            {message
              .filter((client, index) => {
                const clientsAdd = client.address;
                if (clientsAdd.includes(searchInput.toLowerCase())) {
                  return true;
                }
                const clientsId = client.gvrid;
                if (clientsId.includes(searchInput.toLowerCase())) {
                  return true;
                }
                const clientsGp = client.gp;
                if (clientsGp.includes(searchInput.toUpperCase())) {
                  return true;
                }
              })
              .map((site) => (
                <div className="main" key={site.id}>
                  <Dispcards site={site} setCount={setCount} count={count} />
                </div>
              ))}
          </h2>
        </div>
      </>
    </>
  );
};

export default Start;
