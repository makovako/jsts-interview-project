import React, {FunctionComponent} from 'react'

const Search:FunctionComponent<{searchTerm: string, setSearchTerm: Function, update: Function}> = ({searchTerm, setSearchTerm, update}) => {
    return (
        <header>
            <div className="form-group">
                <label>Search term</label>
                <input type="text" onChange={e => setSearchTerm(e.target.value)} value={searchTerm} placeholder="Search ..."/>
            </div>
            
            <div className="btn" onClick={e => update()}>Search</div>
        </header>
    )
}

export default Search;