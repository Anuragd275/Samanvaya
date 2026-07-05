const express = require('express');
const path = require('path');

const router = express.Router();

// Serve static files from 'public' directory
router.use(express.static(path.join(__dirname, '..', 'public')));

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

router.get('/docs', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'docs.html'));
});

router.get('/v1/map/:asin', async (req, res) => {
    const { asin } = req.params;
    const result = await getItemDetails(asin);
    res.json(result);
});

router.get('/v1/health', (req, res) => {
    res.status(200).send({
        "service": "Central Schema Mapper",
        "status": "healthy",
        "timestamp": new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
    });
});

module.exports = router;