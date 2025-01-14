import React from "react";
import { getEmailCust } from "../api";
import {
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Button,
  Dialog,
} from "@mui/material";

const Customeremail = () => {
  const [message, setMessage] = React.useState([]);
  React.useEffect(() => {
    getEmailCust().then((resp) => {
      setMessage(resp.emailNotice.rows);
    });
  }, []);
  return (
    <div className="apptrack">
      <div className="stickytwo">
        <Button
          sx={{ border: 1, borderColor: "white", width: 500 }}
          variant="contained"
        >
          Add New Email Alert
        </Button>
        {message.map((cust) => (
          <Card
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              p: 1,
              m: 1,
              bgcolor: "background.paper",
              width: { md: "83%", lg: "75%" },
              borderRadius: 1,
              alignText: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
            key={cust.id}
          >
            <CardActionArea>
              <CardContent>
                <Typography>{cust.gp_cust}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Customeremail;
