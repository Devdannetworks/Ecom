import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import {
  HomeOutlined,
  SearchOutlined,
  ShoppingBagOutlined,
  WidgetsOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Badge, IconButton } from "@mui/material";
import { useSelector } from "react-redux";

export default function FixedBottomNavigation() {
  const ref = React.useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const showHomePage = () => {
    navigate("/");
  };

  const cartItems = useSelector((state: any) => state.cart.cartItems).length;
  const showCartItems = () => {
    navigate("/ShoppingCartComponent");
  };
  const showProducts = () => {
    navigate("/Shop");
  };

  return (
    <Box sx={{ pb: 7 }} ref={ref} position="static">
      <CssBaseline />
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: "3",
          borderRadius: "0",
        }}
        elevation={3}
      >
        <Box style={{ display: "flex" }}>
          <BottomNavigation showLabels style={{ width: "75%" }}>
            <BottomNavigationAction
              label="Home"
              icon={<HomeOutlined />}
              onClick={showHomePage}
            />
            <BottomNavigationAction label="Search" icon={<SearchOutlined />} />
            <BottomNavigationAction
              label="Shop"
              icon={<WidgetsOutlined />}
              onClick={() => showProducts()}
            />
          </BottomNavigation>

          <IconButton
            size="medium"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "25%",
            }}
            onClick={() => showCartItems()}
          >
            <Badge badgeContent={cartItems} color="error">
              <ShoppingBagOutlined />
            </Badge>
            <Typography style={{ fontSize: "13px" }}>Cart</Typography>
          </IconButton>
        </Box>
      </Paper>
    </Box>
  );
}
