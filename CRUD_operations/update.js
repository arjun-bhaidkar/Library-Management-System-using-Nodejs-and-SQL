exports.editBookPage = (req, res) => {
    const query = 'SELECT * FROM books WHERE ID = "'+req.params.Id+'"';

    //execute query
    database.query(query, (err, result) => {
        if(err){
            res.redirect('/');
        }

        res.render('edit-book.ejs', {
            title: 'Edit book',
            books: result[0]
        });
    });
};

exports.editBook = (req, res) => {
    let Name = req.body.Name;
    let Author = req.body.Author;
    let Price = req.body.Price;

    const query = 'UPDATE books SET Name="'+Name+'",Author="'+Author+'",Price="'+Price+'" WHERE Id="'+req.params.Id+'"';

    database.query(query,  (err, result) => {
        if(err){
            res.redirect('/');
        }

        res.redirect('/');
    });
};