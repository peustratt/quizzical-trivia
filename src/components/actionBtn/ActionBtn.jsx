import React from 'react';

function ActionBtn({ endGame }) {
  return <div className='action-btn' onClick={endGame}>Jogar</div>;
}

export default ActionBtn;
