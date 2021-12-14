import express from 'express';
import admin from '../controllers/admin';

const router = express.Router();

router.post('/addfactory', admin.addFactory);

router.get('/factorylist/:id_f', admin.readFactoryList);

module.exports = router;
