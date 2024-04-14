import Vaga from '../Modelo/vagaModel.js'; 

export default class VagaController {
  static async criarVaga(req, res) {
    const { vaga_cargo, vaga_salario, vaga_cidade, vaga_quantidade } = req.body;
    try {
      await Vaga.criarVaga(vaga_cargo, vaga_salario, vaga_cidade, vaga_quantidade);
      res.status(201).json({ message: 'Vaga criada com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar vaga', error: error.message });
    }
  }

  static async listarVagas(req, res) {
    try {
      const vagas = await Vaga.listarVagas();
      res.status(200).json({ vagas });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao listar vagas', error: error.message });
    }
  }

  static async atualizarVaga(req, res) {
    const { id } = req.params;
    const { vaga_cargo, vaga_salario, vaga_cidade, vaga_quantidade } = req.body;
    try {
      await Vaga.atualizarVaga(id, vaga_cargo, vaga_salario, vaga_cidade, vaga_quantidade);
      res.status(200).json({ message: 'Vaga atualizada com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar vaga', error: error.message });
    }
  }

  static async excluirVaga(req, res) {
    const { id } = req.params;
    try {
      await Vaga.excluirVaga(id);
      res.status(200).json({ message: 'Vaga excluída com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao excluir vaga', error: error.message });
    }
  }
}