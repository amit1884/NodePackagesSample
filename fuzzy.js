var FuzzySearch=require('fuzzy-search');

const people = [{
    name: {
      firstName: 'Amit',
      lastName: 'Raj',
    },
    state: 'Seattle',
  }];
   const row=[
    {
    book_id: 100,
    book_name: "Operating Sysytem",
    book_author: "Galvin",
    book_edition: "3",
    book_publication: "Pearson",
    book_department: "CSE",
    book_course: "Btech",
    book_qty: 10
    },
    {
    book_id: 101,
    book_name: "Theory Of Computation",
    book_author: "Rajeev Motwani",
    book_edition: "5",
    book_publication: "Pearson",
    book_department: "CSE",
    book_course: "Btech",
    book_qty: 15
    },]
  const searcher = new FuzzySearch(row, ['book_author','book_name'], {
    caseSensitive: false,
  });
  const result = searcher.search('operating');
  console.log(result);