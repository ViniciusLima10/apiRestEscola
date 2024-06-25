import { Router } from 'express';
import alunoController from '../controller/AlunoController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', alunoController.index);
router.post('/', loginRequired, alunoController.store);

router.get('/:id', alunoController.show);
router.put('/:id', loginRequired, alunoController.update);
router.delete('/:id', loginRequired, alunoController.delete);

export default router;
