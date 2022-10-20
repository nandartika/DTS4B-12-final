import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import imgPlaceholder from "../../assets/images/img-placeholder.jpeg";
import timeSince from "../../utils/timeSince";

const NewsItem = (props) => {
  const { image, title, date, publisher } = props;

  return (
    <Card sx={{ maxWidth: 270, height: "100%" }}>
      <CardActionArea sx={{ height: "100%" }}>
        <CardMedia
          component="img"
          height="178"
          image={image || imgPlaceholder}
          alt={title}
        />
        <CardContent sx={{ height: "calc(100% - 208px)" }}>
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="stretch"
            sx={{ height: "100%" }}
          >
            <Grid item>
              <Typography gutterBottom variant="body1" component="div">
                {title}
              </Typography>
            </Grid>

            <Grid item>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={2}
              >
                <Grid item>
                  <Typography variant="body2" color="text.secondary">
                    {timeSince(date)}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" color="text.secondary">
                    {publisher}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NewsItem;
