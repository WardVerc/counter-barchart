export const getBarColor = (type: string) => {
  switch (type) {
    case "primary":
      return "blue";
    case "error":
      return "red";
    case "warning":
      return "orange";
    case "secondary":
      return "purple";
    case "success":
      return "green";
  }
};
