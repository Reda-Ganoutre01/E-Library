import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <div>
      <div className="nav d-flex">
        <ul className="d-flex mx-4 list-style-none">
            <li className="mx-4 text-decoration-none"><Link to={'/'}>Home</Link></li>
            <li className="mx-4 text-decoration-none"><Link to={'/layout'}>Layout</Link></li>
            <li className="mx-4 text-decoration-none"><Link to={'/nbr'}>Nbr</Link></li>
        </ul>
      </div>
    </div>
  )
}

