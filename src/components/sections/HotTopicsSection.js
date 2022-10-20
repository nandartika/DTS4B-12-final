import {
  Grid,
  ImageListItem,
  ImageListItemBar,
  Skeleton,
  Typography,
} from "@mui/material";
import {
  useGetSearchNewsQuery,
} from "../../services/newsApi";
import imgPlaceholder from "../../assets/images/img-placeholder.jpeg";
import timeSince from "../../utils/timeSince";

const HotTopicsSection = () => {
  const { data } = useGetSearchNewsQuery({
    keyword: "top stories",
    singel: true,
  });

  const hotNewsData = data && data.value[0];
  const image = hotNewsData && hotNewsData.image.thumbnail.contentUrl;
  const title = hotNewsData && hotNewsData.name;
  const date = hotNewsData && hotNewsData.datePublished;
  const description = hotNewsData && hotNewsData.description;

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={9}>
        <ImageListItem>
          <img
            src={image || imgPlaceholder}
            style={{ width: "100%", height: "400px", borderRadius: "8px" }}
            alt={title}
            loading="lazy"
          />
          <ImageListItemBar
            sx={{ borderRadius: "0 0 8px 8px" }}
            title={title}
            subtitle={timeSince(date)}
          />
        </ImageListItem>
      </Grid>

      <Grid item xs={3}>
        {description ? (
          <Typography variant="body1" gutterBottom>
            {description}
          </Typography>
        ) : (
          <Skeleton />
        )}
      </Grid>
    </Grid>
  );
};

export default HotTopicsSection;
