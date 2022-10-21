import { Box, Container, Grid } from "@mui/material";
import { Stack } from "@mui/system";
import ChipItem from "./ChipItem";

const categories = [
  ["Business", "Business"],
  ["Entertainment", "Entertainment"],
  ["Health", "Health"],
  ["Politics", "Politics"],
  ["Products", "Products"],
  ["ScienceAndTechnology", "Science and Technology"],
  ["Sports", "Sports"],
  ["US", "US"],
  ["World", "World"],
  ["World_Africa", "World Africa"],
  ["World_Americas", "World Americas"],
  ["World_Asia", "World Asia"],
  ["World_Europe", "World Europe"],
  ["World_MiddleEast", "World MiddleEast"],
];

const ChipList = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={1}
      // wrap="nowrap"
    >
      {categories.map((item, index) => (
        <Grid item>
          <ChipItem key={index} label={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ChipList;
