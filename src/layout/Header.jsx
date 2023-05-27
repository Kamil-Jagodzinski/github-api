import { AppBar, Box, Paper, Link } from "@mui/material";
import logo from "../assets/logo.png";
import { SearchBar } from "../components/SerachBar";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{ borderWidth: "0 0 0 4px", borderColor: "red" }}
    >
      <Paper
        sx={{
          px: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: 0,
          height: "5.5rem",
          width: "100%",
          boxSizing: "border-box",
          borderWidth: "0 0 3px 0",
        }}
        variant="outlined"
      >
        <Box
          sx={{
            display: "flex",
            gap: 4,
          }}
        >
          <img src={logo} alt="Logo" height="50rem" />
          <SearchBar />
        </Box>
        <Link
          variant="body1"
          href="https://docs.github.com/en/rest?apiVersion=2022-11-28"
          target="_blank"
          underline="hover"
          color="white"
        >
          {" "}
          About Github API{" "}
        </Link>
      </Paper>
    </AppBar>
  );
};

export { Header };
