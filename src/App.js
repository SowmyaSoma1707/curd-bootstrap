import {useState} from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
function App() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [address,setAddress]=useState("");
  const [edit,setEdit]=useState(false);
  const [active,setActive]=useState(null);
  const [users,setUsers]=useState([]);
  const addUser=(e)=>{
    e.preventDefault();
    const user={
      name,
      email,
      address
    }
    // setUsers([...users,user]);
    if(edit){
      // updateuser
       let copy=users;
       Object.assign(copy[active],user)
       setUsers([...copy]);
       setEdit(false);
       setActive(null);
    }
    else{
      // add user
      setUsers([...users,user]);
    }
    setName=("")
    setEmail=("")
    setAddress=("")
  }
  const onEditClick=(index)=>{
    const user=users[index];
    setName(user.name);
    setEmail(user.email);
    setAddress(user.address);
    setActive(index);
    setEdit(true);
  }
  const deleteUser=(user)=>{
    if(window.confirm("are you sure youy wnat to delete the item")){
      let copy=users.filter(item=> item!==user);
    setUsers([...copy]);
    }
  }
  return (
    <div className="App">
      <h1> CURD Operations using Bootstrap in React </h1>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xs-12 col-sm-10 col-md-8 col-lg-5">
            <form onSubmit={addUser}>
              <div className="form-group">
                <label htmlFor="">Name</label>
                  <input type="text" className="form-control"
                  value={name} onChange={(e)=>setName(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="">Email</label>
                  <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </div>
              <div className="form-group">
                <label htmlFor="">Address</label>
                  <input type="text" className="form-control" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                  <button className="btn btn-success form-control" >{edit ? "Update" : "Add"} </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <table className="table table-bordered mt-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="container">
          {users.map((user,index)=>{
            return(
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td><button className="btn btn-info" onClick={()=> onEditClick(index)}>edit</button></td>
                <td><button className="btn btn-danger" onClick={()=> deleteUser(user)}>delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;