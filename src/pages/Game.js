import React, { Component } from 'react';
import { connect } from 'react-redux';

class Game extends Component {
  render() {
    return (
      <div>
        Tela de jogo: Pergunta e respostas e botão de próxima pergunta
      </div>
    );
  }
}

export default connect(null, null)(Game);