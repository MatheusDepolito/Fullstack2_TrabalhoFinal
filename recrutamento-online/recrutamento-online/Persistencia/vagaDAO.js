import conectar from './conexao.js';

export default class VagaDAO {
  static async criarVaga(cargo, salario, cidade, quantidade) {
    const connection = await conectar();
    try {
      const [result] = await connection.query('INSERT INTO Vaga (vaga_cargo, vaga_salario, vaga_cidade, vaga_quantidade) VALUES (?, ?, ?, ?)', [cargo, salario, cidade, quantidade]);
      return result;
    } catch (error) {
      throw error;
    } finally {
      connection.release();
    }
  }

  static async listarVagas() {
    const connection = await conectar();
    try {
      const [rows] = await connection.query('SELECT * FROM Vaga');
      return rows;
    } catch (error) {
      throw error;
    } finally {
      connection.release();
    }
  }

  static async atualizarVaga(id, cargo, salario, cidade, quantidade) {
    const connection = await conectar();
    try {
      const [result] = await connection.query('UPDATE Vaga SET vaga_cargo = ?, vaga_salario = ?, vaga_cidade = ?, vaga_quantidade = ? WHERE vaga_id = ?', [cargo, salario, cidade, quantidade, id]);
      return result;
    } catch (error) {
      throw error;
    } finally {
      connection.release();
    }
  }

  static async excluirVaga(id) {
    const connection = await conectar();
    try {
      const [result] = await connection.query('DELETE FROM Vaga WHERE vaga_id = ?', [id]);
      return result;
    } catch (error) {
      throw error;
    } finally {
      connection.release();
    }
  }
}