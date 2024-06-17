const Blog = require('../models/Blog');

const createBlog = async (title, content, author) => {
    const blog = new Blog({ title, content, author });
    await blog.save();
    return blog;
};

const getAllBlogs = async () => {
    return await Blog.find().populate('author', 'email');
};

const getBlogById = async (id) => {
    return await Blog.findById(id).populate('author', 'email');
};

module.exports = { createBlog, getAllBlogs, getBlogById };
