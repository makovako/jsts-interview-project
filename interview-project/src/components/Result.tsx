import React, { FunctionComponent } from "react";
import OrganisationList from "./OrganisationList";
import RepositoryList from "./RepositoryList";
import Organisation from "../types/Organisation";
import Repository from "../types/Repository";

const Result: FunctionComponent<{organisations: Organisation[], repositories: Repository[]}> = ({organisations, repositories}) => {
    console.log(repositories);
    
  return (
    <div className="results">
      <h1>Results</h1>
      <div className="panes">
          {console.log(repositories)
          }
          <RepositoryList repositories={repositories} />
          <OrganisationList organisations={organisations}/>
      </div>
    </div>
  );
};

export default Result;
