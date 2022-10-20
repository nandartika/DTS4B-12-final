import { Grid } from "@mui/material";
import NewsItem from "./NewsItem";

const NewsList = (props) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="stretch"
      spacing={2}
    >
      {props.data.map((item, index) => (
        <Grid item key={index}>
          <NewsItem
            image={item.image && item.image.thumbnail.contentUrl}
            title={item.name}
            date={item.datePublished}
            publisher={item.provider[0].name}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default NewsList;
