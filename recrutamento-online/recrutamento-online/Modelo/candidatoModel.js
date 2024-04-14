import CandidatoDAO from "../Persistencia/candidatoDAO.js";

export default class Candidato {
  constructor(cpf, nome, endereco, telefone) {
    this.cpf = cpf;
    this.nome = nome;
    this.endereco = endereco;
    this.telefone = telefone;
  }

  static async criarCandidato(cpf, nome, endereco, telefone) {
    try {
      await CandidatoDAO.criarCandidato(cpf, nome, endereco, telefone);
    } catch (error) {
      throw new Error('Erro ao criar candidato: ' + error.message);
    }
  }

  static async listarCandidatos() {
    try {
      return await CandidatoDAO.listarCandidatos();
    } catch (error) {
      throw new Error('Erro ao listar candidatos: ' + error.message);
    }
  }

  static async atualizarCandidato(cpf, nome, endereco, telefone) {
    try {
      await CandidatoDAO.atualizarCandidato(cpf, nome, endereco, telefone);
    } catch (error) {
      throw new Error('Erro ao atualizar candidato: ' + error.message);
    }
  }

  static async excluirCandidato(cpf) {
    try {
      await CandidatoDAO.excluirCandidato(cpf);
    } catch (error) {
      throw new Error('Erro ao excluir candidato: ' + error.message);
    }
  }
}
