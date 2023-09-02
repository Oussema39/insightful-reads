import { Article } from "@/interface/Article";
import { formatDate } from "@/utils/helpers";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import Text from "./custom/Text";

type ArticleCardProps = {
  article: Article;
};

const ArticleCard = ({
  article: { title, description, author, publishedAt, content },
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
        {/* <Text variant="subtitle1" color="GrayText" fontSize="14px">
            {content}
          </Text> */}
        {/* <Box maxHeight="3rem" overflow="hidden"> */}
        <Typography
          maxWidth="100%"
          variant="subtitle1"
          color="GrayText"
          whiteSpace="nowrap"
          fontSize="14px"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {content}
        </Typography>
        {/* </Box> */}

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
