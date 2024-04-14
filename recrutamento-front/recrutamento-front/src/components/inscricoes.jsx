import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { fetchInscricoes } from '../services/api';
import { useParams } from 'react-router-dom'; // Importe o hook useParams

function Inscricoes() {
  const { cpf } = useParams(); // Obtendo o CPF da URL  
  const [inscricoes, setInscricoes] = useState([]);

  useEffect(() => {    
    fetchInscricoes(cpf).then(data => {
      setInscricoes(data);
    }).catch(error => {
      console.error('Erro ao buscar inscrições:', error);
    });
  }, [cpf]); // Adicione cpf como dependência para reexecutar o efeito quando a URL muda

  return (
    <Container>
      <h1>Inscrições de {inscricoes.length > 0 && inscricoes[0].cand_nome}</h1> {/* Verifique se há inscrições e, em seguida, pegue o nome do candidato da primeira inscrição */}

    <Row>
    <Col>
        <ListGroup>
        {inscricoes.map(inscricao => (
            <ListGroup.Item key={inscricao.vaga_id}>
            <strong>Candidato:</strong> {inscricao.cand_nome} {/* Mostra o nome do candidato da inscrição */}
            <br />
            <strong>Vaga:</strong> {inscricao.vaga_cargo}
            </ListGroup.Item>
        ))}
        </ListGroup>
    </Col>
    </Row>

    </Container>
  );
}

export default Inscricoes;
