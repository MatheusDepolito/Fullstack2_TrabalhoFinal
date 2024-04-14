import { Router } from "express";
import CandidatoController from '../Controle/candidatoController.js';

const router = Router();

router.post('/', CandidatoController.criarCandidato);
router.get('/', CandidatoController.listarCandidatos);
router.put('/:cpf', CandidatoController.atualizarCandidato);
router.delete('/:cpf', CandidatoController.excluirCandidato);

export default router;
