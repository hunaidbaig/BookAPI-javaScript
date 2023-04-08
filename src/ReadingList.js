
class ReadingList {
    constructor() {
        this.bookList = []
    }

    addBook(book, dateRead, rating) {
        let rate = "";
        for (let index = 0; index < rating; index++) {
            rate += "*";
        }

        this.bookList.push(`${book.title} by ${book.author}, ${book.pages} pages, ${book.publishYear} read on ${dateRead}, ${rate}`)
    }

    removeBook(title){
        const indexNumber = this.bookList.forEach((element, index) => {
        if(element.includes(title)){
            return index;
        }
        })
      this.bookList.splice(indexNumber, 1);
    }

    numberRead() {
        return this.bookList.length;
    }
}



module.exports = ReadingList;

