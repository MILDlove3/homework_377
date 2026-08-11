
const express = require('express');
const app = express();
const port = 3000;
app.use('/', express.static('www'));
app.listen(port, () => {
    console.log(`Server is running at http://portfolio-002.localhost:${port}`);
    console.log("kanokwan kongpeng");
});
