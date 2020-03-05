import React, { FunctionComponent } from 'react'
import Organisation from '../types/Organisation';

const OrganisationItem: FunctionComponent<{organisation: Organisation}> = ({organisation}) => {
    return (
        <div>

            <h1>OrganisationItem</h1>
            {organisation.login}
        </div>

    )
}

export default OrganisationItem;