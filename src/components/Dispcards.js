import React from "react";
import { Typography } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import { format } from "date-fns";
import Accordion from "@mui/material/Accordion";
import AddCircleIcon from "@mui/icons-material/AddCircle";
// import AddCircleIcon from "@mui/icons-material/ExpandMore";

const Dispcards = ({ site }) => {
  let today = format(new Date(), "MM/dd/yyyy");

  function handleDate(d) {
    let date = new Date(d);
    return format(date, "MM/dd/yyyy");
  }
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<AddCircleIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="info">
            <Typography variant="h4" sx={{ width: "100%", flexShrink: 1 }}>
              <div>GVR ID - {site.gvrid}</div>
              <div>GP Customer - {site.gp}</div>
              <div>
                Site Address - {site.address}, {site.city}, {site.state}
              </div>
              <div>Number of Dispensers - {site.totaldisp}</div>
              <div>Registration Date - {handleDate(site.activation)}</div>
              <div>Renewal Date - {handleDate(site.renewal)}</div>
              {handleDate(site.warranty) >= today ? (
                <div className="yellow">
                  Expired - {handleDate(site.warranty)}
                </div>
              ) : (
                <div>Warranty Date - {handleDate(site.warranty)}</div>
              )}
              {/* <div>Warranty Date - {handleDate(site.warranty)}</div> */}
            </Typography>
          </div>
        </AccordionSummary>
        {site.disp1 != null && (
          <div className="disp">
            <Typography variant="h4">
              <div>Fueling Position #{site.disp1}</div>{" "}
              <div>Grades - {site.grades1}</div>
            </Typography>
          </div>
        )}
        {site.disp2 != null && (
          <div className="disp">
            <Typography variant="h4">
              <div>Fueling Position #{site.disp2}</div>{" "}
              <div>Grades - {site.grades2}</div>
            </Typography>
          </div>
        )}
        {site.disp3 != null && (
          <div className="disp">
            <Typography variant="h4">
              <div>Fueling Position #{site.disp3}</div>{" "}
              <div>Grades - {site.grades3}</div>
            </Typography>
          </div>
        )}
        {site.disp4 != null && (
          <div className="disp">
            <Typography variant="h4">
              <div>Fueling Position #{site.disp4}</div>{" "}
              <div>Grades - {site.grades4}</div>
            </Typography>
          </div>
        )}
        {site.disp5 != null && (
          <div className="disp">
            <Typography variant="h4">
              <div>Fueling Position #{site.disp5}</div>{" "}
              <div>Grades - {site.grades5}</div>
            </Typography>
          </div>
        )}
        {site.disp6 != null && (
          <div className="disp">
            <Typography variant="h4">
              <div>Fueling Position #{site.disp6}</div>{" "}
              <div>Grades - {site.grades6}</div>
            </Typography>
          </div>
        )}
        {site.disp7 != null && (
          <div className="disp">
            <Typography variant="h4">
              <div>Fueling Position #{site.disp7}</div>{" "}
              <div>Grades - {site.grades7}</div>
            </Typography>
          </div>
        )}
        {site.disp8 != null && (
          <div className="disp">
            <Typography variant="h4">
              <div>Fueling Position #{site.disp8}</div>{" "}
              <div>Grades - {site.grades8}</div>
            </Typography>
          </div>
        )}
        {site.disp9 != null && (
          <div className="disp">
            <Typography variant="h4">
              <div>Fueling Position #{site.disp9}</div>{" "}
              <div>Grades - {site.grades9}</div>
            </Typography>
          </div>
        )}
        {site.disp10 != null && (
          <div className="disp">
            <Typography variant="h4">
              <div>Fueling Position #{site.disp10}</div>{" "}
              <div>Grades - {site.grades10}</div>
            </Typography>
          </div>
        )}
        {site.disp11 != null && (
          <div className="disp">
            <Typography variant="h4">
              <div>Fueling Position #{site.disp11}</div>{" "}
              <div>Grades - {site.grades11}</div>
            </Typography>
          </div>
        )}
        {site.disp12 != null && (
          <div className="disp">
            <Typography variant="h4">
              <div>Fueling Position #{site.disp12}</div>{" "}
              <div>Grades - {site.grades12}</div>
            </Typography>
          </div>
        )}
        {site.disp13 != null && (
          <div className="disp">
            <Typography variant="h4">
              <div>Fueling Position #{site.disp13}</div>{" "}
              <div>Grades - {site.grades13}</div>
            </Typography>
          </div>
        )}
        {site.disp14 != null && (
          <div className="disp">
            <Typography variant="h4">
              <div>Fueling Position #{site.disp14}</div>{" "}
              <div>Grades - {site.grades14}</div>
            </Typography>
          </div>
        )}
        {site.disp15 != null && (
          <div className="disp">
            <Typography variant="h4">
              <div>Fueling Position #{site.disp15}</div>{" "}
              <div>Grades - {site.grades15}</div>
            </Typography>
          </div>
        )}
        {site.disp16 != null && (
          <div className="disp">
            <Typography variant="h4">
              <div>Fueling Position #{site.disp16}</div>{" "}
              <div>Grades - {site.grades16}</div>
            </Typography>
          </div>
        )}
        {site.disp17 != null && (
          <div className="disp">
            <Typography variant="h4">
              <div>Fueling Position #{site.disp17}</div>{" "}
              <div>Grades - {site.grades17}</div>
            </Typography>
          </div>
        )}
        {site.disp18 != null && (
          <div className="disp">
            <Typography variant="h4">
              <div>Fueling Position #{site.disp18}</div>{" "}
              <div>Grades - {site.grades18}</div>
            </Typography>
          </div>
        )}
        {site.disp19 != null && (
          <div className="disp">
            <Typography variant="h4">
              <div>Fueling Position #{site.disp19}</div>{" "}
              <div>Grades - {site.grades19}</div>
            </Typography>
          </div>
        )}
        {site.disp20 != null && (
          <div className="disp">
            <Typography variant="h4">
              <div>Fueling Position #{site.disp20}</div>{" "}
              <div>Grades - {site.grades20}</div>
            </Typography>
          </div>
        )}
      </Accordion>
    </>
  );
};

export default Dispcards;
