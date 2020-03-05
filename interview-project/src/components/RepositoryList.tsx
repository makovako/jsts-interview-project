import React, { FunctionComponent } from "react";
import Repository from "../types/Repository";
import { Box, Grid, Typography } from "@material-ui/core";
import RepositoryItem from "./RepositoryItem";


const RepositoryList: FunctionComponent<{
  repositories: Repository[];
}> = ({repositories}) => {

  return (
      <Box m={1}>
      <Grid direction="column">
        <Typography variant="h3" align="center">
          Repositories
        </Typography>
        {repositories.map((repo: Repository) => (
          <RepositoryItem key={repo.name} repository={repo} />
        ))}
      </Grid>
    </Box>
      
  )
};

export default RepositoryList;
