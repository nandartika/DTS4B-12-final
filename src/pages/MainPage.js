import { Grid, Typography } from "@mui/material";
import Layout from "../components/layouts/Layout";
import NewsList from "../components/news/NewsList";
import HotTopicsSection from "../components/sections/HotTopicsSection";
import { useGetLastestNewsQuery } from "../services/newsApi";

const MainPage = () => {
  const { data } = useGetLastestNewsQuery();

  return (
    <Layout>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="stretch"
        spacing={5}
      >
        <Grid item>
          <Typography variant="h4" gutterBottom>
            Hot Topics
          </Typography>

          <HotTopicsSection />
        </Grid>

        <Grid item>
          <Typography variant="h5" gutterBottom>
            Latest News
          </Typography>

          {data && <NewsList data={data.value} />}
        </Grid>
      </Grid>
    </Layout>
  );
};

export default MainPage;
