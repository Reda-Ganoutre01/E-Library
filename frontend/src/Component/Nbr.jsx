import { useSelector } from "react-redux"

function Nbr() {
  const n=useSelector(e=>e.n)
  return (
    <div>
      <center>{n}</center>
    </div>
  )
}

export default Nbr
