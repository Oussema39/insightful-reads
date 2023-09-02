import ArticleCard from "@/components/ArticleCard";
import Navbar from "@/components/Navbar";
import Bull from "@/components/custom/Bull";
import { User } from "@/interface/User";
import { getArticles } from "@/lib/getArticles";
import { Box, Container, Grid } from "@mui/material";

type HomeProps = {
  user: User | undefined;
};

const Home = async ({ user }: HomeProps) => {
  const articles = await getArticles();
  return (
    <Box>
      <Navbar />
      <Container maxWidth="md" sx={{ pt: 6 }}>
        <Grid justifyContent="center" gap={1} container>
          {articles.map((article) => (
            <Grid key={article.title} item xs={12} md={6}>
              <ArticleCard article={article} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
