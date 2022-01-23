import React from 'react';

function ActionBtn({ handleGame }) {
  return <div className='action-btn' onClick={handleGame}>Jogar</div>;
}

export default ActionBtn;
