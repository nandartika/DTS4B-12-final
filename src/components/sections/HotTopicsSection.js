import {
  Grid,
  ImageListItem,
  ImageListItemBar,
  Skeleton,
  Typography,
} from "@mui/material";
import { useGetTopNewsQuery } from "../../services/newsApi";
import imgPlaceholder from "../../assets/images/img-placeholder.jpeg";
import timeSince from "../../utils/timeSince";
import { useNavigate } from "react-router-dom";

const HotTopicsSection = () => {
  const navigate = useNavigate();
  const { data } = useGetTopNewsQuery();

  const image = data?.image?.thumbnail?.contentUrl;
  const title = data?.name;
  const date = data?.datePublished;
  const description = data?.description;

  const handlerClick = () => {
    navigate(`/${title}`);
  };

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
            onClick={handlerClick}
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
