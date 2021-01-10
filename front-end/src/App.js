import React from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "@material-ui/core/styles";
import { mainTheme } from "./themes/theme";
import Nav from "./components/Nav";
import SideDrawer from "./components/SideDrawer";
import useAppData from "./hooks/useAppData";

function App() {
  const { data, loaded } = useAppData();
  console.log(data);
  const [open, setOpen] = React.useState(false);

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
      <ThemeProvider theme={mainTheme}>
        <Nav handleDrawer={setOpen} />
        <SideDrawer isOpen={open} />
      </ThemeProvider>
    </div>
  );
}

export default App;
