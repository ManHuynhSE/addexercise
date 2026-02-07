import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import UseState from "./components/react-hooks/UseState";
import UseEffect from "./components/react-hooks/UseEffect";
import UseReducer from "./components/react-hooks/UseReducer";
import UseRef from "./components/react-hooks/UseRef";
import UseMemo from "./components/react-hooks/UseMemo";
import UseCallback from "./components/react-hooks/UseCallback";
import Fetch from "./components/working-api/fetch";
import Async from "./components/working-api/Async";
import Axios from "./components/working-api/Axios";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <h2>useState</h2>
      <UseState></UseState> */}
      {/* <h2>useEffect </h2> */}
      {/* <UseEffect></UseEffect> */}
      {/* <h2>UseReducer</h2>
      <UseReducer></UseReducer> */}
      {/* <h2>UseRef</h2>
      <UseRef></UseRef> */}
      {/* <h2>UseMemo</h2>
      <UseMemo></UseMemo> */}
      {/* <h2>UseCallback</h2>
      <UseCallback></UseCallback> */}

      {/* <Fetch></Fetch> */}
      {/* <Async></Async> */}
      <Axios></Axios>
    </>
  );
}

export default App;
