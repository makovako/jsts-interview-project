import React, { FunctionComponent } from "react";
import { Box, TextField, Button } from "@material-ui/core";

const Search: FunctionComponent<{
  searchTerm: string;
  setSearchTerm: Function;
  update: Function;
}> = ({ searchTerm, setSearchTerm, update }) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    update();
  };
  return (
    <form onSubmit={handleSubmit} noValidate autoComplete="off">
      <Box display="flex" alignItems="center" flexDirection="row">
        <Box m={2}>
          <TextField
            onChange={e => setSearchTerm(e.target.value)}
            value={searchTerm}
            label="Search"
          />
        </Box>
        <Box m={2}>
          <Button type="submit" variant="contained" color="primary">
            Search
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default Search;
