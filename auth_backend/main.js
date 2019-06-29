const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    /*
     * Implement your authentication mechanism
     * - Validate a JWT token
     * - Check cookies / headers
     */
    const isLoggedIn = req.header('X-Juddling');
    res.sendStatus(isLoggedIn ? 200 : 403);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});