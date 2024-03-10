import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { Paper } from "@mui/material";

interface props {
  promo: string;
  categoryName: string;
  callToAction: string;
  backgroundImage: string;
  alignItems: string;
  backgroundPosition: string;
  height: string;
}

const Card: React.FC<props> = ({
  promo,
  categoryName,
  callToAction,
  backgroundImage,
  alignItems,
  backgroundPosition,
  height,
}) => {
  const isDesktop = useMediaQuery("(min-width: 800px)");

  return (
    <Paper
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
        height: height,
        backgroundPosition: backgroundPosition,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "3% 0",
        width: isDesktop ? "30%" : "100%",
      }}
    >
      <Box
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: alignItems,
          padding: "0 10%",
        }}
      >
        <Typography>{promo}</Typography>
        <Typography variant="h4" style={{ margin: "16px 0" }}>
          {categoryName} <br /> collection
        </Typography>
        <Button variant="outlined" style={{ zIndex: "0" }}>
          {callToAction}
        </Button>
      </Box>
    </Paper>
  );
};

export default Card;
