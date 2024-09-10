// Write a javascript program to create an array of objects representing books,
// where each object has a title and author property. Use splice() to remove the
// second book from the array. Print the modified array.
const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "Moby Dick", author: "Herman Melville" }
];

books.splice(1, 1);
console.log("Modified Array of Books:", books);
