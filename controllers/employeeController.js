import { query } from '../db.js';

// Get all employees
export const getEmployees = async (req, res) => {
    try {
        const result = await query('SELECT * FROM employees');
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server Error" });
    }
};

// Post Create new employee
export const createEmployee = async (req, res) => {
    try {
        const { name, email, position, salary, department_id } = req.body;

        const sqlText = `
            INSERT INTO employees (name, email, position, salary, department_id)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
        `;
        
        const values = [name, email, position, salary, department_id];

        const result = await query(sqlText, values);

        res.status(201).json(result.rows[0]);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server Error" });
    }
};


// delete employee
export const deleteEmployee = async (req, res) => {
    try { 
        const { id } = req.params;
        const sqlText = 'DELETE FROM employees WHERE id = $1 RETURNING *';
        const values = [id];
        const result = await query(sqlText, values);

        if (result.rowCount === 0) {
            return res.status(404).json({ error: "Employee not found" });
        }

        res.status(200).json({ 
            message: "Employee deleted successfully", 
            deletedEmployee: result.rows[0] 
        });
        
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server Error" });        
    }
};