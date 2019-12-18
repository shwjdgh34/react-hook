import React, { useState, useEffect } from 'react';

const initGit = {
  login: null,
  public_repos: null,
  followers: null
};
function MyGit() {
  const [gitInfo, setGitInfo] = useState(initGit);
  const [userID, setUserID] = useState('');
  const getUserIdHandler = e => {
    setUserID(e.target.value);
  };
  const fetchHandler = async () => {
    const data = await fetch(`https://api.github.com/users/${userID}`);
    const { login, public_repos, followers } = await data.json();
    const newGitInFo = { login, public_repos, followers };
    console.log(newGitInFo);
    setGitInfo(newGitInFo);
  };
  const keyPressHandler = e => {
    if (e.key === 'Enter') fetchHandler();
  };

  useEffect(() => {
    window.addEventListener('keypress', keyPressHandler);
    return () => {
      window.removeEventListener('keypress', keyPressHandler);
    };
  });

  return (
    <>
      <h1>useEffect, Fetch</h1>
      <h2>userID: {gitInfo.login}</h2>{' '}
      <h2>public_repos: {gitInfo.public_repos}</h2>
      <h2> followers: {gitInfo.followers}</h2>
      <span>Write Git User ID</span>
      <input
        type="text"
        value={userID}
        name="nono"
        onChange={getUserIdHandler}
        //onKeyPress={keyPressHandler}
      ></input>
      <button className="fetch-button" onClick={fetchHandler}>
        fetch
      </button>
    </>
  );
}

export default MyGit;
