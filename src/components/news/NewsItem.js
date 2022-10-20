import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import imgPlaceholder from "../../assets/images/img-placeholder.jpeg";

const NewsItem = (props) => {
  const { image, title, date, author } = props;

  return (
    <Card sx={{ maxWidth: 270, height: "100%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="178"
          image={image || imgPlaceholder}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>

          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Grid item>
              <Typography variant="body2" color="text.secondary">
                {date}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="text.secondary">
                {author}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NewsItem;
