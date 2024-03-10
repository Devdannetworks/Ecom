import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import { Backdrop, Container, Paper, useMediaQuery } from "@mui/material";
import {
  CallOutlined,
  EmailOutlined,
  FavoriteBorderOutlined,
  NavigateNextOutlined,
  Person3Outlined,
  SearchOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

export default function PrimarySearchAppBar() {
  const cartItems = useSelector((state: any) => state.cart.cartItems).length;
  const favItems = useSelector(
    (state: any) => state.FavProducts.favItems
  ).length;

  const isDesktop = useMediaQuery("(min-width: 900px)");

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const handleBackDropClick = () => {
    setDrawerOpen(false);
  };

  const navigate = useNavigate();
  const showCartItems = () => {
    navigate("/ShoppingCartComponent");
  };
  const showFavouriteItems = () => {
    navigate("/FavComponents");
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "fixed",
        left: "0",
        right: "0",
        top: "0",
        backgroundColor: "white",
        zIndex: "3",
      }}
    >
      <Container>
        <AppBar position="static">
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width: isDesktop ? "30%" : null,
              }}
            >
              {isDesktop ? (
                <List
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <ListItem button>
                    <ListItemText primary="Popular"></ListItemText>
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Home"></ListItemText>
                  </ListItem>

                  <ListItem button>
                    <ListItemText primary="Shop"></ListItemText>
                  </ListItem>

                  <ListItem button>
                    <ListItemText primary="Categories"></ListItemText>
                  </ListItem>
                </List>
              ) : (
                <>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                    onClick={toggleDrawer}
                  >
                    <MenuIcon />
                  </IconButton>

                  <Drawer
                    anchor="left"
                    open={drawerOpen}
                    onClose={toggleDrawer}
                    variant="persistent"
                    PaperProps={{ style: { width: 300 } }}
                    ModalProps={{ onClick: handleBackDropClick }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "16px",
                        backgroundColor: "gray",
                      }}
                    >
                      <Typography variant="h5" component={"h5"}>
                        Menu
                      </Typography>
                      <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="close"
                        onClick={toggleDrawer}
                      >
                        <Close />
                      </IconButton>
                    </Box>
                    <List>
                      <ListItem button>
                        <ListItemText
                          primary="Popular"
                          onClick={toggleDrawer}
                        ></ListItemText>
                        <NavigateNextOutlined />
                      </ListItem>
                      <ListItem button>
                        <ListItemText
                          primary="Home"
                          onClick={toggleDrawer}
                        ></ListItemText>
                        <NavigateNextOutlined />
                      </ListItem>

                      <ListItem button>
                        <ListItemText
                          primary="Shop"
                          onClick={toggleDrawer}
                        ></ListItemText>
                        <NavigateNextOutlined />
                      </ListItem>

                      <ListItem button>
                        <ListItemText
                          primary="Categories"
                          onClick={toggleDrawer}
                        ></ListItemText>
                        <NavigateNextOutlined />
                      </ListItem>
                    </List>

                    <Paper>
                      <Box sx={{ marginTop: "24px" }}>
                        <Typography
                          variant="subtitle1"
                          sx={{ textAlign: "start", padding: "16px" }}
                        >
                          Contact for assistance
                        </Typography>
                        <IconButton
                          sx={{ display: "flex", paddingLeft: "16px" }}
                        >
                          <CallOutlined />
                          <Typography variant="subtitle1">
                            +254 740 411 885
                          </Typography>
                        </IconButton>
                        <IconButton
                          sx={{ display: "flex", paddingLeft: "16px" }}
                        >
                          <EmailOutlined />
                          <Typography variant="subtitle1">
                            officialdevduncan@gmail.com
                          </Typography>
                        </IconButton>
                      </Box>
                    </Paper>
                  </Drawer>
                  {drawerOpen && (
                    <Backdrop open={true} onClick={handleBackDropClick} />
                  )}
                </>
              )}
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h5">Logo</Typography>
            </Box>

            <Box
              sx={{
                display: {
                  xs: "",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                },
              }}
            >
              {isDesktop ? (
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-haspopup="true"
                  color="inherit"
                  sx={{
                    marginRight: isDesktop ? "4px" : "0",
                    borderRadius: "0",
                  }}
                >
                  <SearchOutlined
                    sx={{ marginRight: isDesktop ? "3px" : "0" }}
                  />
                  <Typography variant="body1">
                    {isDesktop ? "Search" : null}
                  </Typography>
                </IconButton>
              ) : null}
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
                sx={{ padding: !isDesktop ? "6px" : "8px", borderRadius: "0" }}
                onClick={() => showCartItems()}
              >
                <Badge
                  badgeContent={cartItems}
                  color="error"
                  sx={{ marginRight: isDesktop ? "10px" : "0" }}
                >
                  <ShoppingBagOutlined
                    fontSize={!isDesktop ? "small" : "medium"}
                  />
                </Badge>
                <Typography variant="body1">
                  {isDesktop ? "Cart" : null}
                </Typography>
              </IconButton>

              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                sx={{ padding: !isDesktop ? "6px" : "8px", borderRadius: "0" }}
                onClick={() => showFavouriteItems()}
              >
                <Badge
                  badgeContent={favItems}
                  color="error"
                  sx={{ marginRight: isDesktop ? "10px" : "0" }}
                >
                  <FavoriteBorderOutlined
                    fontSize={!isDesktop ? "small" : "medium"}
                  />
                </Badge>
                <Typography variant="body1">
                  {isDesktop ? "WishList" : null}
                </Typography>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
                sx={{ padding: !isDesktop ? "6px" : "8px", borderRadius: "0" }}
              >
                <Person3Outlined
                  sx={{ marginRight: isDesktop ? "3px" : "0" }}
                  fontSize={!isDesktop ? "small" : "medium"}
                />
                <Typography variant="body1">
                  {isDesktop ? "Account" : null}
                </Typography>
              </IconButton>
            </Box>
          </Box>
        </AppBar>
      </Container>
    </Box>
  );
}
