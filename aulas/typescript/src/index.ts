import express from 'express';

const app = express();

app.get("/", (req, res) => {
    return res.json({messager: "Hello, world"});
});

app.listen(3333);