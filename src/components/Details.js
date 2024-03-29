// import React, { useEffect, useState } from "react";
// import Dispcardz from "./Dispcardz";
// import AppAppBar from "./modules/views/AppAppBar";
// import { Typography } from "@mui/material";

// const Details = ({ setMessage, searchInput, setSearchInput }) => {
//   let test = [];
//   const message = JSON.parse(sessionStorage.getItem("specinfo"));
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false);
//     }, 2000);
//   }, []);

//   return (
//     <div className="app">
//       {message
//         .filter((client, index) => {
//           const clientsAdd = client.site_address;
//           if (clientsAdd.includes(searchInput.toLowerCase())) {
//             return true;
//           }
//           const clientsId = client.gvr_id.toString();
//           if (clientsId.includes(searchInput.toLowerCase())) {
//             return true;
//           }
//           const clientsGp = client.gp_cust;
//           if (clientsGp.includes(searchInput.toUpperCase())) {
//             return true;
//           }
//           const company = client.cus_name;
//           if (company.includes(searchInput.toUpperCase())) {
//             return true;
//           }
//           const siteName = client.s_name.toUpperCase();
//           if (siteName.includes(searchInput.toUpperCase())) {
//             return true;
//           }
//         })
//         .map((site) => (
//           <div key={site.id}>
//             {site.id === 5000000 ? (
//               <div className="yellow">
//                 <Typography variant="h4" sx={{ width: "100%", flexShrink: 1 }}>
//                   No Open Installs Found
//                 </Typography>
//               </div>
//             ) : (
//               <Dispcardz site={site} />
//             )}
//           </div>
//         ))}
//     </div>
//   );
// };
// export default Details;
