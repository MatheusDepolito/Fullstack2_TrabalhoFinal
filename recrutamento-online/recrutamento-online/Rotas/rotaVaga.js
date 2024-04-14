import express from 'express';
const router = express.Router();
import VagaController from '../Controle/vagaController.js';

router.post('/', VagaController.criarVaga);
router.get('/', VagaController.listarVagas);
router.put('/:id', VagaController.atualizarVaga);
router.delete('/:id', VagaController.excluirVaga);

export default router; 