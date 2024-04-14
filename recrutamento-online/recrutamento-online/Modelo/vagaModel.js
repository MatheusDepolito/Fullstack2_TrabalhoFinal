import VagaDAO from "../Persistencia/vagaDAO.js";

export default class Vaga {
  constructor(cargo, salario, cidade, quantidade) {
    this.cargo = cargo;
    this.salario = salario;
    this.cidade = cidade;
    this.quantidade = quantidade;
  }

  static async criarVaga(cargo, salario, cidade, quantidade) {
    try {
      await VagaDAO.criarVaga(cargo, salario, cidade, quantidade);
    } catch (error) {
      throw new Error('Erro ao criar vaga: ' + error.message);
    }
  }

  static async listarVagas() {
    try {
      return await VagaDAO.listarVagas();
    } catch (error) {
      throw new Error('Erro ao listar vagas: ' + error.message);
    }
  }

  static async atualizarVaga(id, cargo, salario, cidade, quantidade) {
    try {
      await VagaDAO.atualizarVaga(id, cargo, salario, cidade, quantidade);
    } catch (error) {
      throw new Error('Erro ao atualizar vaga: ' + error.message);
    }
  }

  static async excluirVaga(id) {
    try {
      await VagaDAO.excluirVaga(id);
    } catch (error) {
      throw new Error('Erro ao excluir vaga: ' + error.message);
    }
  }
}