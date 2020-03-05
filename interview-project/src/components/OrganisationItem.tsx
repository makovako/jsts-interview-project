import React, { FunctionComponent } from "react";
import Organisation from "../types/Organisation";
import { Card, Box } from "@material-ui/core";

const OrganisationItem: FunctionComponent<{ organisation: Organisation }> = ({
  organisation
}) => {
  return (
    <Box my={1}>
      <Card>
        <Box p={1}>
          <h1>OrganisationItem</h1>
          {organisation.login}
        </Box>
      </Card>
    </Box>
  );
};

export default OrganisationItem;
