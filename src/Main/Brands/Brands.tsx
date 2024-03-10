import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import CollectionImage from "../Images/summer.webp";
import logo1 from "../Images/clients-01.webp";
import logo2 from "../Images/clients-02.webp";
import logo3 from "../Images/clients-03.webp";
import logo4 from "../Images/clients-04.webp";

const Brands: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width: 800px)");
  return (
    <Box
      style={{
        margin: "3% 0",
      }}
    >
      <Typography
        variant="h6"
        style={{
          margin: "3% 0",
        }}
      >
        Collection
      </Typography>
      <Box
        style={{
          display: isDesktop ? "flex" : "block",
          justifyContent: "space-between",
        }}
      >
        <Box
          style={{
            borderRight: isDesktop ? "1px solid gray" : "none",
            borderBottom: !isDesktop ? "1px solid gray" : "none",
            height: "fitContent",
            marginRight: isDesktop ? "16px" : "0",
            paddingRight: isDesktop ? "16px" : "0",
          }}
        >
          <Box>
            <img
              src={CollectionImage}
              alt="Collection"
              width={!isDesktop ? "100%" : "auto"}
            />
            <Typography
              style={{
                padding: "16px 0",
              }}
            >
              Summer collection
            </Typography>
          </Box>
        </Box>
        <Box
          style={{
            padding: "16px 0",
          }}
        >
          <Typography variant="h5">
            Popular brands <br /> in our collection
          </Typography>
          <Typography variant="body1" style={{ margin: "24px 0" }}>
            We stock products from leading clothing brands all over the world
            including upcoming brands see popular brands in our collection.
          </Typography>
          <Button
            variant="outlined"
            size="large"
            style={{ zIndex: "-1", cursor: "pointer" }}
          >
            Shop Collection
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDireection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <img
          src={logo1}
          alt="client one"
          width={"195"}
          height={"56"}
          style={{ margin: "16px" }}
        />
        <img
          src={logo2}
          alt="client one"
          width={"195"}
          height={"56"}
          style={{ margin: "16px" }}
        />
        <img
          src={logo3}
          alt="client one"
          width={"195"}
          height={"56"}
          style={{ margin: "16px" }}
        />
        <img
          src={logo4}
          alt="client one"
          width={"195"}
          height={"56"}
          style={{ margin: "16px" }}
        />
      </Box>
    </Box>
  );
};

export default Brands;
