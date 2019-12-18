# React-Hooks

# TOC

## Get started

```sh
npx create-react-app react-hook
npm start
npm install node-sass
```

## useEffect

- Use <b>useEffect()</b> instead of componentDidMount(), componentDidUpdate() and componentWillUnmount()
- if you wanna use shouldComponentUpdate(), take <b>useMemo()</b>.

```javascript
useEffect(() => {}); // excuted at every mount.
useEffect(() => {}, []); // excuted only at initial mount.
useEffect(() => {}, [anyState]); // excuted when 'anyState' has been changed.
```

### Growth

```javascript
useEffect(() => {
  if (nonoTitle) {
    document.title = 'nonononono';
    console.log('set nono title');
  }
}, [nonoTitle]);
useEffect(() => {
  console.log('first mount');
}, []);
useEffect(() => {
  console.log('learning and growing');
  if (growth > 70) {
    setNonoTitle(true);
  }
}, [growth]);
const growthHandle = () => {
  setGrowth(growth + 10);
  // 여기에 해당 if문을 작성하면, setGrowth(growth + 10); 이 문장이 바로 적용 안된 상태에서 growth를 판별하기 때문에 원하는 결과를 얻을 수 없다.
  // if (growth > 70) setNonoTitle(true);
};
```

> ❗️️Caution❗️ hanler 함수에서 setGrowth(growth + 10)를 하더라도 아직 반영되지 않는 상태이므로 해당 함수 내에서 growth는 아직 update되지 않는 상태이다. 하지만, useEffect()는 update('render')된 이후에 실행되기 때문에 이곳에서 원하는 작업을 수행하면 될 것이다. 자주 일어나는 실수!!

### Clock

[reactjs.org/cleaning-up-an-effect](https://reactjs.org/docs/hooks-reference.html#cleaning-up-an-effect)

```javascript
const [time, setTime] = useState(Date);
const [xy, setXY] = useState(initXY);
// 3가지 방법 다 가능한데, 내생각에 이 방법이 제일 안전한 것 같다.
// 만약 3번째 방법에서 return 으로 clearInterval()을 해주지 않으면 setInterval API가 굉장히 많이 호출되는 문제가 생긴다.
//3 번째 방법이 best practice인 듯 싶다.
useEffect(() => {
  setInterval(() => {
    setTime(Date);
  }, 1000);
}, []);

setInterval(() => {
  setTime(Date);
}, 1000);

useEffect(() => {
  const intervalHandle = setInterval(() => {
    setTime(Date);
  }, 1000);
  return () => {
    clearInterval(intervalHandle);
  };
});

const mousemoveHandle = e => {
  setXY({
    x: e.clientX,
    y: e.clientY
  });
};
useEffect(() => {
  console.log('tick');
});
// if dont add second arg, [], component update될때마다 window.addEventListener()를 새로 실행시켜서 굉장히 많이 실행된다.
// 한번만 실행해놔도 listen을 하고 있기 때문에 처음 component가 mount될 때만 실행시켜 줘야 한다.
useEffect(() => {
  window.addEventListener('mousemove', mousemoveHandle);
}, []);
// 위의 코드 대신 아래 코드로 대체 가능하다.
useEffect(() => {
  window.addEventListener('mousemove', mousemoveHandle);
  return () => {
    window.removeEventListener('mousemove', mousemoveHandle);
  };
});
```

### MyGit

- fetch

```javascript
const fetchHandler = async () => {
  const data = await fetch(`https://api.github.com/users/${userID}`);
  const { login, public_repos, followers } = await data.json();
  const newGitInFo = { login, public_repos, followers };
  console.log(newGitInFo);
  setGitInfo(newGitInFo);
};
```

- EventListener('keypress')

```js
useEffect(() => {
  window.addEventListener('keypress', keyPressHandler);
  return () => {
    window.removeEventListener('keypress', keyPressHandler);
  };
});
```
