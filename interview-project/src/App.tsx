import React, { useState } from "react";
import "./App.css";

import Search from "./components/Search";
import Result from "./components/Result";

import { getRepos, getUserData } from "./api/github-api";
import Repository from "./types/Repository";
import Organisation from "./types/Organisation";
import User from "./types/User";

function App() {
  // getRepos('makovako')
  //   .then(res => console.log(res))

  // getUserData('makovako')
  //   .then(res => console.log(res))

  const [searchTerm, setSearchTerm] = useState("");
  const [organisations, setOrganisations] = useState<Organisation[]>([]);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [user, setUser] = useState({})

  const update = async () => {
    const raw_repositories = await getRepos(searchTerm);
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

    const {user, orgs} = await getUserData(searchTerm);
    console.log(orgs);
    
    setOrganisations(
      orgs.map(
        (org: any) =>
          new Organisation(org.login, org.description, org.avatar_url, org.url)
      )
    );
  };

  return (
    <div className="App">
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        update={update} />
      
      <Result repositories={repositories} organisations={organisations} />
    </div>
  );
}

export default App;
