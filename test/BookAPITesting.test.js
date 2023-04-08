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