import React, { useState } from "react";
import "./App.css";

import Search from "./components/Search";
import Result from "./components/Result";

import { getRepos, getUserData } from "./api/github-api";
import Repository from "./types/Repository";
import Organisation from "./types/Organisation";
import User from "./types/User";

import { Container, Box, Collapse, Typography } from "@material-ui/core";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [organisations, setOrganisations] = useState<Organisation[]>([]);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [error, setError] = useState<string>("");
  const [user, setUser] = useState<User | undefined>();
  // const [user, setUser] = useState<User | undefined>();

  const update = async () => {
    setError("");
    let raw_repositories: any = [];
    try {
      raw_repositories = await getRepos(searchTerm);
    } catch (error) {
      setOrganisations([]);
      setRepositories([]);
      setError(error.message);
      return;
    }
    setRepositories(
      raw_repositories.map(
        (repo: any) =>
          new Repository(
            repo.name,
            repo.open_issue,
            repo.created_at,
            repo.description,
            repo.forks_count,
            repo.url
          )
      )
    );

    let raw_user: any = {};
    let raw_organisations: any = [];
    try {
      const res = await getUserData(searchTerm);
      raw_user = res.user;
      raw_organisations = res.orgs;
    } catch (error) {
      setOrganisations([]);
      setRepositories([]);
      setError(error.message);
      return;
    }

    setUser(
      new User(
        raw_user.login,
        raw_user.name,
        raw_user.avatar_url,
        raw_user.html_url
      )
    );

    setOrganisations(
      raw_organisations.map(
        (org: any) =>
          new Organisation(org.login, org.description, org.avatar_url, org.url)
      )
    );
  };

  return (
    <Container>
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        update={update}
      />
      <Collapse in={error.length > 0}>
        <Box
          p={2}
          my={1}
          bgcolor="error.main"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box px={1}>
            <Typography>{error}</Typography>
          </Box>
          <Box px={1}>
            <ErrorOutlineIcon />
          </Box>
        </Box>
      </Collapse>
      <Result
        repositories={repositories}
        organisations={organisations}
        user={user}
      />
    </Container>
  );
}

export default App;
