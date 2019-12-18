import React, { useState, useEffect } from 'react';

const initGit = {
  login: null,
  public_repos: null,
  followers: null
};
function MyGit() {
  const [gitInfo, setGitInfo] = useState(initGit);
  const [userID, setUserID] = useState('');
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const keyPressHandler = e => {
    if (e.key === 'Enter') setUrl(`https://api.github.com/users/${userID}`);
  };

  useEffect(() => {
    const fetchHandler = async () => {
      console.log('first mount');
      setIsLoading(true);
      const data = await fetch(url);
      const { login, public_repos, followers } = await data.json();
      const newGitInFo = { login, public_repos, followers };
      setGitInfo(newGitInFo);
      setIsLoading(false);
    };
    if (url) fetchHandler();
  }, [url]);

  useEffect(() => {
    window.addEventListener('keypress', keyPressHandler);
    return () => {
      window.removeEventListener('keypress', keyPressHandler);
    };
  });

  return (
    <>
      <h1>useEffect, Fetch</h1>

      {isLoading ? (
        <div>fucking loading...</div>
      ) : (
        <div>
          <h2>userID: {gitInfo.login}</h2>{' '}
          <h2>public_repos: {gitInfo.public_repos}</h2>
          <h2> followers: {gitInfo.followers}</h2>
        </div>
      )}

      <span>Write Git User ID</span>
      <input
        type="text"
        value={userID}
        name="nono"
        onChange={e => setUserID(e.target.value)}
        //onKeyPress={keyPressHandler}
      ></input>
      <button
        className="fetch-button"
        onClick={() => setUrl(`https://api.github.com/users/${userID}`)}
      >
        fetch
      </button>
    </>
  );
}

export default MyGit;
