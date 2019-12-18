import React, { useState, useEffect } from 'react';

const initGit = {
  login: null,
  public_repos: null,
  followers: null
};
function MyGit() {
  const [gitInfo, setGitInfo] = useState(initGit);
  const [userID, setUserID] = useState('');
  const getUserIdHandle = e => {
    setUserID(e.target.value);
  };
  const fetchHandle = async () => {
    const data = await fetch(`https://api.github.com/users/${userID}`);
    const { login, public_repos, followers } = await data.json();
    const newGitInFo = { login, public_repos, followers };
    console.log(newGitInFo);
    setGitInfo(newGitInFo);
  };
  const keyPressHandle = e => {
    if (e.key === 'Enter') fetchHandle();
  };
  return (
    <>
      <h1>useEffect, Fetch</h1>
      <h2>userID: {gitInfo.login}</h2>{' '}
      <h2>public_repos: {gitInfo.public_repos}</h2>
      <h2> followers: {gitInfo.followers}</h2>
      <span>write git uer ID</span>
      <input
        type="text"
        value={userID}
        name="nono"
        onChange={getUserIdHandle}
        onKeyPress={keyPressHandle}
      ></input>
      <button className="fetch-button" onClick={fetchHandle}>
        fetch
      </button>
    </>
  );
}

export default MyGit;
