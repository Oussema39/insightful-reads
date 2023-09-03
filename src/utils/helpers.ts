import { averageContrast } from "./constants";

export const formatDate = (date: Date | string): string => {
  const dateToFormat = date instanceof Date ? date : new Date(date);

  const formattedDate = dateToFormat.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formattedDate;
};

export const generateCssRGBA = (rgb: RGB | null, alpha: number = 1): string =>
  !rgb || !rgb.length ? "transparent" : `rgba(${rgb.join(",")},${alpha})`;

const getContrastRatio = (rgb: RGB) => {
  const [r, g, b] = rgb;
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
  return (luminance + 0.05) / 0.05;
};

export const getContrastColor = (rgb: RGB | null) => {
  if (!rgb) return "";
  const bgContrast = getContrastRatio(rgb);

  if (bgContrast >= averageContrast) {
    return "rgb(0, 0, 0)"; // Black
  } else {
    return "rgb(255, 255, 255)"; // white
  }
};
