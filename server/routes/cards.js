import express from 'express';
import routes from 'controllers/cards';

const router = express.Router();

router.get('/', (req, res) => { res.json(routes.getCards); });

module.exports = router;
