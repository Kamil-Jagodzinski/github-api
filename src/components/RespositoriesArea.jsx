import React from "react";
import { Box } from "@mui/material";
import { RepositoryPanel } from "./RepositoryPanel";

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const RepositoryArea = (props) => {
  return (
    <Box sx={{ width: "100%", height: "100%", overflow: "auto" }}>
      {props.repos.map((repo) => (
        <RepositoryPanel
          repository={repo}
          borderColor={getRandomColor()}
          key={repo.name}
        />
      ))}
    </Box>
  );
};

export { RepositoryArea };
