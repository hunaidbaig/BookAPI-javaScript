// Given that I visit the site, when I first start, I expect my list to be empty.
('I expect my list to be empty',()=>{
    //Arrange
    const list = 0;

    ReadingList readingObject = new ReadingList();

    //Act
    const okayList = readingObject.numberRead();

    // Assert
    expect(list).toBe(okayList);
})
