export const formatDate = (date: Date | string): string => {
  const dateToFormat = date instanceof Date ? date : new Date(date);

  const formattedDate = dateToFormat.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formattedDate;
};
