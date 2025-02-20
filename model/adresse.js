const pool = require('../db');

class Address {
    static async getAddressByUserId(userId) {
        const result = await pool.query('SELECT * FROM address WHERE user_id = $1', [userId]);
        return result.rows;
    }
}

module.exports = Address;
