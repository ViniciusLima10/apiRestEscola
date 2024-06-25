import { Router } from 'express';

import photoController from '../controller/PhotoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, photoController.store);

export default router;
