function createLibrary (nameLibrary) {
  var nameLibrary = {
    name: nameLibrary,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  return nameLibrary
}

function addBook (bookPlace, book1) {
  if (book1.genre === 'fantasy') {
    bookPlace.shelves.fantasy.push(book1);
  } else if (book1.genre === 'fiction') {
    bookPlace.shelves.fiction.push(book1);
  } else if (book1.genre === 'nonFiction') {
    bookPlace.shelves.nonFiction.push(book1);
  }
  return bookPlace
}

function checkoutBook (bookPlace2, bookName, bookGenre) {
  // console.log('1 <><', bookPlace2.shelves, '1 <>< END')
  if (bookPlace2.shelves.fantasy.length > 0 && bookName === bookPlace2.shelves.fantasy[0].title && bookGenre === bookPlace2.shelves.fantasy[0].genre) {
    bookPlace2.shelves.fantasy.splice(0, 1);
    // console.log('2 <<><', bookPlace2.shelves, '2 <<>< END');
    return `You have now checked out ${bookName} from the ${bookPlace2.name}.`
  } else if (bookPlace2.shelves.fiction.length > 0 && bookName === bookPlace2.shelves.fiction[0].title && bookGenre === bookPlace2.shelves.fiction[0].genre) {
    bookPlace2.shelves.fiction.splice(0, 1);
    // console.log('3 <<<><', bookPlace2.shelves, '3 <<<>< END');
    return `You have now checked out ${bookName} from the ${bookPlace2.name}.`
  } else if (bookPlace2.shelves.nonFiction.length > 0 && bookName === bookPlace2.shelves.nonFiction[0].title && bookGenre === bookPlace2.shelves.nonFiction[0].genre) {
    bookPlace2.shelves.nonFiction.splice(0, 1);
    return `You have now checked out ${bookName} from the ${bookPlace2.name}.`
  } else {
    return `Sorry, there are currently no copies of ${bookName} available at the ${bookPlace2.name}.`
  }
}

function takeStock (bookPlace3, genre2 = undefined) {
  if (genre2 === undefined) {
  var totalBooks = bookPlace3.shelves.fantasy.length
   + bookPlace3.shelves.fiction.length
   + bookPlace3.shelves.nonFiction.length
  return `There are a total of ${totalBooks} books at the ${bookPlace3.name}.`
  }
  var booksOnShelf = bookPlace3.shelves[genre2].length;
  return `There are a total of ${booksOnShelf} ${genre2} books at the ${bookPlace3.name}.`
}


module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};