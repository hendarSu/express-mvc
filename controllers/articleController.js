const { Article } = require("../models");

const articleController = {
    index: async (req, res) => {
        const articles = await Article.findAll();
        res.render("article", { articles });
    },
    store: async (req, res) => {
        try {
            const { title, author, content } = req.body;
            const article = await Article.create({
                title, author, content
            });

            res.redirect("/");
        } catch (error) {
            res.status(400).json({
                message : error.message,
                status: false
            });
        }
    }
}

module.exports = articleController ;