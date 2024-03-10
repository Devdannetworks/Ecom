import { Box, Typography, useMediaQuery } from "@mui/material";
import Card from "./Card";
import womenImage from "../Images/women.webp";
import menImage from "../Images/mEN.webp";
import dress from "../Images/summer.webp";

const Categories: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width: 800px)");
  const cards = [
    {
      promo: "20% off this valentines",
      categoryName: "Women",
      callToAction: "Shop now",
      image: womenImage,
      alignItems: "flex-end",
      backgroundPosition: "center",
      height: "400px",
    },
    {
      promo: "20% off this valentines",
      categoryName: "Men",
      callToAction: "Shop now",
      image: menImage,
      alignItems: "flex-start",
      backgroundPosition: "right",
      height: "400px",
    },
    {
      promo: "20% off this valentines",
      categoryName: "Men",
      callToAction: "Shop now",
      image: dress,
      alignItems: "flex-end",
      backgroundPosition: "center",
      height: "400px",
    },
  ];
  return (
    <Box style={{ margin: "3% 0" }}>
      <Typography variant="h6">CATEGORIES</Typography>
      <Box
        sx={{
          display: isDesktop ? "flex" : "null",
          justifyContent: "space-between",
        }}
      >
        {cards.map((card, index) => (
          <Card
            promo={card.promo}
            categoryName={card.categoryName}
            callToAction={card.callToAction}
            backgroundImage={card.image}
            alignItems={card.alignItems}
            backgroundPosition={card.backgroundPosition}
            height={card.height}
            key={index}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Categories;
