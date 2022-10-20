import { Typography } from "@mui/material";
import Layout from "../components/layouts/Layout";
import NewsList from "../components/news/NewsList";
import HotTopicsSection from "../components/sections/HotTopicsSection";
import { useGetLastestNewsQuery } from "../services/newsApi";

const MainPage = () => {
  const { data } = useGetLastestNewsQuery();

  return (
    <Layout>
      <Typography variant="h3" gutterBottom>
        Hot Topics
      </Typography>

      <HotTopicsSection />

      <Typography variant="h4" gutterBottom>
        Latest News
      </Typography>

      {data && <NewsList data={data.value} />}
    </Layout>
  );
};

export default MainPage;
