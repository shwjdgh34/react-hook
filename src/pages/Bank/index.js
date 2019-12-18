import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
function Bank() {
  const balance = useSelector(state => state.balance);
  const dispatch = useDispatch();
  const [money, setMoney] = useState('');
  const depositHandle = () => {
    const newMoney = Number(money);
    if (newMoney) dispatch({ type: 'DEPOSIT', payload: newMoney });
    else alert('❗️INPUT NUMBER ❗️');
  };
  const withdrawHandle = () => {
    const newMoney = Number(money);
    if (newMoney) dispatch({ type: 'WITHDRAW', payload: newMoney });
    else alert('❗️INPUT NUMBER ❗️');
  };
  useEffect(() => {
    console.log(typeof money);
    console.log(money);
  });
  return (
    <div>
      <h3>balance:{balance} </h3>
      <input
        type="text"
        value={money}
        onChange={e => {
          setMoney(e.target.value);
        }}
      ></input>
      <button onClick={depositHandle}>DEPOSIT</button>
      <button onClick={withdrawHandle}>WITHDRAW</button>
    </div>
  );
}

export default Bank;
