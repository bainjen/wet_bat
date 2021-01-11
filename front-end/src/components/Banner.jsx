import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  banner: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(3),
    minHeight: "300px",
    background: `linear-gradient(to bottom right, ${theme.palette.teal} 0%, ${theme.palette.blue} 100%)`,
    color: "white",
  },
  left: {
    width: "35%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  right: {
    width: "55%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  office: {
    width: "50%",
  },
  bottom: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  num: {
    margin: "5px 5px 0px 10px",
    color: theme.palette.tan,
    fontWeight: "bold",
  },
  side: {
    margin: "5px 10px 0px 0px",
    lineHeight: "1.2",
    fontSize: "1.2em",
    textTransform: "uppercase",
  },
}));

const Banner = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.banner}>
      <div className={classes.left}>
        <Typography variant={"h4"}>
          Welcome to <br></br>your dashboard
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet
          eu ipsum sed volutpat. Cras libero odio, dictum quis lorem at,
          tincidunt vestibulum justo. Ut maximus mauris nec nunc blandit, non
          finibus sapien sollicitudin. In eu lacinia magna. Nulla ornare
          vulputate laoreet.
        </Typography>
      </div>
      <div className={classes.right}>
        <img src="office.png" alt="office" className={classes.office} />

        <div className={classes.bottom}>
          <Typography className={classes.num} variant={"h3"}>
            101
          </Typography>
          <Typography className={classes.side} variant={"h6"}>
            New <br></br>Leads
          </Typography>
          <Typography className={classes.num} variant={"h3"}>
            35
          </Typography>
          <Typography className={classes.side} variant={"h6"}>
            Quotes <br></br>Created
          </Typography>
          <Typography className={classes.num} variant={"h3"}>
            40
          </Typography>
          <Typography className={classes.side} variant={"h6"}>
            Pending<br></br>Orders
          </Typography>
        </div>
      </div>
    </Paper>
  );
};

export default Banner;
