export const formatNameToTitle = (snakeCaseStr: string): string => {
  return snakeCaseStr
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
