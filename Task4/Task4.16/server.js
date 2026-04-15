const express = require('express');
const app = express();
app.use(express.json());
let posts = [
    { id: 1, title: "First Post", content: "Hello World", author: "Sai" },
    { id: 2, title: "Second Post", content: "Express Basics", author: "Ram" }
];
app.get('/posts', (req, res) => {
    console.log("Fetching posts");
    res.status(200).json(posts);
});
app.post('/posts', (req, res) => {
    const { title, content, author } = req.body;
    if (!title || !content || !author) {
        return res.status(400).json({ error: "All fields required" });
    }
    const newPost = {
        id: posts.length + 1,
        title,
        content,
        author
    };
    posts.push(newPost);
    console.log("Post created");
    res.status(201).json({
        message: "Post created successfully",
        data: newPost
    });
});
app.put('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, content, author } = req.body;
    const post = posts.find(p => p.id === id);
    if (!post) {
        return res.status(404).json({ error: "Post not found" });
    }
    post.title = title || post.title;
    post.content = content || post.content;
    post.author = author || post.author;
    console.log("Post updated");
    res.json({
        message: "Post updated successfully",
        data: post
    });
});
app.delete('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = posts.findIndex(p => p.id === id);
    if (index === -1) {
        return res.status(404).json({ error: "Post not found" });
    }
    posts.splice(index, 1);
    console.log("Post deleted");
    res.json({ message: "Post deleted successfully" });
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});