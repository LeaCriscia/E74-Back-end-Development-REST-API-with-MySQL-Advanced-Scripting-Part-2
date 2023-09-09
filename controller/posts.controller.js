const pool = require("../database/index")
const postsController = {

    getAll: async (req, res) => {
        try {
            const [rows, fields] = await pool.query("select * from sql10")
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
        }
    },
    update: async (req, res) => {
        try {
            const { DEPT_CODE, DEPT_NAME } = req.body
            const { EMP_NUM } =req.params
            const sql = "update professorv1 set DEPT_CODE = ?, DEPT_NAME = ? where EMP_NUM = ?"
            const [rows, fields] = await pool.query(sql, [DEPT_CODE, DEPT_NAME, EMP_NUM])
            res.json({
                data:rows
            })
            } catch (error) {
                console.log(error)
                res.json({
                    status: "error"
                })
        }
    },
    delete: async (req, res) => {
        try {
            const {DateHired} = req.params
            const [rows, fields] = await pool.query("delete from sql10 where DateHired = ?", [DateHired])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    }
}

module.exports = postsController