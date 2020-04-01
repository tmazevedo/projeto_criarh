"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/', (req, res) => {
    // Reply with a hello world when no name param is provided
    res.send('Hello, World!');
});
router.get('/:name', (req, res) => {
    // Extract the name from the request parameters
    let { name } = req.params;
    // Greet the given name
    res.send(`Hello, ${name}`);
});
// Export the express.Router() instance
exports.WelcomeController = router;
