

function createTitle(title) {
  return `The ${title}`
}

function buildMainCharacter(charName, charAge, charPronouns) {
  var character = {
    name: charName,
    age: charAge,
    pronouns: charPronouns,
  }
  return character
}

function saveReview (peepsSay, reviewList) {
  if (!reviewList.includes(peepsSay)) {
    reviewList.push(peepsSay);
  }
  return reviewList
}

// function saveReview (peepsSay, reviewList) {
//   var alreadyIn = false;
//   for (i = 0; i < reviewList.length; i++) {
//     if (reviewList[i] === peepsSay) {
//       alreadyIn = true;
//     } 
//   }
//   if (!alreadyIn) {
//     reviewList.push(peepsSay)
//   }
//   return reviewList
// }

// function saveReview(peepsSay, aList) {
//   var reviewExists = false;
//   for (var i = 0; i < aList.length; i++) {
//     if (aList[i] === peepsSay) {
//       reviewExists = true;
//       break
//     }
//   }
//   if (!reviewExists) {
//     aList.push(peepsSay);
//   }
//   return aList;
// }

// function saveReview (peepsSay, aList){
//   for (i = 0; i < aList.length; i++){
//     if (aList[i] === peepsSay){
//       return aList
//     } else {
//       aList.push(peepsSay);
//     }
//   }
//   return aList
// }

// function saveReview (peepsSay, aList){
//   aList.push(peepsSay)
// }

function calculatePageCount (bookName) {
  var pages = bookName.length * 20;
  return pages
}

function writeBook (aboutBook, character, type) {
  var book = {
    title: aboutBook,
    mainCharacter: character,
    pageCount: calculatePageCount(aboutBook),
    genre: type
  }
  return book
}

function editBook (book1) {
  book1.pageCount = book1.pageCount * .75;
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}