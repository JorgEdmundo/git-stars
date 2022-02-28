import React, { useEffect, useState } from 'react';

import { getLastWeekRepos } from '../../Helpers/common';
import RepoList from '../../components/Molecules/RepoList/RepoList';
import Filter from '../../components/Molecules/Filter/Filter';

import { filterByLanguage } from '../../Helpers/common';

function Repositories() {
  const [repositories, setRepositories] = useState([]);
  const [filteredRepositories, setFilteredRepositories] =
    useState(repositories);
  const [inputFilter, setInputFilter] = useState('');

  useEffect(() => {
    getLastWeekRepos().then((data) => {
      setRepositories(data.items);
      setFilteredRepositories(data.items);
    });
  }, []);

  useEffect(() => {
    const filtered = filterByLanguage(repositories, inputFilter);
    setFilteredRepositories(filtered);
  }, [inputFilter]);

  return (
    <div className="repositories">
      <h2>Repository List</h2>
      <Filter
        handleInputChange={(e) => setInputFilter(e.target.value)}
        inputFilter={inputFilter}
      />
      {filteredRepositories.length ? (
        <RepoList repositories={filteredRepositories} hasAction />
      ) : (
        <p className="no-results">No Repositories</p>
      )}
    </div>
  );
}

export default Repositories;
