import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ShoppingCartComponent from "./Main/Routes/ShoppingCartComponent";
import Home from "./Home";
import FavComponents from "./Main/Routes/FavComponents";
import PrimarySearchAppBar from "./Header/Navigation/Navigation";
import { ThemeProvider, createTheme } from "@mui/material";
import Shop from "./Main/Routes/Shop";
const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <PrimarySearchAppBar />
      </ThemeProvider>
      <Routes>
        <Route
          path="/ShoppingCartComponent"
          element={<ShoppingCartComponent />}
        />
        <Route path="/FavComponents" element={<FavComponents />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
