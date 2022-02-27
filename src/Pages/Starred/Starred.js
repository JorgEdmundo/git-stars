import React from 'react';

import { useLocalStorage } from '../../Hooks/useLocalStorage';

function Starred() {
  const [starredRepos] = useLocalStorage('starred');
  return (
    <div>
      <p>Starred data</p>
    </div>
  );
}

export default Starred;
