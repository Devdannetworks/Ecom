import { Box, Typography, useMediaQuery } from "@mui/material";
import { Paper } from "@mui/material";

interface props {
  description: string;
  date: string;
  author: string;
  image: string;
}

const Blog: React.FC<props> = ({ description, author, date, image }) => {
  const isDesktop = useMediaQuery("(min-width: 650px)");

  return (
    <Box
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        backgroundSize: "cover",
        marginBottom: "24px",
        width: isDesktop ? "fit-content" : "100%",
        border: "2px solid rgba(255, 255, 255, 1)",
      }}
    >
      <img
        src={image}
        alt="Blog one"
        style={{
          width: isDesktop ? "350px" : "100%",
          height: "70vh",
          objectFit: "cover",
        }}
      />

      <Box
        style={{
          position: "absolute",
          bottom: "5%",
          left: "5%",
          right: "5%",
          overflow: "hidden",
          padding: "5%",
          borderRadius: "0",
        }}
      >
        <Paper
          style={{
            padding: "5%",
            borderRadius: "0",
          }}
        >
          {description}
        </Paper>
        <Paper
          style={{
            borderRadius: "0",
            display: "flex",
            backgroundColor: "gray",
            padding: "5%",
            justifyContent: "space-between",
          }}
        >
          <Typography
            style={{
              fontSize: "14px",
              width: "45%",
            }}
          >
            {date}
          </Typography>
          <Typography
            style={{
              fontSize: "14px",
              paddingLeft: "14px",
              borderLeft: "2px solid rgba(255, 255, 255, 1)",
              width: "10%",
            }}
          ></Typography>
          <Typography
            style={{
              fontSize: "14px",
              width: "45%",
            }}
          >
            {author}
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default Blog;
