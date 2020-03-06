import React, { FunctionComponent } from "react";
import OrganisationList from "./OrganisationList";
import RepositoryList from "./RepositoryList";
import Organisation from "../types/Organisation";
import Repository from "../types/Repository";
import User from "../types/User";
import UserInfo from "../components/UserInfo";
import { Box, Grid } from "@material-ui/core";

const Result: FunctionComponent<{
  organisations: Organisation[];
  repositories: Repository[];
  user: User | undefined;
}> = ({ organisations, repositories, user }) => {
  return user ? (
    <Box>
      <Grid container>
        <Grid item xs={12} sm={9} md={6} lg={6}>
          <UserInfo user={user} />
        </Grid>
      </Grid>
      <Grid container spacing={2} >
        <Grid item xs={12} sm={12} md={6}>
          <OrganisationList organisations={organisations} />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <RepositoryList repositories={repositories} />
        </Grid>
      </Grid>
    </Box>
  ) : (
    <Box></Box>
  );
};

export default Result;
