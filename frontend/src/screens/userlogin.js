import React,{useState,useDispatch} from "react";
export default function Login(){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    // login(dispatch, { username, password });
  };

  return (
    <div
      style={{  
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    }}
    >
        <h1 style={{align:'center'}}>login</h1>
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClick} style={{ padding: 10, width:100 }}>
        Login
      </button>
    </div>
  );
};
