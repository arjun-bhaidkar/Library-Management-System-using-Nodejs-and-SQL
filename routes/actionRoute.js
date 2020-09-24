const express = require('express');

const router = express.Router();

const deleteBooks = require('../CRUD_operations/delete');
const addBooks = require('../CRUD_operations/create');
const editBook = require('../CRUD_operations/update')
const viewBooks = require('../CRUD_operations/read');

router.get('/', viewBooks.viewBooks );
router.get('/books/delete/:Id', deleteBooks.deleteBook );
router.get('/books/delete', deleteBooks.deleteAllBook );
router.get('/books/add', addBooks.addBookPage );
router.get('/books/edit/:Id', editBook.editBookPage );

router.post('/books/add',addBooks.addBook)
router.post('/books/edit/:Id', editBook.editBook );

module.exports = router;