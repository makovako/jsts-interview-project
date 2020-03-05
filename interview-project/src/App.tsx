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
  const [error, setError] = useState<string>('');
  const [user, setUser] = useState<User | undefined>()

  const update = async () => {
    setError('')
    let raw_repositories:any = [];
    try {
      raw_repositories = await getRepos(searchTerm);
      
    } catch (error) {
      setOrganisations([])
      setRepositories([])
      setError(error.message)
      return
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
    
    let raw_user:any = {}
    let raw_organisations:any = []
    try {
      const res = await getUserData(searchTerm);
      raw_user = res.user
      raw_organisations = res.orgs
      
    } catch (error) {
      setOrganisations([])
      setRepositories([])
      setError(error.message)
      return
    }

    setUser(new User(raw_user.login, raw_user.name, raw_user.avatar_url,raw_user.url))

    
    setOrganisations(
      raw_organisations.map(
        (org: any) =>
          new Organisation(org.login, org.description, org.avatar_url, org.url)
      )
    );
  };

  return (
    <div className="App">
      {error && (<>{error}</>)}
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        update={update} />
      
      <Result repositories={repositories} organisations={organisations} user={user}/>
    </div>
  );
}

export default App;
