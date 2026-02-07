import React, { useEffect, useState } from "react";

function Fetch() {
  const [result, setResult] = useState([]);
  const dataSend = {
    name: "New dog",
  };
  useEffect(() => {
    fetch("https://6985995f6964f10bf253c856.mockapi.io/data")
      .then((res) => res.json())
      .then(setResult);
  }, []);

  function post() {
    fetch("https://6985995f6964f10bf253c856.mockapi.io/data", {
      method: "POST",
      body: JSON.stringify(dataSend),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  function put() {
    fetch("https://6985995f6964f10bf253c856.mockapi.io/data/1", {
      method: "PUT",
      body: JSON.stringify(dataSend),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  function deleteData() {
    fetch("https://6985995f6964f10bf253c856.mockapi.io/data/1", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return (
    <div>
      <h3>Data:</h3>
      <ul>
        {result.length === 0 && <p>Loading...</p>}
        {result.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <h3></h3>
      <button onClick={() => post()}>Post a new data</button>
      <h3></h3>
      <button onClick={() => put()}>Put data</button>
      <h3></h3>
      <button onClick={() => deleteData()}>Delete data</button>
    </div>
  );
}

export default Fetch;
