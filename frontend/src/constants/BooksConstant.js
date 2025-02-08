
import im1 from "../assets/images/BooksImgaes/b1.jpg"
import im2 from "../assets/images/BooksImgaes/b2.jpg"
import im3 from "../assets/images/BooksImgaes/b3.jpeg"
import im4 from "../assets/images/BooksImgaes/b4.jpg"

export const booksList = [
  {
    id: 1,
    cover: im1,
    title: "Effective Java",
    author: "Joshua Bloch",
    description: "A comprehensive guide to Java programming.",
    isbn: "978-0134685991",
    copies: 5,
    categories: ["Programming", "Java"]
  },
  {
    id: 2,
    cover: im2,
    title: "Clean Code",
    author: "Robert C. Martin",
    description: "A handbook of agile software craftsmanship.",
    isbn: "978-0132350884",
    copies: 3,
    categories: ["Programming", "Software Engineering"]
  },
  {
    id: 3,
    cover: im3,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt, David Thomas",
    description: "Your journey to mastery, pragmatic advice for programmers.",
    isbn: "978-0201616224",
    copies: 4,
    categories: ["Software Development", "Best Practices"]
  },
  {
    id: 4,
    cover: im4,
    title: "Design Patterns",
    author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
    description: "Elements of reusable object-oriented software.",
    isbn: "978-0201633610",
    copies: 2,
    categories: ["Software Architecture", "OOP"]
  }
];
