import Dahboardview from "./Dahboardview"
import Main from "./Main"
import Slidebar from "./Slidebar"

const AppAdmin = () => {
  return (
    <>
      <div className="flex">
        <div className="basis-[12%] h-[100vh] border">
          <Slidebar/>
        </div>
        <div className="basis-[88%] border">
          <Dahboardview/>
          <div className="">
            <Main/>
          </div>
        </div>
      </div>
    </>
  )
}

export default AppAdmin
