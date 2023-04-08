const ReadingList = require('../src/ReadingList');
const Book = require('../src/Book');

// Given that I visit the site, when I first start, I expect my list to be empty.
// test('I expect my list to be empty',()=>{
//     //Arrange
//     const list = 0;

//     readingObject = new ReadingList();

//     //Act
//     const okayList = readingObject.numberRead();

//     // Assert
//     expect(list).toBe(okayList);
// })


//Given that I have an empty list, when I add the first book to my list then I expect numberRead to return 1.
test('I expect numberRead to return 1',()=>{
    const list = 1;

    bookObject = new Book('The Hobbit', 'J.R.R. Tolkein', 320, 1937);
    readingObject = new ReadingList();

    readingObject.addBook(bookObject, 'January 1, 2020', 5);

    const okayList = readingObject.numberRead();

     // Assert
     expect(list).toBe(okayList);
})

//Given that I have an empty list, when I add additional books to the list I expect the numberRead to return the total number of books in my list.
test('I expect numberRead to return same when added same',()=>{
    const list = 4;

    bookObject1 = new Book('The Hobbit', 'J.R.R. Tolkein', 320, 1937);
    bookObject2 = new Book('The History', 'J.R.R. Tolkein', 320, 1937);
    bookObject3 = new Book('The Science', 'J.R.R. Tolkein', 320, 1937);
    bookObject4 = new Book('The Math', 'J.R.R. Tolkein', 320, 1937);

    readingObject = new ReadingList();

    readingObject.addBook(bookObject1, 'January 1, 2020', 5);
    readingObject.addBook(bookObject2, 'January 2, 2020', 4);
    readingObject.addBook(bookObject3, 'January 3, 2020', 3);
    readingObject.addBook(bookObject4, 'January 4, 2020', 4);

    const okayList = readingObject.numberRead();

     // Assert
     expect(list).toBe(okayList);
})
