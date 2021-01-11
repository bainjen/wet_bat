import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Divider,
  Paper,
  Grid,
  ListItem,
  ListItemText,
  Card,
  CardContent,
} from "@material-ui/core";

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
    // display: "flex",
    padding: theme.spacing(2),
    color: theme.palette.blue,
    minHeight: "800px",
  },
  logo: {
    width: "250px",
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
            <img src="logo_ombre.png" alt="logo" className={classes.logo} />
            Quote ID: {singleQuote.id}
            <br></br>
            <br></br>
            Quote made for:
            {cust.first_name} {cust.last_name}
            <br></br>
            phone: {cust.phone}
            <br></br>
            email: {cust.email}
            <br></br>
            <br></br>
            Departure Airport:
            {dep.iata_code} {dep.airport_name}
            <br></br>
            from: {dep.municipality} {dep.iso_country}
            <br></br>
            <br></br>
            Return Airport:
            {ret.iata_code} {ret.airport_name}
            <br></br>
            from: {ret.municipality} {ret.iso_country}
            <br></br>
            <br></br>
            Number of passengers: {singleQuote.numPeople}
            <br></br>
            <br></br>
            {transp ? (
              <>
                <p>Ground Transportation: {transp.category} </p>
                <br></br>
                <p>Price per unit: {transp.price}</p>
              </>
            ) : (
              <p>Ground Transportation: none </p>
            )}
            <br></br>
            <br></br>
            Total cost estimate: {singleQuote.price}
            <br></br>
          </Card>
        )}
      </Grid>
    </Grid>
  );
};

export default SingleQuote;

// departure destination and location with airports
// departure and return date
// number of travellers
// transportation during travels
// contact information
