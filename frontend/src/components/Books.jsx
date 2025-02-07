import { lazy, useState } from "react"

const BooksItem=lazy(()=>(import('./BookCard.jsx')))
const Books = () => {
  const [books,setBooks]=useState([])
  return (
    <div>
      <center>
        <h2>Books Library</h2>

        {}
        </center>
    </div>
  )
}

export default Books
