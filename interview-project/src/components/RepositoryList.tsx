import React, { FunctionComponent } from "react";
import Repository from "../types/Repository";
import { Box, Grid, Typography } from "@material-ui/core";
import RepositoryItem from "./RepositoryItem";

const RepositoryList: FunctionComponent<{
  repositories: Repository[];
}> = ({ repositories }) => {
  return (
    <Box my={1}>
      <Grid container direction="column">
        <Grid item>
          <Box p={2}>
            <Typography variant="h3" align="center">
              Repositories
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          {repositories.map((repo: Repository) => (
            <RepositoryItem key={repo.name} repository={repo} />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default RepositoryList;
