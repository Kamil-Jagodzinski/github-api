import { useContext } from "react";
import { EmptyPanel } from "../components/EmptyPanel";
import { UsersList } from "../components/UsersList";
import { UserCard } from "../components/UserCard";
import { Box } from "@mui/material";
import { GitContext } from "../GitContext";

const UpperPanel = () => {
  const { upper, users, selectedUser} =
    useContext(GitContext);

  return (
    <Box
      sx={{
        minHeight: "35%",
        maxHeight: "50%",
        py: 1,
        px: 1,
        boxSizing: "border-box",
        overflow: "auto",
        width: "100%"
      }}
    >
      {upper === "list" ? (
        <UsersList userlist={users} />
      ) : upper === "card" ? (
        <UserCard user={selectedUser} />
      ) : (
        <EmptyPanel />
      )}
    </Box>
  );
};

export { UpperPanel };
