
import './App.css';
import {useEffect, useState} from "react";
import axios from 'axios';
import { Api_create_url, Api_get_url } from './url/url';

function App() {
  const [name , setname] = useState("");
  const [email , setemail] = useState("");  
  const [password , setpassword] = useState(""); 

  const [data , setdata] = useState([]);
  useEffect(() => {
    axios.get(Api_get_url)
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },[] );


  let post_data = async()=>{
    await axios.post(Api_create_url,{
      name,
      email,
      password,
    });
    // console.log("hii");
  }

  
  return (
    <>
    <div>
      <form>
        {/* {email} */}
        <label>name:</label>
        <input
        value={name}
         type="text"
        onChange={(e)=>{
          setname(e.target.value);
          console.log(e.target.value);
        }}
        />
        <br/>
        <br/>
        <br/>
        <label>email:</label>
        <input
        value={email}
         type="text"
        onChange={(e)=>{
          setemail(e.target.value);
          console.log(e.target.value);
        }}
        />
        <br/>
        <br/>
        <br/>
        <label>password:</label>
        <input
        value={password}
        type="text"
        onChange={(e)=>{
          setpassword(e.target.value);
          console.log(e.target.value);
        }}
        />

      </form>

      <button onClick={post_data}>Click</button>
    </div>

    <div>
      {data.map((v) =>(
        <>
        <div  key={v._id}>
          {v.name}
        {v.email}
        {v.password}
        </div>
        </>
      ))}
    </div>
    </>
  );
}

export default App;


















