import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  header: {
    margin: "20% 0 0 40%",
  },
});

const NotFound = () => {
  const classes = useStyle();
  return (
    <div>
      <Typography className={classes.header} variant="h4">
        404 Not Found
      </Typography>
    </div>
  );
};

export default NotFound;
