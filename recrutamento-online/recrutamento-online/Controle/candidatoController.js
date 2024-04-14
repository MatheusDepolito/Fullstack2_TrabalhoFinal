import Candidato from '../Modelo/candidatoModel.js'; 

export default class CandidatoController {
  static async criarCandidato(req, res) {
    const { cpf, nome, endereco, telefone } = req.body;
    try {
      await Candidato.criarCandidato(cpf, nome, endereco, telefone);
      res.status(201).json({ message: 'Candidato criado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar candidato', error: error.message });
    }
  }

  static async listarCandidatos(req, res) {
    try {
      const candidatos = await Candidato.listarCandidatos();
      
      if (candidatos.length === 0) {
        return res.status(404).json({ message: 'Nenhum candidato encontrado' });
      }

      res.status(200).json({ candidatos });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao listar candidatos', error: error.message });
    }
  }

  static async atualizarCandidato(req, res) {
    const { cpf } = req.params;
    const { nome, endereco, telefone } = req.body;
    try {
      await Candidato.atualizarCandidato(cpf, nome, endereco, telefone);
      res.status(200).json({ message: 'Candidato atualizado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar candidato', error: error.message });
    }
  }

  static async excluirCandidato(req, res) {
    const { cpf } = req.params;
    try {
      await Candidato.excluirCandidato(cpf);
      res.status(200).json({ message: 'Candidato excluído com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao excluir candidato', error: error.message });
    }
  }
}
