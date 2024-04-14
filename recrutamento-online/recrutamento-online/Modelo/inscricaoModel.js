import InscricaoDAO from "../Persistencia/inscricaoDAO.js";

export default class Inscricao {
  constructor(candidato_id, vaga_id, data_inscricao, horario_inscricao) {
    this.candidato_id = candidato_id;
    this.vaga_id = vaga_id;
    this.data_inscricao = data_inscricao;
    this.horario_inscricao = horario_inscricao;
  }

  static async criarInscricao(candidato_id, vaga_id, data_inscricao, horario_inscricao) {
    try {
      await InscricaoDAO.criarInscricao(candidato_id, vaga_id, data_inscricao, horario_inscricao);
    } catch (error) {
      throw new Error('Erro ao criar inscrição: ' + error.message);
    }
  }
  static async verificarInscricaoExistente(candidato_id, vaga_id) {
    try {
      return await InscricaoDAO.verificarInscricaoExistente(candidato_id, vaga_id);
    } catch (error) {
      throw new Error('Erro ao listar inscrições: ' + error.message);
    }
  }  
  static async listarInscricoes() {
    try {
      return await InscricaoDAO.listarInscricoes();
    } catch (error) {
      throw new Error('Erro ao listar inscrições: ' + error.message);
    }
  }
  static async listarInscricoesCandidato(candidato) {
    try {
      return await InscricaoDAO.listarInscricoesCandidatos(candidato);
    } catch (error) {
      throw new Error('Erro ao listar inscrições: ' + error.message);
    }
  }
  static async atualizarInscricao(id, candidato_id, vaga_id, data_inscricao, horario_inscricao) {
    try {
      await InscricaoDAO.atualizarInscricao(id, candidato_id, vaga_id, data_inscricao, horario_inscricao);
    } catch (error) {
      throw new Error('Erro ao atualizar inscrição: ' + error.message);
    }
  }

  static async excluirInscricao(id) {
    try {
      await InscricaoDAO.excluirInscricao(id);
    } catch (error) {
      throw new Error('Erro ao excluir inscrição: ' + error.message);
    }
  }
}
