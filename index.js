// index.js - Created by Risk Rule Engine Generator
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health check endpoint
app.get('/', (req, res) => {
    res.json({
        message: 'Hello from the Risk Rule Engine!',
        status: 'active',
        timestamp: new Date().toISOString()
    });
});

// API endpoint
app.get('/api/status', (req, res) => {
    res.json({
        service: 'Risk Rule Engine',
        version: '1.0.0',
        uptime: process.uptime(),
        environment: process.env.NODE_ENV || 'development'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT} to see the status`);
});

module.exports = app;
