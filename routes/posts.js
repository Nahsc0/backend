// import express from 'express';
// import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';

const express = require('express')
const {getPost, getPosts, createPost, updatePost, likePost, deletePost} = require('../controllers/posts')


const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

module.exports = router;