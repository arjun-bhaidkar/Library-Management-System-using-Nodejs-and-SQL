exports.viewBooks = (req, res) => {
    const query = 'SELECT * FROM books';

    //execute query
    database.query(query, (err, result) => {
        if(err){
            res.redirect('/');
        }

        res.render('index.ejs', {
            title: 'Libray Manangement System',
            books: result
        });
    });
};