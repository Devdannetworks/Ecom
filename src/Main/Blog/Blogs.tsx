import { Box, TextField, Typography } from "@mui/material";
import Blog from "./Blog";
import image1 from "../Images/demo-fashion-blog-img-01.webp";
import image2 from "../Images/Blog2.webp";
import image3 from "../Images/Blog3.webp";
import { EmailOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const Blogs: React.FC = () => {
  const BlogsContent = [
    {
      date: "16 Feb  2024",
      author: "Dannetworks",
      image: image1,
      description: "20 ways you can style your Nike lows like Roddy Ricch",
    },
    {
      date: "16 Feb  2024",
      author: "Dannetworks",
      image: image2,
      description: "20 ways you can style your Nike lows like Roddy Ricch",
    },
    {
      date: "16 Feb  2024",
      author: "Dannetworks",
      image: image3,
      description: "20 ways you can style your Nike lows like Roddy Ricch",
    },
  ];
  return (
    <Box>
      <Typography
        variant="h6"
        style={{
          marginBottom: "3%",
        }}
      >
        Blogs
      </Typography>

      <Box
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {BlogsContent.map((blog, index) => (
          <Box key={index}>
            <Blog
              date={blog.date}
              author={blog.author}
              description={blog.description}
              image={blog.image}
            />
          </Box>
        ))}
      </Box>
      <Typography variant="h5">Subscribe and get 20% dicount</Typography>
      <Box style={{ display: "flex" }}>
        <TextField
          id="standard-basic"
          label="Enter your E-mail"
          variant="standard"
          style={{
            width: "80%",
          }}
        />
        <Box
          style={{ display: "flex", alignItems: "center", padding: "20px 0" }}
        >
          <IconButton>
            <EmailOutlined fontSize="small" />
          </IconButton>
          <Typography
            variant="h2"
            style={{ fontSize: "14px", fontWeight: "3" }}
          >
            Subscribe
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Blogs;
