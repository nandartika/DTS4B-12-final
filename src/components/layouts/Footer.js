import { Grid } from "@mui/material";

const Footer = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="stretch"
      sx={{
        height: "83px",
        backgroundColor: "#F8F8F8",
        textAlign: "center",
      }}
    >
      <Grid item>Copyright 2022 Laskar News</Grid>
    </Grid>
  );
};

export default Footer;
