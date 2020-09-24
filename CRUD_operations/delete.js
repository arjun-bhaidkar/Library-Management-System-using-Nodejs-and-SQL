exports.deleteBook = (req, res) => {
    const query = 'DELETE FROM books WHERE Id = "'+req.params.Id+'"';

    //execute query
    database.query(query, (err, result) => {
        if(err){
            res.status(500).send(err);
        }

        res.redirect('/');
    });
};
exports.deleteAllBook = (req, res) => {
    const query = 'TRUNCATE TABLE books';

    //execute query
    database.query(query, (err, result) => {
        if(err){
            res.status(500).send(err);
        }

        res.redirect('/');
    });
};