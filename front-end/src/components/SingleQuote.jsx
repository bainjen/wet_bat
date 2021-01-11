import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, Grid, Card, Typography } from "@material-ui/core";

import { QuoteContext } from "./QuoteContext";
import QuoteList from "./QuoteList";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  list: {
    color: "theme.palette.blue",
  },
  quote: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(5),
    color: theme.palette.blue,
    minHeight: "800px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  logo: {
    width: "250px",
    // alignSelf: "flex-end",
  },
  customer: {
    marginTop: "80px",
  },
  flights: {
    marginTop: "40px",
  },
  flightDetails: {
    display: "flex",
    margin: "10px 0",
    justifyContent: "space-between",
  },
  depart: {
    width: "45%",
    padding: "10px",
  },
  other: {
    marginTop: "20px",
  },
}));

const SingleQuote = () => {
  const { dataState, quoteState } = useContext(QuoteContext);
  const { fullQuoteData } = dataState;
  const { quoteIndex } = quoteState;

  const classes = useStyles();
  let singleQuote;
  let cust;
  let dep;
  let ret;
  let transp;

  if (quoteIndex) {
    singleQuote = fullQuoteData.find((d) => d.id === quoteIndex);
    cust = singleQuote.selectedCustomer;
    dep = singleQuote.selectedDeparture;
    ret = singleQuote.selectedReturn;
    transp = singleQuote.selectedTransportation;
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <QuoteList className={classes.list} height={800} nRow={12} />
      </Grid>

      <Grid item xs={12} sm={6}>
        {singleQuote && (
          <Card elevation={1} className={classes.quote}>
            <div className={classes.header}>
              <Typography variant={"h6"}>Quote ID: {singleQuote.id}</Typography>
              <img src="logo_ombre.png" alt="logo" className={classes.logo} />
            </div>
            <div className={classes.customer}>
              <Typography variant={"h5"}>Quote made for </Typography>
              <Typography>
                {cust.first_name} {cust.last_name}
              </Typography>
              <Typography>phone: {cust.phone}</Typography>
              <Typography>email: {cust.email}</Typography>
            </div>
            <div className={classes.flights}>
              <Typography variant={"h5"}>Flight details </Typography>

              <div className={classes.flightDetails}>
                <div className={classes.depart}>
                  <Typography variant={"h6"}>Departure Airport:</Typography>
                  <Divider />
                  <Typography>
                    {dep.airport_name} ({dep.iata_code})
                  </Typography>
                  <Typography>
                    {dep.municipality}, {dep.iso_country}
                  </Typography>
                </div>

                <div className={classes.depart}>
                  <Typography variant={"h6"}>Return Airport:</Typography>
                  <Divider />
                  <Typography>
                    {ret.airport_name} ({ret.iata_code})
                  </Typography>
                  <Typography>
                    {ret.municipality}, {ret.iso_country}
                  </Typography>
                </div>
              </div>
            </div>
            <div className={classes.other}>
              <Typography variant={"h5"}>Other Details</Typography>
              <Typography>
                Number of passengers: {singleQuote.numPeople}
              </Typography>
              {transp ? (
                <>
                  <Typography>
                    Ground transportation: {transp.category}
                  </Typography>
                  <Typography variant={"p"}>
                    (price per unit: {transp.price}){" "}
                  </Typography>
                </>
              ) : (
                <Typography>Ground Transportation: none </Typography>
              )}
            </div>
            <div className={classes.flights}>
              <Divider />
              <Typography variant={"h6"}>
                Total cost estimate: {singleQuote.price}
              </Typography>
            </div>
          </Card>
        )}
      </Grid>
    </Grid>
  );
};

export default SingleQuote;
