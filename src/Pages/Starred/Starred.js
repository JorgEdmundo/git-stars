import React, { useEffect, useState } from 'react';

import Filter from '../../components/Molecules/Filter/Filter';
import RepoList from '../../components/Molecules/RepoList/RepoList';

import { useLocalStorage } from '../../Hooks/useLocalStorage';
import { filterByLanguage } from '../../Helpers/common';

function Starred() {
  const [starredRepos] = useLocalStorage('starred', []);
  const [filteredRepositories, setFilteredRepositories] =
    useState(starredRepos);
  const [inputFilter, setInputFilter] = useState('');

  useEffect(() => {
    const filtered = filterByLanguage(starredRepos, inputFilter);
    setFilteredRepositories(filtered);
  }, [inputFilter]);

  return (
    <div className="starred">
      <h2>Starred Repositories</h2>
      <Filter
        handleInputChange={(e) => setInputFilter(e.target.value)}
        inputFilter={inputFilter}
      />
      {filteredRepositories.length ? (
        <RepoList repositories={filteredRepositories} hasAction={false} />
      ) : (
        <p className="no-results">No Repositories in the list</p>
      )}
    </div>
  );
}

export default Starred;
