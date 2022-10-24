import { Box, CircularProgress } from "@mui/material";

const Progress = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Progress;
