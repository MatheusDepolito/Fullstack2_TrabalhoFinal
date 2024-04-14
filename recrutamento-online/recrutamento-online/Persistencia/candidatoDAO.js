import conectar from './conexao.js';

export default class CandidatoDAO {
  static async criarCandidato(cpf, nome, endereco, telefone) {
    const connection = await conectar();
    try {
      const [result] = await connection.query('INSERT INTO Candidato (cand_cpf, cand_nome, cand_endereco, cand_telefone) VALUES (?, ?, ?, ?)', [cpf, nome, endereco, telefone]);
      return result;
    } catch (error) {
      throw error;
    } finally {
      connection.release();
    }
  }

  static async listarCandidatos() {
    const connection = await conectar();
    try {
      const [rows] = await connection.query('SELECT * FROM Candidato');
      return rows;
    } catch (error) {
      throw error;
    } finally {
      connection.release();
    }
  }

  static async atualizarCandidato(cpf, nome, endereco, telefone) {
    const connection = await conectar();
    try {
      const [result] = await connection.query('UPDATE Candidato SET cand_nome = ?, cand_endereco = ?, cand_telefone = ? WHERE cand_cpf = ?', [nome, endereco, telefone, cpf]);
      return result;
    } catch (error) {
      throw error;
    } finally {
      connection.release();
    }
  }

  static async excluirCandidato(cpf) {
    const connection = await conectar();
    try {
      const [result] = await connection.query('DELETE FROM Candidato WHERE cand_cpf = ?', [cpf]);
      return result;
    } catch (error) {
      throw error;
    } finally {
      connection.release();
    }
  }
}