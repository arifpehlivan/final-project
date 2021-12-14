import express from 'express';
import pool from '../database/keys';

const authentication = {};

authentication.signUp = async (req, res) =>{
    const { name, email, password , role } = req.body;
    if (role == 'admin') {
        try {
            await pool.query('INSERT INTO ad (a_name, a_email, a_password) VALUES ($1, $2, $3)', [name, email, password]);
            res.status(200).json({
                message: 'Succesful registered admin',
                ad: { name, email, password}
            })
        } catch (error) {
            res.status(500).json({
                message: 'An error has occured',
                error
            });
        }
    } else {
        try {
            await pool.query('INSERT INTO ed (e_name, e_email, e_password) VALUES ($1, $2, $3)', [name, email, password]);
            res.status(200).json({
                message: 'Succesful registered aditor',
                ed: { name, email, password}
            })
        } catch (error) {
            res.status(500).json({
                message: 'An error has occured',
                error
            });
        }
    }
};

authentication.signIn = async (req, res) =>{
    const { email, password , role } = req.body;
    if (role == 'admin') {
        try {
            const admin = await (await pool.query('SELECT * FROM ad WHERE a_email=$1 AND a_password=$2', [email, password])).rows;
            if (admin.length > 0) {
                res.status(200).json({
                id: admin[0].id_a,
                name: admin[0].a_name,
                email: admin[0].a_email,
                role: 'admin'
            })
            } else {
                res.status(200).json({
                    message: 'The admin does not exist',
                    NotFound: true
                });
            }
            
            
        } catch (error) {
            res.status(500).json({
                message: 'An error has occured',
                error
            });
        }
    } else {
        try {
            const editor = await (await pool.query('SELECT * FROM ed WHERE e_email=$1 AND e_password=$2', [email, password])).rows;
            if (editor.length > 0) {
                res.status(200).json({
                id: editor[0].id_e,
                name: editor[0].e_name,
                email: editor[0].e_email,
                role: 'editor'
            })
            } else {
                res.status(200).json({
                    message: 'The editor does not exist',
                    NotFound: true
                });
            }
            
            
        } catch (error) {
            res.status(500).json({
                message: 'An error has occured',
                error
            });
        }
    }
};

module.exports = authentication;