"use client";
import { Article } from "@/interface/Article";
import { formatDate, generateCssRGBA, getContrastColor } from "@/utils/helpers";
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useRef, useState } from "react";
import ColorThief from "colorthief";

type ArticleCardProps = {
  article: Omit<Article, "id">;
};

const ArticleCard = ({
  article: { title, author, publishedAt, description, imgUrl },
}: ArticleCardProps) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [imgDominantColor, setImgDominantColor] = useState<RGB | null>(null);

  const handleOnLoad = () => {
    const colorThief = new ColorThief();
    const img = imgRef.current;
    const result = colorThief.getColor(img, 25);
    setImgDominantColor(result);
  };

  return (
    <Card
      sx={{
        bgcolor: generateCssRGBA(imgDominantColor),
        boxShadow: "none",
        border: `0.5px solid ${grey["200"]}`,
        color: getContrastColor(imgDominantColor),
      }}
    >
      <CardMedia
        crossOrigin="anonymous"
        ref={imgRef}
        src={imgUrl ?? "/assets/images/reads-cover.jpg"}
        alt="card-media"
        onLoad={handleOnLoad}
        component="img"
        height={200}
      />
      <CardContent>
        <Typography variant="body1" fontWeight={700} fontSize="22px">
          {title}
        </Typography>

        <Typography
          maxWidth="100%"
          variant="subtitle1"
          whiteSpace="nowrap"
          fontSize="14px"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {description}
        </Typography>
        {/* </Box> */}

        <Stack mt={4} direction="column">
          <Typography fontWeight={700} fontSize="14px">
            by {author?.name}
          </Typography>
          <Typography fontSize="12px">{formatDate(publishedAt)}</Typography>
          <Avatar
            sx={{
              background: getContrastColor(imgDominantColor),
              color: generateCssRGBA(imgDominantColor),
              mt: 2,
            }}
          >
            {author?.name.at(0)}
          </Avatar>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
