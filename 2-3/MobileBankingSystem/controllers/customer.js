const express = require('express');
const router = express.Router();
const {
    customers,
    getAllCustomers,
    getCustomer,
    createCustomer,
} = require('../models/customer');

router.get("/customers", (req, res) => {
    try {
        const customers = getAllCustomers();
        res.status(200).json({customers});
    } catch(e) {
        //For example we'll always use code 500 (Internal Server Error)
        res.status(500).json({error: e.message})
    }
});

router.get("/customer/:id", (req, res) => {
    const { params } = req;
    const { id } = params;
    try {
        const customer = getCustomer(id);
        res.status(200).json({customer});
    } catch(e) {
        //For example we'll always use code 500 (Internal Server Error)
        res.status(500).json({error: e.message})
    }
});

router.post("/customer", (req, res) => {
    try {
        const { name, email, balance } = req.body;
        if(!name || !email || !balance) {
            throw new Error("Insufficient Parameter")
        }
        const costumer = createCustomer(name, email, balance);
        customers.push(costumer);
        res.status(201).json({message: "Customer created successfully"})
    } catch (e) {
        res.status(500).json({error: e.message})
    }
});

module.exports = router;
