import { Box, Container, Typography } from "@mui/material";
import Products from "../Products/Products";
import FixedBottomNavigation from "../../Header/Navigation/BottomNav";

const Shop: React.FC = () => {
  return (
    <Box>
      <Container style={{ margin: "50px 0" }}>
        <Products />
      </Container>
      <FixedBottomNavigation />
    </Box>
  );
};

export default Shop;
