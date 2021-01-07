import React from "react";
import { Helmet } from "react-helmet";
// import Button from "@material-ui/core/Button";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Wet Bat Dashboard</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Helmet>
      {/* <Button variant="contained" color="primary"> */}
      {/* Hello World */}
      {/* </Button> */}
      <Nav />
    </div>
  );
}

export default App;
