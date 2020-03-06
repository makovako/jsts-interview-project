import React, { FunctionComponent } from "react";
import User from "../types/User";
import { Card, Link, Box, Typography, Grid } from "@material-ui/core";

const UserInfo: FunctionComponent<{ user: User }> = ({ user }) => {
  return (
    <Card raised>
      <Link href={user.url} underline="none">
        <Box p={1} display="flex" justifyContent="flex-start">
          <Grid container>
            <Grid item xs={3}>
              <Box m={2}>
                <img width="100%" src={user.avatar_url} alt="Avatar" />
              </Box>
            </Grid>
            <Grid item xs={9}>
              <Box m={2}>
                <Typography color="textPrimary">
                  Username: {user?.login}
                </Typography>
                <Typography color="textPrimary">Name: {user?.name}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Link>
    </Card>
  );
};

export default UserInfo;
