import { Container } from "@mui/material";
import { Fragment } from "react";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <Container>{props.children}</Container>
    </Fragment>
  );
};

export default Layout;
