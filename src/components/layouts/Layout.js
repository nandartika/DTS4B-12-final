import { Container, Grid } from "@mui/material";
import Footer from "./Footer";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="stretch"
      spacing={5}
    >
      <Grid item>
        <MainNavigation />
      </Grid>

      <Grid item>
        <Container>{props.children}</Container>
      </Grid>

      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Layout;
