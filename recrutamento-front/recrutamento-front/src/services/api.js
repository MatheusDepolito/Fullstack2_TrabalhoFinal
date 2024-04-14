export const fetchCandidates = async () => {
  try {
    const response = await fetch('http://localhost:4000/candidatos'); 
    if (!response.ok) {
      throw new Error('Erro ao buscar candidatos');
    }
    const data = await response.json();
    return data.candidatos || []; 
  } catch (error) {
    console.error('Erro:', error);
    return [];
  }
};
export const fetchJobs = async () => {
  try {
    const response = await fetch('http://localhost:4000/vagas'); 
    if (!response.ok) {
      throw new Error('Erro ao buscar vagas');
    }
    const data = await response.json();
    return data.vagas || []; 
  } catch (error) {
    console.error('Erro:', error);
    return [];
  }
};
export const postInscricao = async (inscricao) => {
  try {
    const response = await fetch('http://localhost:4000/inscricoes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inscricao)
    });
    if (!response.ok) {
      throw new Error('Erro ao enviar inscrição');
    }
    console.log('Inscrição enviada com sucesso:', inscricao);
  } catch (error) {
    console.error('Erro ao enviar inscrição:', error);
    throw error;
  }
};
export const fetchInscricoes = async (cpf) => {
  try {
    const response = await fetch(`http://localhost:4000/inscricoes/candidato/${cpf}`);
    if (!response.ok) {
      throw new Error('Erro ao buscar inscrições');
    }
    const data = await response.json();
    return data.inscricoes || [];
  } catch (error) {
    console.error('Erro:', error);
    return [];
  }
};
