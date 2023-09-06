import ArticleCard from "@/components/ArticleCard";
import { getArticles } from "@/lib/getArticles";
import { articles } from "@/utils/dummyArticles";
import { Box, Container, Grid } from "@mui/material";
import Link from "next/link";

const Home = async () => {
  const articles = await getArticles();
  return (
    <Box>
      <Container maxWidth="md" sx={{ pt: 12 }}>
        <Grid justifyContent="center" gap={1} container>
          {articles.map(({ id, ...article }) => (
            <Grid key={article.title} item xs={12} md={6}>
              <Link href={`/${id}`} style={{ all: "unset", cursor: "pointer" }}>
                <ArticleCard article={article} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
