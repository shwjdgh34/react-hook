import React, { useState, useEffect } from 'react';

function LifeCycle() {
  const [growth, setGrowth] = useState(0);
  const [nonoTitle, setNonoTitle] = useState(false);

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

  return (
    <>
      <h1>useEffect</h1>
      <h2>Growth : {growth}</h2>
      <button className="grow" onClick={growthHandle}>
        learn and grow
      </button>
    </>
  );
}
export default LifeCycle;
