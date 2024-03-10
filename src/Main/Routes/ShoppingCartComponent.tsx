import { Container, Grid, Typography, useMediaQuery } from "@mui/material";
import Product from "../Products/Product";
import { useSelector } from "react-redux";
import { Item } from "../State/CartSlice";
import FixedBottomNavigation from "../../Header/Navigation/BottomNav";

const ShoppingCartComponent: React.FC = () => {
  const cartItems = useSelector((state: any) => state.cart.cartItems);

  const isDesktop = useMediaQuery("(min-width: 900px)");
  const incrementItem = () => {};
  const incrementFav = () => {};

  return (
    <Container>
      <Typography
        style={{
          textAlign: "center",
          marginTop: isDesktop ? "5%" : "50px",
          marginBottom: "15px",
          fontSize: "1.2rem",
        }}
      >
        Items in cart
      </Typography>
      <Grid container spacing={2}>
        {cartItems.map((item: Item, index: number) => (
          <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
            <Product
              backgroundImage={item.backgroundImage}
              available={item.available}
              name={item.name}
              price={item.price}
              prevPrice={item.prevPrice}
              value={item.value}
              id={item.id}
              item={item}
              onClick={incrementItem}
              key={index}
              addFavChild={incrementFav}
            />
          </Grid>
        ))}
      </Grid>
      <FixedBottomNavigation />
    </Container>
  );
};

export default ShoppingCartComponent;
