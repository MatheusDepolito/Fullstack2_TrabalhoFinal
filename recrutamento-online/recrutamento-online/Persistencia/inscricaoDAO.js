import conectar from './conexao.js';

export default class InscricaoDAO {
  static async criarInscricao(candidato_id, vaga_id, data_inscricao, horario_inscricao) {
    const connection = await conectar();
    try {
      const [result] = await connection.query('INSERT INTO Candidato_Vaga (cand_cpf, vaga_id, data_inscricao, horario_inscricao) VALUES (?, ?, ?, ?)', [candidato_id, vaga_id, data_inscricao, horario_inscricao]);
      return result;
    } catch (error) {
      throw error;
    } finally {
      connection.release();
    }
  }
  static async verificarInscricaoExistente(candidato_id, vaga_id) {
    const connection = await conectar(); // Supondo que `conectar` seja uma função que retorna uma conexão com o banco de dados
    try {
      // Query SQL para verificar se já existe uma inscrição para o candidato e vaga especificados
      const query = 'SELECT COUNT(*) AS count FROM Candidato_Vaga WHERE cand_cpf = ? AND vaga_id = ?';
      const [rows] = await connection.query(query, [candidato_id, vaga_id]);
  
      // Se o count for maior que 0, significa que já existe uma inscrição
      return rows[0].count > 0;
    } catch (error) {
      throw error;
    } finally {
      connection.release();
    }
  }
  
  static async listarInscricoes() {
    const connection = await conectar();
    try {
      const [rows] = await connection.query('SELECT * FROM Candidato_Vaga');
      return rows;
    } catch (error) {
      throw error;
    } finally {
      connection.release();
    }
  }
  static async listarInscricoesCandidatos(candidato) {
    const connection = await conectar();
    try {
        const query = `
            SELECT Candidato.cand_cpf, Candidato.cand_nome, Vaga.vaga_id, Vaga.vaga_cargo
            FROM Candidato_Vaga
            JOIN Candidato ON Candidato_Vaga.cand_cpf = Candidato.cand_cpf
            JOIN Vaga ON Candidato_Vaga.vaga_id = Vaga.vaga_id
            WHERE Candidato.cand_cpf = ?
        `;
        const [rows] = await connection.query(query, candidato);
        return rows;
    } catch (error) {
        throw error;
    } finally {
        connection.release();
    }
}

  static async atualizarInscricao(id, candidato_id, vaga_id, data_inscricao, horario_inscricao) {
    const connection = await conectar();
    try {
      const [result] = await connection.query('UPDATE Candidato_Vaga SET cand_cpf = ?, vaga_id = ?, data_inscricao = ?, horario_inscricao = ? WHERE cv_id = ?', [candidato_id, vaga_id, data_inscricao, horario_inscricao, id]);
      return result;
    } catch (error) {
      throw error;
    } finally {
      connection.release();
    }
  }

  static async excluirInscricao(id) {
    const connection = await conectar();
    try {
      const [result] = await connection.query('DELETE FROM Candidato_Vaga WHERE cv_id = ?', [id]);
      return result;
    } catch (error) {
      throw error;
    } finally {
      connection.release();
    }
  }
}

