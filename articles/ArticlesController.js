const express = require("express");
const router = express.Router();

router.get("/articles", (req, res) => {
    res.send("ROTA DE ARTIGO");
});

router.get("/admin/articles/new", (req, res) => {
    res.send("ROTA PARA CRIAR UMA NOVA ARTIGO");
});

module.exports = router;