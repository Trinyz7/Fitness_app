const pool = require('../db')

class Users{
    static async getAllUsers(){
        const result = await pool.query('SELECT * FROM users');
        return result.rows
    }
}