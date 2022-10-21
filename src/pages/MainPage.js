import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import ChipList from "../components/chips/ChipList";
import Layout from "../components/layouts/Layout";
import NewsList from "../components/news/NewsList";
import HotTopicsSection from "../components/sections/HotTopicsSection";
import { useGetLastestNewsQuery } from "../services/newsApi";

const MainPage = () => {
  const category = useSelector((state) => state.category.category);
  const { data } = useGetLastestNewsQuery({ category });

  return (
    <Layout>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="flex-start"
        spacing={5}
      >
        <Grid item>
          <Typography variant="h4" gutterBottom>
            Hot Topics
          </Typography>

          <HotTopicsSection />
        </Grid>

        <Grid item>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={2}
          >
            <Grid item>
              <Typography variant="h5">Latest News</Typography>
            </Grid>

            <Grid item xs={12}>
              <ChipList />
            </Grid>

            <Grid item>{data && <NewsList data={data.value} />}</Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default MainPage;
