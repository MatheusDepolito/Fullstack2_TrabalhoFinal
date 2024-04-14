import Inscricao from '../Modelo/inscricaoModel.js'; 

export default class InscricaoController {
  static async criarInscricao(req, res) {
    const { candidato_id, vaga_id, data_inscricao, horario_inscricao } = req.body;
    try {
      // Verifica se já existe uma inscrição para o mesmo candidato e vaga
      const inscricaoExistente = await Inscricao.verificarInscricaoExistente(candidato_id, vaga_id);
      if (inscricaoExistente) {
        return res.status(400).json({ message: 'Já existe uma inscrição para este candidato nesta vaga' });
      }
  
      // Se não houver uma inscrição existente, cri a nova inscrição
      await Inscricao.criarInscricao(candidato_id, vaga_id, data_inscricao, horario_inscricao);
      return res.status(201).json({ message: 'Inscrição criada com sucesso' });
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao criar inscrição', error: error.message });
    }
  }
  

  static async listarInscricoes(req, res) {
    try {
      const inscricoes = await Inscricao.listarInscricoes();
      res.status(200).json({ inscricoes });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao listar inscrições', error: error.message });
    }
  }
  static async listarInscricoesCandidato(req, res) {
    try {
      const { id } = req.params;
      const inscricoes = await Inscricao.listarInscricoesCandidato(id);
      res.status(200).json({ inscricoes });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao listar inscrições', error: error.message });
    }
  }

  static async atualizarInscricao(req, res) {
    const { id } = req.params;
    const { candidato_id, vaga_id, data_inscricao, horario_inscricao } = req.body;
    try {
      await Inscricao.atualizarInscricao(id, candidato_id, vaga_id, data_inscricao, horario_inscricao);
      res.status(200).json({ message: 'Inscrição atualizada com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar inscrição', error: error.message });
    }
  }

  static async excluirInscricao(req, res) {
    const { id } = req.params;
    try {
      await Inscricao.excluirInscricao(id);
      res.status(200).json({ message: 'Inscrição excluída com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao excluir inscrição', error: error.message });
    }
  }
}

