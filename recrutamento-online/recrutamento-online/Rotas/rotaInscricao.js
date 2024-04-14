import express from 'express';
const router = express.Router();
import InscricaoController from '../Controle/inscricaoController.js';


router.post('/', InscricaoController.criarInscricao);
router.get('/candidato/:id', InscricaoController.listarInscricoesCandidato);
router.get('/', InscricaoController.listarInscricoes);
router.put('/:id', InscricaoController.atualizarInscricao);
router.delete('/:id', InscricaoController.excluirInscricao);

export default router;