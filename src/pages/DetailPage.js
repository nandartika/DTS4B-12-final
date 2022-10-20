import { Button, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useGetSearchNewsQuery } from "../services/newsApi";
import imgPlaceholder from "../assets/images/img-placeholder.jpeg";
import timeSince from "../utils/timeSince";
import Layout from "../components/layouts/Layout";

const DetailPage = () => {
  const params = useParams();
  const id = params.idNews;

  const { data } = useGetSearchNewsQuery({ keyword: id, singel: true });

  const newsData = data && data.value[0];
  const image = newsData?.image && newsData.image.thumbnail.contentUrl;
  const title = newsData && newsData.name;
  const date = newsData && newsData.datePublished;
  const description = newsData && newsData.description;
  const publisher = newsData && newsData.provider[0].name;
  const url = newsData && newsData.url;

  return (
    <Layout>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item>
          <img
            src={image || imgPlaceholder}
            style={{ width: "100%", height: "400px", borderRadius: "8px" }}
            alt={title}
            loading="lazy"
          />
        </Grid>

        <Grid item>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>

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

        <Grid item>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={1}
          >
            <Grid item>
              <Typography variant="caption" gutterBottom>
                {description}
              </Typography>
            </Grid>

            <Grid item>
              <Button variant="outlined" href={url}>
                News Link
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default DetailPage;
