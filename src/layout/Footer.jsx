import { Paper, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Paper
      sx={{
        px: 3,
        borderRadius: 0,
        borderWidth: "4px 0 0 0",
        height: "2.5rem",
        width: "100%",
        boxSizing: "border-box",
        position: "absolute",
        bottom: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      variant="outlined"
    >
      <Typography variant="body2">
        Page created by{" "}
        <Link
          href="https://github.com/Kamil-Jagodzinski"
          target="_blank"
          underline="hover"
        >
          Kamil Jagodziński{" "}
        </Link>
      </Typography>
      <Link
        href="https://github.com/Kamil-Jagodzinski/github-api"
        target="_blank"
        underline="hover"
        variant="body2"
      >
        {" "}
        Source code{" "}
      </Link>
    </Paper>
  );
};

export { Footer };
