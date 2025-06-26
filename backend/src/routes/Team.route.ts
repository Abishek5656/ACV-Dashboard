import { Router } from 'express';

const router = Router();

import { getAllTeamMembers } from '../controllers/Team.js';

router.route("/all").get(getAllTeamMembers)


export default router