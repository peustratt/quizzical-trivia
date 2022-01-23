import React from 'react';

function ActionBtn({ handleGame, gameIsOver }) {
  return <div className='action-btn' onClick={handleGame}>{gameIsOver ? 'Novo jogo' : "Verificar respostas"}</div>;
}

export default ActionBtn;
