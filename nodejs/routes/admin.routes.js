import express from 'express';
import admin from '../controllers/admin';

const router = express.Router();

router.post('/addfactory', admin.addFactory);

module.exports = router;
