import "./App.css";
import { useState } from "react";

function App() {
  const [isVaild, setIsVaild] = useState("Enter password");
  let handleSubmit = (e) => {
    e.preventDefault();
    e.target[1].value == e.target[2].value
      ? setIsVaild("Vaild")
      : setIsVaild("Passwords do not match");
  };
  return (
    <div className="App">
      <h1>Sign Up</h1>

      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder={"Email"} />
        <input type="password" placeholder={"password"} />
        <input type="password" placeholder={"confirm password"} />
        <input className="submitBtn" type="submit" />
      </form>
      <h3>{isVaild}</h3>
    </div>
  );
}

export default App;
