const commentPost = async (req, res) => {
    const { username, text } = req.body;
    const articleName = req.params.name;
}

module.exports = { commentPost };