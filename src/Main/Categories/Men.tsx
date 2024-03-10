import { Box, Button, Typography } from "@mui/material";
import men from "../Images/mEN.webp";
import { Paper } from "@mui/material";

const Men: React.FC = () => {
  return (
    <Box>
      <Paper
        style={{
          marginTop: "5vh",
          backgroundImage: `linear-gradient(to top,  rgba(218, 218, 218, 0.57), rgba(172, 172, 172, 0.212)), url(${men})`,
          backgroundSize: "cover",
          height: "90dvh",
          backgroundPosition: "right",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          style={{
            // backgroundColor: "blue",
            width: "100%",
            height: "33%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
            paddingLeft: "10%",
          }}
        >
          <Typography>20% off this valentine</Typography>
          <Typography variant="h4">
            Men <br /> collection
          </Typography>
          <Button variant="outlined">Shop now</Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Men;
