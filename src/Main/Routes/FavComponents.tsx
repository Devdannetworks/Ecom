import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import FixedBottomNavigation from "../../Header/Navigation/BottomNav";
import { useSelector } from "react-redux";
import Product from "../Products/Product";
import { Item } from "../State/CartSlice";

const FavProducts: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width: 900px)");

  const favItems = useSelector((state: any) => state.FavProducts.favItems);
  return (
    <Box>
      <Container sx={{ margin: "50px 0" }}>
        <Typography
          variant="h6"
          style={{
            textAlign: "center",
            marginTop: isDesktop ? "5%" : "50px",
            marginBottom: "15px",
            fontSize: "1.2rem",
          }}
        >
          Favourite Products
        </Typography>
        <Grid container spacing={2}>
          {favItems.map((item: Item, index: number) => (
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
                onClick={function (item: Item): void {
                  throw new Error("Function not implemented.");
                }}
                addFavChild={function (item: Item): void {
                  throw new Error("Function not implemented.");
                }}
                key={index}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <FixedBottomNavigation />
    </Box>
  );
};

export default FavProducts;
