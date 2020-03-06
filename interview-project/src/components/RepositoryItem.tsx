import React, { FunctionComponent } from "react";
import Repository from "../types/Repository";
import { Card, Box, Grid, Link, Typography } from "@material-ui/core";
import { Restaurant, ErrorOutline } from "@material-ui/icons";

const RepositoryItem: FunctionComponent<{ repository: Repository }> = ({
  repository
}) => {
  return (
    <Box my={1}>
      <Card raised>
        <Link href={repository.url} underline="none">
          <Box p={2}>
            <Grid container direction="column">
              <Grid item>
                <Grid container justify="space-between">
                  <Grid item xs={8}>
                    <Typography color="textPrimary" variant="h4">
                      {repository.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Grid container justify="center" alignItems="center">
                      <Typography color="textPrimary">
                        <ErrorOutline /> {repository.open_issues_count}
                      </Typography>
                      <Typography color="textPrimary">
                        <Restaurant /> {repository.forks_count}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Typography color="textSecondary">
                  Created: {new Date(repository.created_at).toDateString()}
                </Typography>
              </Grid>
              <Grid item>
                <Typography color="textPrimary">
                  {repository.description}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Link>
      </Card>
    </Box>
  );
};

export default RepositoryItem;
