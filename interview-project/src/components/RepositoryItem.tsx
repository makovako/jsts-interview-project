import React, { FunctionComponent } from "react";
import Repository from "../types/Repository";
import { Card, Box } from "@material-ui/core";

const RepositoryItem: FunctionComponent<{ repository: Repository }> = ({
  repository
}) => {
  return (
    <Box my={1}>
      <Card>
        <Box p={1}>
          <h1>RepositoryItem</h1>
          {repository.name}
        </Box>
      </Card>
    </Box>
  );
};

export default RepositoryItem;
