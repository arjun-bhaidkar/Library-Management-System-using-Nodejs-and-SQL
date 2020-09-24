exports.addBookPage = (req, res) => {
    res.render('add-book.ejs',{title: 'Add book'});
};

exports.addBook = (req, res) => {

    let Name = req.body.Name;
    let Author = req.body.Author;
    let Price = req.body.Price;

    const query = "INSERT INTO books (Name,Author,Price) VALUES ('"+Name+"','"+Author+"','"+Price+"')";

    database.query(query,  (err, result) => {
        if(err){
            res.redirect('/');
        }

        res.redirect('/');
    });
};