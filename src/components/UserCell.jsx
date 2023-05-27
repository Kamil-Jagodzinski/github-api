import { Avatar, Typography, Stack, Link } from "@mui/material";
import { loadRepositories } from "../api/loadRepositories";
import { selectUser } from "../api/selectUser";
import { GitContext } from "../GitContext";
import { useContext } from "react";

const UserCell = (props) => {
  const { setSelectedUser, setRepositories, setUpper, setMain } =
    useContext(GitContext);

  const switchToUser = async (user) => {
    let selected = await selectUser(user);
    let repos = await loadRepositories(user);
    setSelectedUser(selected);
    setRepositories(repos);
    setUpper("card");
    setMain("repos");
  };

  return (
    <Stack
      direction="row"
      gap={3}
      onClick={() => switchToUser(props.login)}
      sx={{
        m: 1,
        cursor: "pointer",
        border: "1px solid",
        borderColor: "white",
        borderRadius: "10px",
        boxSizing: "border-box",
        height: "3rem",
        px: 4,
        alignItems: "center",
        ":hover": {
          scale: "1.02",
          boxShadow: "inset 1px 1px 28px 0px #2861F3;",
        },
      }}
    >
      <Avatar src={props.avatar} />
      <Typography variant="h5"> {props.login} </Typography>
      <Link
        href={props.url}
        target="_blank"
        variant="caption"
        underline="hover"
        sx={{ ml: "auto" }}
      >
        {" "}
        Github Profile{" "}
      </Link>
    </Stack>
  );
};

export { UserCell };
