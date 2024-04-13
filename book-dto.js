class issuedBook {
    _id;
    name;
    genre;
    price;
    publisher;
    issuedBy;
    issuedDate;
    returnDate;

    constructor(user){
        this._id = user.issuedbook._id;
        this.name = user.issuedbook.name;
        this.genre = user.issuedbook.genre;
        this.price = user.issuedbook.price;
        this.publisher = user.issuedbook.publisher;
        this.issuedBy = user.name;
        this.issuedDate = user.issuedDate;
        this.returnDate = user.returnDate;

        module.exports = issuedBook;
    }
}