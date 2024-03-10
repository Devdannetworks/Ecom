import {
  BookmarkAddOutlined,
  FavoriteBorderOutlined,
  RemoveRedEyeOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import { Box, Rating, Typography, useMediaQuery } from "@mui/material";
import { IconButton } from "@mui/material";
import { Card } from "@mui/material";
import React from "react";
import { Item } from "../State/CartSlice";
import { FavItem } from "../State/FavProductSlice";

interface props {
  onClick: (item: Item) => void;
  addFavChild: (item: Item) => void;
  backgroundImage: string;
  available: boolean;
  name: string;
  price: number;
  prevPrice: number;
  value: number;
  id: number;
  item: Item;
  isInCart?: boolean;
}
const Product: React.FC<props> = ({
  backgroundImage,
  available,
  name,
  price,
  value,
  prevPrice,
  item,
  onClick,
  addFavChild,
}) => {
  const isDesktop = useMediaQuery("(min-width: 900px)");

  const addFav = () => {
    addFavChild(item);
  };
  const addBookmark = () => {};
  const seeItemPage = () => {};

  const addItemToCart = () => {
    onClick(item);
  };

  return (
    <Box>
      <Card
        elevation={1}
        style={{
          position: "relative",
          // margin: "8px",
          borderRadius: "0",
        }}
      >
        <img src={backgroundImage} alt="sample file" width={"100%"} />

        <Typography
          variant="subtitle1"
          style={{
            position: "absolute",
            top: "5%",
            left: "5%",
            background: available ? "" : "rgb(248, 68, 68)",
            padding: "4px 12px",
            fontSize: "12px",
          }}
          onClick={() => console.log("clicked")}
        >
          {available ? "" : "Sold"}
        </Typography>
        <Box
          style={{
            position: "absolute",
            top: "5%",
            right: "5%",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
          }}
        >
          <IconButton
            style={{
              backgroundColor: "white",
              marginBottom: "8px",
              cursor: "pointer",
            }}
            onClick={() => addFav()}
          >
            <FavoriteBorderOutlined fontSize="small" />
          </IconButton>
          <IconButton
            style={{
              backgroundColor: "white",
            }}
            onClick={() => addBookmark()}
          >
            <BookmarkAddOutlined fontSize="small" />
          </IconButton>
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "white",
          }}
        >
          <Box
            style={{
              borderRight: "1px solid gray",
              width: "50%",
              textAlign: "center",
            }}
          >
            <IconButton onClick={() => addItemToCart()}>
              <ShoppingBagOutlined fontSize={!isDesktop ? "small" : "medium"} />
            </IconButton>
          </Box>
          <Box
            style={{
              width: "50%",
              borderLeft: "1px solid gray",
              textAlign: "center",
            }}
          >
            <IconButton onClick={() => seeItemPage()}>
              <RemoveRedEyeOutlined
                fontSize={!isDesktop ? "small" : "medium"}
              />
            </IconButton>
          </Box>
        </Box>
      </Card>
      <Box
        style={{
          margin: "16px 0",
          // backgroundColor: "blue",
          textAlign: "center",
        }}
      >
        <Rating
          name="hover-feedback"
          value={value}
          precision={0.5}
          style={{ zIndex: "-1" }}
        />
        <Typography
          variant="h6"
          style={{
            fontSize: "16px",
          }}
        >
          {name}
        </Typography>
        <Typography
          style={{
            textDecoration: "line-through",
            display: "inline",
            marginRight: "8px",
          }}
        >
          ${prevPrice.toFixed(2)}
        </Typography>
        <Typography style={{ display: "inline" }}>
          ${price.toFixed(2)}
        </Typography>
      </Box>
    </Box>
  );
};

export default Product;
