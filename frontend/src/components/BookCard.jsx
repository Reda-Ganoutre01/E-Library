
const BookCard = (props) => {
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <img src={props.img} alt={props.title} />
        </div>

        <div className="card-body">
          <p>{props.title}</p>
          <h3>Categorie:{props.categorie}</h3>

          <center>
            <button className="btn btn-primary">Show More</button>
          </center>
        </div>
      </div>
    </div>
  )
}

export default BookCard
