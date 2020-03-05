import React, { FunctionComponent } from "react";
import OrganisationList from "./OrganisationList";
import RepositoryList from "./RepositoryList";
import Organisation from "../types/Organisation";
import Repository from "../types/Repository";
import User from "../types/User";

const Result: FunctionComponent<{
  organisations: Organisation[];
  repositories: Repository[];
  user: User | undefined;
}> = ({ organisations, repositories, user }) => {
  return (
    <div className="results">
      <h1>Results</h1>
      <div className="panes">
        {user && <p>{user.login}</p>}
        <RepositoryList repositories={repositories} />
        <OrganisationList organisations={organisations} />
      </div>
    </div>
  );
};

export default Result;
