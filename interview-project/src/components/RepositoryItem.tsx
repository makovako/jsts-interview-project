import React, { FunctionComponent } from 'react'
import Repository from '../types/Repository';

const RepositoryItem:FunctionComponent<{repository: Repository}> = ({repository}) => {
    return (
        <div>

            <h1>RepositoryItem</h1>
            {repository.name}
        </div>
    )
            
    
}

export default RepositoryItem;