import React from 'react';
import './Content.css'

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

const Dados = ({ conteudo, bloco, status }) => {
  return (
    <div className="Bloco">
      <h3>O conteúdo é: {conteudo}</h3>
      <h3>Status: {bloco}</h3>
      <h3>Bloco: {status}</h3>
    </div>
  )
}

class Content extends React.Component {
  render() {
    return (
      conteudos.map((conteudo) => Dados(conteudo))
    );
  }
}

export default Content;