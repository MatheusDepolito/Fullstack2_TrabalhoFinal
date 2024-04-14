import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, InputGroup, Button, ListGroup } from 'react-bootstrap';
import { fetchCandidates } from '../services/api';
import { Link } from 'react-router-dom'; // Importar Link do react-router-dom

function Tela() {
  const [searchTerm, setSearchTerm] = useState('');
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  useEffect(() => {
    fetchCandidates().then(data => {
      setCandidates(data);
    }).catch(error => {
      console.error('Erro ao buscar candidatos:', error);
    });
  }, []);

  const filterCandidatesByName = () => {
    return candidates.filter(candidate => candidate.cand_nome.toLowerCase().includes(searchTerm.toLowerCase()));
  };

  const handleCandidateSelection = (candidate) => {
    setSelectedCandidate(candidate);
  };

  return (
    <Container>
      <h1>Candidatura a Vagas</h1>
      
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Buscar Candidato:</Form.Label>
            <InputGroup>
              <Form.Control 
                type="text" 
                placeholder="Digite o nome do candidato..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2>Candidatos</h2>
          <ListGroup>
            {filterCandidatesByName().map(candidate => (
              <ListGroup.Item 
                key={candidate.cand_cpf} 
                action 
                onClick={() => handleCandidateSelection(candidate)}
                active={selectedCandidate && selectedCandidate.cand_cpf === candidate.cand_cpf}
              >
                {candidate.cand_nome}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>

      {selectedCandidate && (
        <Row className="mt-3">
          <Col>
            {/* Use o componente Link para navegar para a próxima tela, passando o usuário selecionado como parâmetro */}
            <Link to={`/escolha-vagas/${selectedCandidate.cand_cpf}`} state={{ selectedCandidate }}>
               <Button variant="primary">Próximo - {selectedCandidate.cand_nome}</Button>
            </Link>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Tela;
