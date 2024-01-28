import React, { useEffect, useState } from "react";
import Dispcardz from "./Dispcardz";
import { getSomething } from "../api";
import Projectdisplaycontrols from "./Projectdisplaycontrols";
import { makeStyles } from "@mui/styles";
import { getGcTracker } from "../api";
import { handleDateTwo as handleDate } from "../api";
import {
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Button,
  Dialog,
  FormControl,
} from "@mui/material";
import Gctrackerdisplay from "./Gctrackerdisplay";

const Projectdisplay = ({ searchInput, setSearchInput }) => {
  // const primary = "white";
  // const secondary = "blue";
  // const [filters, setFilters] = useState([]);
  // const [tracker, setTracker] = useState([]);
  // const useStyles = makeStyles((theme) => ({
  //   formControl: {
  //     minWidth: 226,
  //   },
  // }));
  // const classes = useStyles();
  // useEffect(() => {
  //   getSomething().then((resp) => {
  //     setTracker(resp.dispinfo);
  //   });
  // }, []);

  // const handleClear = () => {
  //   setFilters([]);
  //   setSearchInput("");
  // };
  // const handleClickOne = (value) => {
  //   if (typeof value[0] === "undefined") {
  //     setFilters([]);
  //   } else {
  //     setFilters([...filters, (item) => item.gp_cust.includes(value)]);
  //   }
  // };

  // const handleClickThree = (value) => {
  //   setFilters([...filters, (item) => item.quote.includes(value)]);
  // };

  // const handleClickFour = () => {
  //   setFilters([...filters, (item) => !item.notes.includes("X")]);
  // };

  // const handleClickSeven = (value) => {
  //   setFilters([...filters, (item) => item.phase.includes(value)]);
  // };

  // const applyFilters = (tracker) => {
  //   return tracker.filter((item) => {
  //     return filters.every((filter) => {
  //       return filter(item);
  //     });
  //   });
  // };

  // const filteredItems = applyFilters(tracker);

  useEffect(() => {
    getGcTracker().then((resp) => {
      //   console.log(resp.dispinfo, "inbound");
      setMessage(resp.dispinfo);
    });
  }, []);
  const [message, setMessage] = useState([]);

  return (
    <>
      {message.dispatch_type === "Install - Repair" && (
        <Gctrackerdisplay
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      )}
    </>

    // <div className="apptrack">
    //   {/* {console.log(message)} */}
    //   {message
    //     .filter((client, index) => {
    //       // const clientsAdd = client.address;
    //       // if (clientsAdd. === ) {
    //       //   return true;
    //       // }
    //       const clientsId = client.gvr_id.toString();
    //       if (clientsId.includes(searchInput.toLowerCase())) {
    //         return true;
    //       }
    //       const clientsGp = client.gp;
    //       if (clientsGp.includes(searchInput.toUpperCase())) {
    //         return true;
    //       }
    //       const clientsGptick = client.gp_ticket;
    //       if (clientsGptick.includes(searchInput.toUpperCase())) {
    //         return true;
    //       }
    //       const clientsFm = client.fm_ticket;
    //       if (clientsFm.includes(searchInput.toUpperCase())) {
    //         return true;
    //       }
    //     })
    //     .map((gctix) => (
    //       <div className="Gctrackerdisplay">
    //         {console.log(gctix.dispatch_type === "Install - Repair")}
    //         {gctix.dispatch_type === "Install - Repair" && (
    //           <Card
    //             sx={{
    //               display: "flex",
    //               flexDirection: "row",
    //               flexWrap: "wrap",
    //               p: 1,
    //               m: 1,
    //               bgcolor: "yellow",
    //               ...(gctix.status === "Closed" && {
    //                 bgcolor: "background.paper",
    //               }),
    //               width: { md: "83%", lg: "75%" },
    //               borderRadius: 1,
    //               alignText: "center",
    //               alignItems: "center",
    //               justifyContent: "center",
    //             }}
    //             key={gctix.id}
    //           >
    //             <CardActionArea>
    //               <CardContent>
    //                 <Typography
    //                   variant="h5"
    //                   component="div"
    //                   sx={{ alignText: "center" }}
    //                 >
    //                   GVR ID - {gctix.gvr_id}
    //                 </Typography>
    //                 <Typography variant="h5" component="div">
    //                   GP Ticket # {gctix.gp_ticket}
    //                 </Typography>
    //                 <Typography variant="h5" component="div">
    //                   Ticket Status - {gctix.status}
    //                 </Typography>
    //                 <Typography variant="h5" component="div">
    //                   {gctix.fm_ticket != "000000" && (
    //                     <>Fm Ticket - {gctix.fm_ticket}</>
    //                   )}
    //                   {gctix.fm_ticket === "000000" && <>No FM Ticket Listed</>}
    //                 </Typography>
    //                 <Typography variant="h5" component="div">
    //                   {gctix.location != null && (
    //                     <>Site Name - {gctix.location} </>
    //                   )}
    //                   {gctix.location === null && <>No Site Name Listed</>}
    //                 </Typography>
    //                 <Typography variant="h5" component="div">
    //                   Dispatch Date - {handleDate(gctix.date)}
    //                 </Typography>
    //                 <Typography variant="h5" component="div">
    //                   Dispatch Type - {gctix.dispatch_type}
    //                 </Typography>
    //                 <Typography variant="h5" component="div">
    //                   {gctix.fp != null && (
    //                     <>Fueling Points Affected - {gctix.fp}</>
    //                   )}
    //                   {gctix.fp === null && <>No Fueling Points Listed</>}
    //                   <Typography variant="h5" component="div">
    //                     {gctix.atl_po != null && (
    //                       <>GC Ticket # {gctix.atl_po} </>
    //                     )}
    //                     {gctix.atl_po === null && (
    //                       <>No GC Ticket Number Entered</>
    //                     )}
    //                   </Typography>
    //                   <Typography variant="h5" component="div">
    //                     {gctix.parts != null && (
    //                       <>Part Number Used - {gctix.parts}</>
    //                     )}
    //                     {gctix.parts === null && <></>}
    //                   </Typography>
    //                   <Typography variant="h5" component="div">
    //                     {gctix.part_desc != null && (
    //                       <>Part Description - {gctix.part_desc}</>
    //                     )}
    //                     {gctix.parts === null && <></>}
    //                   </Typography>
    //                   <Typography variant="h5" component="div">
    //                     {gctix.warranty_status != null && (
    //                       <>Warranty Status {gctix.warranty_status} </>
    //                     )}
    //                     {gctix.warranty_status === null && (
    //                       <>No Warranty Status Entered</>
    //                     )}
    //                   </Typography>
    //                   <Typography variant="h5" component="div">
    //                     {gctix.sb != null && <>Service Branch - {gctix.sb} </>}
    //                     {gctix.asb === null && <>No Service Branch Entered</>}
    //                   </Typography>
    //                   <Typography variant="h5" component="div">
    //                     {gctix.update_notes != null && (
    //                       <>Ticket Update Notes : {gctix.update_notes} </>
    //                     )}
    //                     {gctix.update_notes === null && (
    //                       <>No Call Update Notes Entered</>
    //                     )}
    //                   </Typography>
    //                   <Typography variant="h5" component="div">
    //                     {gctix.notes != null && (
    //                       <>Dispatch Notes : {gctix.notes} </>
    //                     )}
    //                     {gctix.notes === null && <>No Dispatch Notes Entered</>}
    //                   </Typography>
    //                 </Typography>
    //               </CardContent>
    //             </CardActionArea>
    //           </Card>
    //         )}
    //         <Dialog open={open} onClose={handleClose}>
    //           <Trackermodal gctix={gctix} />
    //         </Dialog>
    //         {gctix.dispatch_type != "Install - Repair" && <></>}
    //       </div>
    //     ))}
    // </div>
  );
};

export default Projectdisplay;
