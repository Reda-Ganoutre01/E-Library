// import "../styles/Auth.css";

import logo from '../styles/logo/book_logo.png';
const Auth = () => {

  const handelSubmit=(e)=>{
    e.preventDefault()
  }
  return (
    <div className="container">
      <form className="form-control w-50 flex bg-light mx-auto p-4" style={{marginTop:100}}>

        <div className="row w-50  mx-auto">
        <center><img src={logo}id="image" style={{width:100}}/></center>

        </div>
<div className="row w-50 mx-auto p-1">
<label>Email:</label>
<input type="email" className="form-control " placeholder="Enter your email" />
</div>
       <div className="row w-50  mx-auto p-1">
         <label>Password:</label>
        <input type="password" className="form-control " placeholder="Enter your password" />

       </div>
       
       <div className="row w-25 mx-auto p-1">
         <select className="form-select" style={{fontSize:15}}>
          <option disabled selected>Role</option>
          <option>Admin</option>
          <option>User</option>
        </select>
       </div>
       


<div className="row w-50 mx-auto p-1">
   <button  className="btn btn-primary" onClick={handelSubmit}>Log In</button>
</div>
       
      </form>
    </div>
  );
};

export default Auth;
