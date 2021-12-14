import express from 'express';
import edit from '../controllers/edit';

const router = express.Router();

router.get('/factorylist', edit.readFactoryList);

router.put('/factorylist/:id_f', edit.updateFactoryList);

router.post('/factories', edit.getFactoryList);

module.exports = router;