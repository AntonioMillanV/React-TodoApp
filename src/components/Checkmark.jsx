import React from 'react';

const Checkmark = (props) => {
  return (
    <>
      <input type="checkbox"
          className="ok"
          checked={props.done}
          defaultChecked={props.done}
          onChange={(e) => props.toggleDone(e, props.index)}
      />
    </>
  )
}

export default Checkmark;