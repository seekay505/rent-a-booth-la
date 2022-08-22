const express = require('express');
const app = express();
const path = require('path');

const PORT =  process.env.PORT || 3000;

// serve static assets like style sheets and images within the public folder
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});