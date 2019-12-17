import React, { useState, useEffect } from 'react';

const initXY = {
  x: null,
  y: null
};
function Clock() {
  const [time, setTime] = useState(Date);
  const [xy, setXY] = useState(initXY);
  // 3가지 방법 다 가능한데, 내생각에 이 방법이 제일 안전한 것 같다.
  // 만약 3번째 방법에서 return 으로 clearInterval()을 해주지 않으면 setInterval API가 굉장히 많이 호출되는 문제가 생긴다.
  useEffect(() => {
    setInterval(() => {
      setTime(Date);
    }, 1000);
  }, []);
  //   setInterval(() => {
  //     setTime(Date);
  //   }, 1000);
  //   useEffect(() => {
  //     const intervalHandle = setInterval(() => {
  //       setTime(Date);
  //     }, 1000);
  //     return () => {
  //       clearInterval(intervalHandle);
  //     };
  //   });
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
  // 위의 코드 대신 아래 코드로 대체 가능하다. 하지만 return 부분부터 잘 이해가 되지 않는다.
  //   useEffect(() => {
  //     window.addEventListener('mousemove', mousemoveHandle);
  //     return () => {
  //       window.removeEventListener('mousemove', mousemoveHandle);
  //     };
  //   });

  return (
    <>
      <h1>useEffect, Clock</h1>
      <h2>{time}</h2>
      <h2>{`x : ${xy.x} y:${xy.y}`}</h2>
    </>
  );
}

export default Clock;
