import React from "react";
import { Typography } from "@mui/material";
const Dispcards = ({ site }) => {
  // console.log(site);
  return (
    <>
      {/* <div>GVR ID - {site.gvrid}</div> */}
      {/* <div>{site.disp1}</div> */}
      {site.disp1 != null && (
        <div className="disp">
          <Typography variant="h4">
            <div>{site.disp1}</div> <div className="grades">{site.grades1}</div>
          </Typography>
        </div>
      )}
      {site.disp2 != null && (
        <div className="disp">
          <Typography variant="h4">
            <div>{site.disp2}</div> <div className="grades">{site.grades2}</div>
          </Typography>
        </div>
      )}
      {site.disp3 != null && (
        <div className="disp">
          <Typography variant="h4">
            <div>{site.disp3}</div> <div className="grades">{site.grades3}</div>
          </Typography>
        </div>
      )}
      {site.disp4 != null && (
        <div className="disp">
          <Typography variant="h4">
            <div>{site.disp4}</div> <div className="grades">{site.grades4}</div>
          </Typography>
        </div>
      )}
      {site.disp5 != null && (
        <div className="disp">
          <Typography variant="h4">
            <div>{site.disp5}</div> <div className="grades">{site.grades5}</div>
          </Typography>
        </div>
      )}
      {site.disp6 != null && (
        <div className="disp">
          <Typography variant="h4">
            <div>{site.disp6}</div> <div className="grades">{site.grades6}</div>
          </Typography>
        </div>
      )}
      {site.disp7 != null && (
        <div className="disp">
          <Typography variant="h4">
            <div>{site.disp7}</div> <div className="grades">{site.grades7}</div>
          </Typography>
        </div>
      )}
      {site.disp8 != null && (
        <div className="disp">
          <Typography variant="h4">
            <div>{site.disp8}</div> <div className="grades">{site.grades8}</div>
          </Typography>
        </div>
      )}
      {site.disp9 != null && (
        <div className="disp">
          <Typography variant="h4">
            <div>{site.disp9}</div> <div className="grades">{site.grades9}</div>
          </Typography>
        </div>
      )}
      {site.disp10 != null && (
        <div className="disp">
          <Typography variant="h4">
            <div>{site.disp10}</div>{" "}
            <div className="grades">{site.grades10}</div>
          </Typography>
        </div>
      )}
      {site.disp11 != null && (
        <div className="disp">
          <Typography variant="h4">
            <div>{site.disp11}</div>{" "}
            <div className="grades">{site.grades11}</div>
          </Typography>
        </div>
      )}
      {site.disp12 != null && (
        <div className="disp">
          <Typography variant="h4">
            <div>{site.disp12}</div>{" "}
            <div className="grades">{site.grades12}</div>
          </Typography>
        </div>
      )}
      {site.disp13 != null && (
        <div className="disp">
          <Typography variant="h4">
            <div>{site.disp13}</div>{" "}
            <div className="grades">{site.grades13}</div>
          </Typography>
        </div>
      )}
      {site.disp14 != null && (
        <div className="disp">
          <Typography variant="h4">
            <div>{site.disp14}</div>{" "}
            <div className="grades">{site.grades14}</div>
          </Typography>
        </div>
      )}
      {site.disp15 != null && (
        <div className="disp">
          <Typography variant="h4">
            <div>{site.disp15}</div>{" "}
            <div className="grades">{site.grades15}</div>
          </Typography>
        </div>
      )}
      {site.disp16 != null && (
        <div className="disp">
          <Typography variant="h4">
            <div>{site.disp16}</div>{" "}
            <div className="grades">{site.grades16}</div>
          </Typography>
        </div>
      )}
      {site.disp17 != null && (
        <div className="disp">
          <Typography variant="h4">
            <div>{site.disp17}</div>{" "}
            <div className="grades">{site.grades17}</div>
          </Typography>
        </div>
      )}
      {site.disp18 != null && (
        <div className="disp">
          <Typography variant="h4">
            <div>{site.disp18}</div>{" "}
            <div className="grades">{site.grades18}</div>
          </Typography>
        </div>
      )}
      {site.disp19 != null && (
        <div className="disp">
          <Typography variant="h4">
            <div>{site.disp19}</div>{" "}
            <div className="grades">{site.grades19}</div>
          </Typography>
        </div>
      )}
      {site.disp20 != null && (
        <div className="disp">
          <Typography variant="h4">
            <div>{site.disp20}</div>{" "}
            <div className="grades">{site.grades20}</div>
          </Typography>
        </div>
      )}
    </>
  );
};

export default Dispcards;
