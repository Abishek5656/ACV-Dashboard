import { Router } from 'express';

const router = Router();

import { getAllAccounts } from '../controllers/Account.js';

router.route("/all").get(getAllAccounts)

export default router