import { Article } from "@/interface/Article";
import { formatDate } from "@/utils/helpers";
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";

type ArticleCardProps = {
  article: Article;
};

const ArticleCard = ({
  article: { title, description, author, publishedAt },
}: ArticleCardProps) => {
  return (
    <Card sx={{ boxShadow: "none", border: `0.5px solid ${grey["200"]}` }}>
      <CardMedia
        component="img"
        height={200}
        src="/assets/images/reads-cover.jpg"
        alt="card-media"
      />
      <CardContent>
        <Typography variant="body1" fontWeight={700} fontSize="22px">
          {title}
        </Typography>
        <Typography variant="subtitle1" color="GrayText" fontSize="14px">
          {description}
        </Typography>
        <Stack mt={4} direction="column">
          <Typography fontWeight={700} fontSize="14px">
            by {author?.name}
          </Typography>
          <Typography color="GrayText" fontSize="12px">
            {formatDate(publishedAt)}
          </Typography>
          <Avatar sx={{ bgcolor: "lightblue", mt: 2 }}>
            {author?.name.at(0)}
          </Avatar>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
