import React, {FunctionComponent} from 'react'
import Organisation from '../types/Organisation';
import OrganisationItem from './OrganisationItem';

const OrganisationList:FunctionComponent<{organisations: Organisation[]}> = ({organisations}) => {
    return (
        <div className="organisationList">
            <h1>Organisations</h1>
            {organisations.map((org: Organisation) =>
            <OrganisationItem key={org.login} organisation={org}/>
            )}

        </div>
    )

}

export default OrganisationList;