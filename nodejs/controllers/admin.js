import pool from '../database/keys';

const admin = {};

admin.addFactory = async (req, res) =>{
    const { id, f_name, m_date, f_date, w_count, s_member } = req.body;
    try {
        await pool.query('INSERT INTO f_list (id_f, f_name, m_date, f_date, w_count, s_member) VALUES ($1, $2, $3, $4, $5, $6)', [id, f_name, m_date, f_date, w_count, s_member]);
        const f_list = await (await pool.query('SELECT * FROM f_list ORDER BY id_f DESC LIMIT 1')).rows[0];
        res.status(200).json({
            message: 'Succesfully added factory',
            f_list:  { id, f_name, m_date, f_date, w_count, s_member }
        })
    } catch (error) {
        res.status(500).json({
            mesage: 'An error has occured',
            error
        })
    }
}

module.exports = admin;