import React, { FunctionComponent } from "react";
import Organisation from "../types/Organisation";
import { Card, Box, Grid, Typography, Link } from "@material-ui/core";

const OrganisationItem: FunctionComponent<{ organisation: Organisation }> = ({
  organisation
}) => {
  return (
    <Box my={1}>
      <Card raised>
        <Link href={organisation.url} underline="none">
          <Box p={1}>
            <Grid container>
              <Grid item xs={3}>
                <img
                  height="100%"
                  width="100%"
                  src={organisation.avatar_url}
                  alt="Organisation avatar"
                />
              </Grid>
              <Grid item xs={9}>
                <Box p={2}>
                  <Typography color="textPrimary" variant="h4">
                    {organisation.login}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box my={2}>
                  <Typography color="textPrimary" paragraph={true}>
                    {organisation.description}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Link>
      </Card>
    </Box>
  );
};

export default OrganisationItem;
