import { Router } from 'express';

const router = Router();

import { getAllAcvs } from '../controllers/Acv.js';

router.route("/all").get(getAllAcvs)

export default router