function shelfBook (book, shelf) {
  if (shelf.length === 3) {
    return shelf
  } else {
    shelf.unshift(book)
  }
}

// function shelfBook (book, shelf) {
//   shelf.unshift(book);
//   return shelf
// }

function unshelfBook (titleStr, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (titleStr === shelf[i].title) {
      shelf.splice(i, 1)
    }
  }
}

function listTitles (shelf) {
  var listOfTitles = "";
  for (var i = 0; i < shelf.length; i++) {
    listOfTitles += shelf[i].title;
    if (i < shelf.length - 1) {
      listOfTitles += ', '
    }
  }
  return listOfTitles
}

function searchShelf (shelf, bookTitle) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookTitle) {
      return true
    }
  }
  // Why is it that when I put my 'return false' iside of an 'else'
  // statement; my function defaults to 'return false'?
  return false
}


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};