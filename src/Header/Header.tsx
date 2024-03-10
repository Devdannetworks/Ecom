import { ThemeProvider, createTheme } from "@mui/material";
import Hero from "./HeroSection/Hero";

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

const Header: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Hero />
    </ThemeProvider>
  );
};

export default Header;
