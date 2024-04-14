import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap';
import { postInscricao } from '../services/api';
import { fetchJobs } from '../services/api';
import { useParams } from 'react-router-dom'; // Importe o hook useParams
import { Link } from 'react-router-dom';
function EscolhaVagas() {
  const { cpf } = useParams(); // Pegando o CPF do candidato da URL

  const [selectedCandidate, setSelectedCandidate] = useState(null); // Alterado para useState
  const [jobs, setJobs] = useState([]);
  const [selectedJobs, setSelectedJobs] = useState([]);

  useEffect(() => {
    // Use a função fetchCandidates aqui se precisar buscar o candidato com base no CPF
    // Por enquanto, estou apenas definindo o candidato como null
    setSelectedCandidate({ cand_cpf: cpf }); // Definindo o candidato com base no CPF da URL

    fetchJobs().then(data => {
      setJobs(data);
    }).catch(error => {
      console.error('Erro ao buscar vagas:', error);
    });
  }, [cpf]); // Adicione cpf como uma dependência para reexecutar o efeito quando a URL muda

  const handleJobSelection = (job) => {
    if (!selectedJobs.find(selectedJob => selectedJob.vaga_id === job.vaga_id)) {
      setSelectedJobs([...selectedJobs, job]);
    } else {
      alert('Você já se inscreveu para esta vaga.');
    }
  };

  const enviarInscricoes = async () => {
    try {
      for (const job of selectedJobs) {
        const inscricao = {
          candidato_id: selectedCandidate.cand_cpf,
          vaga_id: job.vaga_id,
          data_inscricao: new Date().toISOString().split('T')[0],
          horario_inscricao: new Date().toLocaleTimeString('en-US', { hour12: false })
        };
        await postInscricao(inscricao);
      }
      alert('Inscrições enviadas com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar inscrições:', error);
      alert('Erro ao enviar inscrições. Verifique o console para mais detalhes.');
    }
  };

  return (
    <Container>
      <h1>Escolha de Vagas</h1>
      
      <Row>
        <Col>
          <h2>Vagas Disponíveis</h2>
          <ListGroup>
            {jobs.map(job => (
              <ListGroup.Item key={job.vaga_id} action onClick={() => handleJobSelection(job)}>
                {job.vaga_cargo}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col>
          <h2>Vagas Selecionadas</h2>
          <ListGroup>
            {selectedJobs.map(job => (
              <ListGroup.Item key={job.vaga_id}>{job.vaga_cargo}</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col>
        <Link to={`/inscricoes/${selectedCandidate && selectedCandidate.cand_cpf}`}>
    <Button variant="secondary">Ver Inscrições - {selectedCandidate && selectedCandidate.cand_cpf}</Button>
</Link>
          <Button variant="primary" onClick={enviarInscricoes}>Enviar Inscrição</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default EscolhaVagas;
