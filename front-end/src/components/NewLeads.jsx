import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardHeader, Avatar } from "@material-ui/core";
import { QuoteContext } from "./QuoteContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  avatar: {
    backgroundColor: theme.palette.orange,
  },
}));

const NewLeads = () => {
  const classes = useStyles();
  const { dataState } = useContext(QuoteContext);
  const { customers } = dataState;

  const firstFive = customers.slice(0, 5);
  const leads = firstFive.map((d, i) => {
    const fullName = `${d.first_name} ${d.last_name}`;
    const initials = `${d.first_name.charAt(0)}${d.last_name.charAt(0)}`;

    return (
      <CardHeader
        key={i}
        avatar={<Avatar className={classes.avatar}>{initials}</Avatar>}
        title={fullName}
        subheader={"Hey, I want to place my package!"}
      />
    );
  });
  return <Card elevation={0}>{leads}</Card>;
};

export default NewLeads;
