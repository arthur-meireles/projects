import express from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.json({message: 'Hello Baby'});
})

app.listen(3333);