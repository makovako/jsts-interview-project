import React, { FunctionComponent } from "react";
import OrganisationList from "./OrganisationList";
import RepositoryList from "./RepositoryList";
import Organisation from "../types/Organisation";
import Repository from "../types/Repository";
import User from "../types/User";
import {
  Box,
  Typography,
  Card,
  Grid,
  Link,
} from "@material-ui/core";

const Result: FunctionComponent<{
  organisations: Organisation[];
  repositories: Repository[];
  user: User | undefined;
}> = ({ organisations, repositories, user }) => {
  return user ? (
    <Box>
      <Grid container>
        <Grid item xs={8}>
          <Card>
            <Link href={user.url} underline="none">
              <Box p={1} display="flex" justifyContent="flex-start">
                <Box mx={2}>
                  <img src={user.avatar_url} alt="Avatar" height="50" />
                </Box>
                <Box mx={2} display="flex" flexDirection="column">
                  <Typography color="textPrimary">
                    Username: {user?.login}
                  </Typography>
                  <Typography color="textPrimary">
                    Name: {user?.name}
                  </Typography>
                </Box>
              </Box>
            </Link>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <RepositoryList repositories={repositories} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <OrganisationList organisations={organisations} />
        </Grid>
      </Grid>
    </Box>
  ) : (
    <Box></Box>
  );
};

export default Result;
