import React, { FunctionComponent } from "react";
import Repository from "../types/Repository";

const RepositoryList: FunctionComponent<{
  repositories: Repository[];
}> = ({repositories}) => {

  return (
      <div className="repositoryList">
          <h1>Repository List:</h1>
          {repositories.map(
              repo => (
                  <p>{repo.name}</p>
              )
          )}

      </div>
      
  )
};

export default RepositoryList;
