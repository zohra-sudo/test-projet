const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Backend temporaire pour l’équipe'));
app.listen(3000, () => console.log('Backend sur port 3000'));