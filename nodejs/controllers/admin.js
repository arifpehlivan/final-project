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

admin.readFactoryList = async (req, res) => {
    const id = req.params.id_f;
    try {
        const f_list = await (await pool.query('SELECT * FROM f_list WHERE id_f=$1', [id])).rows[0];
        res.status(200).json({f_list});
    } catch (error) {
        res.status(500).json({
            message: 'An error has ocurred',
            error
        })
    }
}

admin.updateFactoryList = async (req, res)=>{
    const id = req.params.id_f;
    const {f_name, m_date, f_date, w_count, s_member} = req.body;
    try {
        await pool.query('UPDATE f_list SET f_name= $1, m_date=$2, f_date=$3, w_count=$4, s_member=$5  WHERE id_f=$6', [f_name, m_date, f_date, w_count, s_member, id]);
        res.status(200).json({
            message: 'Successful edited factory list',
            f_list: {f_name, m_date, f_date, w_count, s_member}
        })
    } catch (error) {
        res.status(500).json({
            message: 'An error has ocurred',
            error
        })
    }
}

admin.deleteFactory = async (req, res) => {
    const id = req.params.id_f;
    try {
        await pool.query('DELETE FROM f_list WHERE id_f=$1', [id]);
        res.status(200).json({
            message: 'Successful deleted factory'
        })
    } catch (error) {
        res.status(500).json({
            message: 'An error has ocurred',
            error
        })
    }
}

module.exports = admin;