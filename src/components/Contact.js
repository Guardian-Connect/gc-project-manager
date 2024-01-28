import React from "react";
import { Typography } from "@mui/material";

const Contact = ({ contactInfo }) => {
  return (
    <div className="app">
      <Typography variant="h4" sx={{ width: "100%", flexShrink: 1 }}>
        {contactInfo.map((site) => (
          <div className="main" key={site.id}>
            {site.gp_cust ? (
              <>
                <div>GVR ID - {site.gvr_id}</div>
                <div>Address - {site.site_address}</div>
                <div>RRS - ${site.rrs}</div>
                <div>GP Customer - {site.gp_cust}</div>
                <div>Customer Name - {site.cus_name}</div>
                <div>Email Contact #1 - {site.cus_email1}</div>
                {site.cus_email2 != null && (
                  <div>Email Contact #2 - {site.cus_email2}</div>
                )}
                {site.cus_email3 != null && (
                  <div>Email Contact #3 - {site.cus_email3}</div>
                )}
                {site.cus_email4 != null && (
                  <div>Email Contact #4 - {site.cus_email4}</div>
                )}
                {site.cus_email5 != null && (
                  <div>Email Contact #5 - {site.cus_email5}</div>
                )}
                {site.cus_email6 != null && (
                  <div>Email Contact #6 - {site.cus_email6}</div>
                )}
              </>
            ) : (
              <div>{site.gvr_id}</div>
            )}
          </div>
        ))}
        <Typography variant="h4" sx={{ width: "100%", flexShrink: 1 }}>
          To Exit, Click the Clear/Home Button On The Top Menu. -------^
        </Typography>
      </Typography>
    </div>
  );
};

export default Contact;
