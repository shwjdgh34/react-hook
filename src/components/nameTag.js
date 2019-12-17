import React from 'react';

function NameTag(props) {
  return (
    <div className="name">
      {props.editable ? (
        <input
          onKeyPress={e => props.onKeyPress(e, props.index)}
          defaultValue={props.info.name}
        ></input>
      ) : (
        <h3 onDoubleClick={props.onDoubleClick}>{props.info.name}</h3>
      )}

      <h3>{props.info.country}</h3>
      <button name={props.info.name} onClick={props.onClick}>
        remove
      </button>
      {props.name === 'nono' && <div style={{ color: 'red' }}>vip</div>}
    </div>
  );
}

export default NameTag;
