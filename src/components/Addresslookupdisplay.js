import React from "react";
import { Typography, Card, CardContent, Button } from "@mui/material";

const Addresslookupdisplay = ({ display }) => {
  return (
    <div>
      <CardContent>
        <div>
          {display.map((site, index) => (
            <div className="card">
              <div>
                {site.gvr_id != "Nothing Found, Please Try Again" && (
                  <>GVR ID : {site.gvr_id}</>
                )}
              </div>
              <div>
                {site.gvr_id === "Nothing Found, Please Try Again" && (
                  <>Nothing Found, Please Try Again</>
                )}
              </div>
              <div>
                {site.gvr_id != "Nothing Found, Please Try Again" && (
                  <>
                    Site Address : {site.site_address}, {site.site_address_city}
                  </>
                )}
              </div>
              <div>
                {site.gvr_id != "Nothing Found, Please Try Again" && (
                  <>Provisioning Date : {site.prov_date}</>
                )}
              </div>
              <div>{site.decom_date === null && <></>}</div>
              <div>
                {site.decom_date != null && (
                  <>Decommission Date - {site.decom_date}</>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </div>
  );
};

export default Addresslookupdisplay;
