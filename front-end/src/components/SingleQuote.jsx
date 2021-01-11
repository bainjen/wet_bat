import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Divider,
  Paper,
  Grid,
  ListItem,
  ListItemText,
} from "@material-ui/core";

import { QuoteContext } from "./QuoteContext";
import QuoteList from "./QuoteList";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  list: {
    color: "theme.palette.blue",
  },
  quote: {
    // padding: theme.spacing(2),
    color: theme.palette.blue,
    minHeight: "800px",
  },
}));

const SingleQuote = () => {
  const { dataState, quoteState } = useContext(QuoteContext);
  const { fullQuoteData } = dataState;
  const { quoteIndex } = quoteState;

  const classes = useStyles();
  let singleQuote;
  if (quoteIndex) {
    singleQuote = fullQuoteData.find((d) => d.id === quoteIndex);
  }
  console.log(singleQuote);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <QuoteList className={classes.list} />
      </Grid>

      <Grid item xs={12} sm={6}>
        <Paper className={classes.quote}>single quote goes here</Paper>
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
