import React, { FunctionComponent } from "react";
import Organisation from "../types/Organisation";
import OrganisationItem from "./OrganisationItem";
import { Grid, Typography, Box } from "@material-ui/core";

const OrganisationList: FunctionComponent<{
  organisations: Organisation[];
}> = ({ organisations }) => {
  return (
    <Box m={1}>
      <Grid direction="column">
        <Typography variant="h3" align="center">
          Organisations
        </Typography>
        {organisations.map((org: Organisation) => (
          <OrganisationItem key={org.login} organisation={org} />
        ))}
      </Grid>
    </Box>
  );
};

export default OrganisationList;
