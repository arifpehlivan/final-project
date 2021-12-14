import pool from '../database/keys';

const edit = {};

edit.readFactoryList = async (req, res) => {
    try {
        const f_list = await (await pool.query('SELECT * FROM f_list ')).rows[0];
        res.status(200).json(f_list);
    } catch (error) {
        res.status(500).json({
            message: 'An error has ocurred',
            error
        })
    }
}

edit.updateFactoryList = async (req, res)=>{
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



edit.getFactoryList = async (req, res) => {
    try {
        const f_list = await (await pool.query('SELECT * FROM f_list ')).rows;
        res.status(200).json(f_list);
    } catch (error) {
        res.status(500).json({
            message: 'An error has ocurred',
            error
        })
    }
}

module.exports = edit;