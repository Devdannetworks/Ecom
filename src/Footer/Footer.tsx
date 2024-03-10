import { CallOutlined, EmailOutlined } from "@mui/icons-material";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import { IconButton } from "@mui/material";
import React from "react";
import image1 from "./Images/demo-fashion-footer-payment-icon (2).avif";
import CategoryComponent from "./Category";

const Footer: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width: 900px)");

  const categories = [
    {
      categoryName: "Categories",
      category1: "women",
      category2: "men",
      category5: "New Arrivals",
      category3: "winter",
      category4: "summer",
    },
    {
      categoryName: "Services",
      category1: "women",
      category2: "men",
      category5: "New Arrivals",
      category3: "winter",
      category4: "summer",
    },
    {
      categoryName: "Resources",
      category1: "women",
      category2: "men",
      category5: "New Arrivals",
      category3: "winter",
      category4: "summer",
    },
    {
      categoryName: "More Information",
      category1: "women",
      category2: "men",
      category5: "New Arrivals",
      category3: "winter",
      category4: "summer",
    },
    {
      categoryName: "FAQs",
      category1: "women",
      category2: "men",
      category5: "New Arrivals",
      category3: "winter",
      category4: "summer",
    },
  ];

  return (
    <Box
      style={{
        paddingBottom: isDesktop ? "20px" : "60px",
        paddingTop: "20px",
      }}
    >
      <Container>
        <Box>
          <Typography
            variant="h5"
            style={{
              paddingBottom: "16px",
              textAlign: "center",
              marginRight: "5%",
            }}
          >
            Logo
          </Typography>
          <Typography style={{ paddingBottom: "16px" }}>
            contact us for more any queries <br /> or assistance you may need
          </Typography>

          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "8px",
            }}
          >
            <CallOutlined fontSize="small" />
            <Typography> +254 740411885</Typography>
          </Box>

          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "16px",
            }}
          >
            <IconButton style={{ textAlign: "start" }}>
              <EmailOutlined fontSize="small" />
            </IconButton>
            <Typography
              style={{
                textAlign: "start",
                display: "flex",
                alignItems: "center",
              }}
            >
              office@gmail.com
            </Typography>
          </Box>
        </Box>

        <Box
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {categories.map((category, index) => (
            <CategoryComponent
              categoryName={category.categoryName}
              category1={category.category1}
              category2={category.category2}
              category3={category.category3}
              category4={category.category4}
              category5={category.category5}
              key={index}
            />
          ))}
        </Box>
      </Container>
      <Box
        style={{
          display: isDesktop ? "flex" : "block",
          justifyContent: "space-around",
          alignItems: "center",
          borderTop: "1px solid rgba(0, 0, 0, 1)",
          textAlign: "center",
        }}
      >
        <Typography style={{ padding: "8px 0" }}>
          © 2024 Ecom store is proudly built by Machaa_bugs
        </Typography>
        <img
          src={image1}
          alt="One time"
          style={{
            height: isDesktop ? "20px" : "",
          }}
        />
      </Box>
    </Box>
  );
};

export default Footer;
