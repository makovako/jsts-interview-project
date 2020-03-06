import React, { FunctionComponent } from "react";
import Organisation from "../types/Organisation";
import OrganisationItem from "./OrganisationItem";
import { Grid, Typography, Box } from "@material-ui/core";

const OrganisationList: FunctionComponent<{
  organisations: Organisation[];
}> = ({ organisations }) => {
  return (
    <Box my={1}>
      <Grid container direction="column">
        <Grid item>
          <Box p={2}>
            <Typography variant="h3" align="center">
              Organisations
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          {organisations.map((org: Organisation) => (
            <OrganisationItem key={org.login} organisation={org} />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrganisationList;
