import { Container } from "@mui/material";
import Categories from "./Categories/Categories";
import Products from "./Products/Products";
import Brands from "./Brands/Brands";
import Blogs from "./Blog/Blogs";

const Main: React.FC = () => {
  return (
    <Container>
      <Categories />
      <Products />
      <Brands />
      <Blogs />
    </Container>
  );
};

export default Main;
