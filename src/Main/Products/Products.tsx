import { Box, Grid, Typography } from "@mui/material";
import productImage from "../Images/dress.webp";
import Product from "./Product";
import { addToCart, removeFromCart } from "../State/CartSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  addFavourite,
  removeFromFavourite,
  selectedFavProducts,
} from "../State/FavProductSlice";

interface Item {
  id: number;
  backgroundImage: string;
  available: boolean;
  price: number;
  value: number;
  name: string;
  prevPrice: number;
}

const Products: React.FC = () => {
  const cartItems = useSelector((state: any) => state.cart.cartItems);
  const dispatch = useDispatch();
  const handleItemClick = (item: Item) => {
    if (isInCart(item)) {
      dispatch(removeFromCart(item.id));
    } else {
      dispatch(addToCart(item));
      console.log(cartItems);
    }
  };
  const isInCart = (item: Item) => {
    return cartItems.some((cartItem: Item) => cartItem.id === item.id);
  };

  const favItems = useSelector((state: any) => state.FavProducts.favItems);

  const isInFav = (item: Item) => {
    return favItems.some((favItem: Item) => favItem.id === item.id);
  };
  const handleAddToFav = (item: Item) => {
    if (isInFav(item)) {
      dispatch(removeFromFavourite(item.id));
    } else {
      dispatch(addFavourite(item));
    }
  };

  const products: Item[] = [
    {
      backgroundImage: productImage,
      available: true,
      price: 20.0,
      value: 4,
      name: "Black cotton t-shirt",
      id: 1,
      prevPrice: 40.0,
    },
    {
      backgroundImage: productImage,
      available: false,
      price: 20.0,
      value: 3,
      name: "Black cotton t-shirt",
      prevPrice: 40.0,
      id: 2,
    },
    {
      backgroundImage: productImage,
      available: true,
      price: 20.0,
      name: "Black cotton t-shirt",
      prevPrice: 40.0,
      value: 4.5,
      id: 3,
    },
    {
      backgroundImage: productImage,
      available: true,
      price: 20.0,
      value: 3.5,
      name: "Black cotton t-shirt",
      prevPrice: 40.0,
      id: 4,
    },
    {
      backgroundImage: productImage,
      available: true,
      name: "Black cotton t-shirt",
      price: 20.0,
      value: 3,
      prevPrice: 40.0,
      id: 5,
    },
    {
      backgroundImage: productImage,
      available: false,
      price: 20.0,
      value: 4.5,
      name: "Black cotton t-shirt",
      prevPrice: 40.0,
      id: 6,
    },
    {
      backgroundImage: productImage,
      available: true,
      name: "Black cotton t-shirt",
      price: 20.0,
      value: 3,
      prevPrice: 40.0,
      id: 7,
    },
    {
      backgroundImage: productImage,
      available: false,
      price: 20.0,
      value: 4.5,
      name: "Black cotton t-shirt",
      prevPrice: 40.0,
      id: 8,
    },
  ];
  return (
    <Box style={{ marginBottom: "3%" }}>
      <Typography variant="h6" style={{ marginBottom: "3%" }}>
        Featured Products
      </Typography>
      <Grid container spacing={2}>
        {products.map((product, index) => (
          <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
            <Product
              backgroundImage={product.backgroundImage}
              available={product.available}
              prevPrice={product.prevPrice}
              price={product.price}
              value={product.value}
              name={product.name}
              id={product.id}
              isInCart={isInCart(product)}
              onClick={handleItemClick}
              item={product}
              addFavChild={handleAddToFav}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
