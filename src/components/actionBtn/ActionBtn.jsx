import React from 'react';

function ActionBtn({ handleGame, gameIsOver, startBtn }) {
  let customClass = startBtn ? startBtn : ""
  let btnContent = startBtn
      ? "Começar o Quiz"
      : gameIsOver
      ? "Novo jogo"
      : "Verificar respostas";

  return <div className={`action-btn ${customClass}`}  onClick={handleGame}>{btnContent}</div>;
}

export default ActionBtn;
