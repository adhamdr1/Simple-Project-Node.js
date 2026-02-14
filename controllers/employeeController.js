const db = require('../db');

// Get all employees
const getEmployees = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM employees');
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server Error" });
    }
};

// Post Create new employee





module.exports = {
    getEmployees
};