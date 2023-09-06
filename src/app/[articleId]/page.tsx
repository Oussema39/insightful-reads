import { getArticleById } from "@/lib/getArticleById";
import { Box, Container, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import ImageNotSupportedOutlinedIcon from "@mui/icons-material/ImageNotSupportedOutlined";

type ArticleDetailsProps = {
  params: { articleId: number };
};

const ArticleDetails = async ({
  params: { articleId },
}: ArticleDetailsProps) => {
  const article = await getArticleById(Number(articleId));
  if (!article) notFound();

  return (
    <Container sx={{ pt: 12 }} maxWidth="md">
      <Box height="50vh" position="relative" mb={4}>
        {article.imgUrl ? (
          <Image
            src={article.imgUrl}
            alt="article-photo"
            fill
            objectFit="cover"
          />
        ) : (
          // TODO : implement image preview when image url is invalid
          <ImageNotSupportedOutlinedIcon />
        )}
      </Box>
      <Typography
        component="h2"
        variant="body1"
        fontWeight={700}
        fontSize="24px"
      >
        {article.title}
      </Typography>
      <Typography
        variant="caption"
        fontSize="14px"
        textAlign="justify"
        color={grey["700"]}
        component="p"
      >
        {article.content}
      </Typography>
    </Container>
  );
};

export default ArticleDetails;
