const {UserModel, BookModel} = require("../models");

exports.getAllbook = async (req, res) => {
    const books = await BookModel.find();

    if(books.length === 0)
    return res.status(404).json({
success: false,
message: "No book found!"
    })
    return res.status(201).json({
        success: true,
       data: books
            })
};

exports.getSinglebookById = async (req, res)=>{
    const {id} = req.params;
   // const book = books.find((each) => each.id === id );

   const book = await BookModel.findById(id)

    if(!book){
        return res.status(404).json({
            success: false,
           message: "book not found"
        })
    }
    return res.status(200).json({
        success: true,
        data: book
    })
};

exports.getAllIssuedbooks = async (req, res)=>{
    // const userwithissuedbook = users.filter((each)=>{
    //     if(each.issuedbook) return each
    // })
    const user = UserModel.find({
        issuedbook: {$exists: true}
    }).populate("issuedbook")

    // const issuedBooks = [];

    // userwithissuedbook.forEach((each)=>{
    //     const book = books.find((book)=> book.id === each.issuedbook)

    //     book.issuedby = each.name;
    //     book.issuedBook = each.issuedbook;
    //     book.issuedDate = each.issuedate;
    //     book.returnDate = each.returndate;

    //     issuedBooks.push(book);
    // });
const issuedBooks = user.map((each) => new issuedBooks(each))
  

    if(issuedBooks.length === 0)
   return res.status(401).json({
        success: false,
       message: "No Books has been issued yet!"
    });
    return res.status(200).json({
        success: true,
      data: issuedBooks
})
};

exports.addNewBook = async (req, res)=> {
    const {data} = req.body;

if(!data)
return res.status(404).json({
    success: false,
    message: "No data provided"
})

   // const book = books.find((each) => each.id === data.id)

   await BookModel.create(data);

    // if(book)
    //     return res.status(404).json({
    //         success: false,
    //        message: "book with the given id exist!"
    //     })
    
    
    //const allbooks = [...books, data];

    const allBooks = await BookModel.find();

    return res.status(201).json({
        success: true,
        data: allBooks
    })
};

exports.updateBookById = async  (req, res) => {
    const {id} = req.params;
    const {data} = req.body;

   // const book = books.find((each)=> each.id === id);

    // if(!book)
    //     return res.status(404).json({
    //         success: false,
    //        message: "book with given id does not exist"
    //     })

    // const updatedbook = books.map((each)=>{
    //     if(each.id === id){
    //         return{...each,
    //         ...data}
    //     }
    //     return each;
    // })

    const UpdateData = await BookModel.findOneAndUpdate({_id: id}, data, {new: true})

    return res.status(200).json({
        success: true,
        data: UpdateData
    })
}
