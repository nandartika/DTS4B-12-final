import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import imgPlaceholder from "../../assets/images/img-placeholder.jpeg";
import timeSince from "../../utils/timeSince";

const NewsItem = (props) => {
  const navigate = useNavigate();
  const { image, title, date, publisher } = props;

  const handleClick = () => {
    navigate(`/${title}`);
  };

  return (
    <Card sx={{ maxWidth: 270, height: "100%" }} onClick={handleClick}>
      <CardActionArea sx={{ height: "100%" }}>
        <CardMedia
          component="img"
          height="178"
          image={image || imgPlaceholder}
          alt={title}
          sx={{ objectFit: "cover" }}
        />
        <CardContent>
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="stretch"
          >
            <Grid item>
              <Typography
                gutterBottom
                variant="body1"
                component="div"
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "2",
                  WebkitBoxOrient: "vertical",
                }}
              >
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
