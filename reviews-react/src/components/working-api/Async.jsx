import React, { useEffect, useState } from "react";

function Async() {
  const [data, setData] = useState([]);
  const dataSend = {
    name: "New dog",
  };
  async function getData() {
    try {
      const result = await fetch(
        "https://6985995f6964f10bf253c856.mockapi.io/data",
      );
      const jsonData = await result.json();
      setData(jsonData);
    } catch (err) {
      console.log(err);
    }
  }
  async function postData() {
    try {
      const result = await fetch(
        "https://6985995f6964f10bf253c856.mockapi.io/data",
        {
          method: "POST",
          body: JSON.stringify(dataSend),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const jsonData = await result.json();
      return jsonData;
    } catch (err) {
      console.log(err);
    }
  }
  async function putData() {
    try {
      const result = await fetch(
        "https://6985995f6964f10bf253c856.mockapi.io/data/3",
        {
          method: "PUT",
          body: JSON.stringify(dataSend),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const jsonData = await result.json();
      return jsonData;
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteData() {
    try {
      const result = await fetch(
        "https://6985995f6964f10bf253c856.mockapi.io/data/3",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const jsonData = await result.json();
      return jsonData;
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h3>Data:</h3>
      <ul>
        {data.length === 0 && <p>Loading...</p>}
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <h3></h3>
      <button onClick={() => postData()}>Post a new data</button>
      <h3></h3>
      <button onClick={() => putData()}>Put data</button>
      <h3></h3>
      <button onClick={() => deleteData()}>Delete data</button>
    </div>
  );
}

export default Async;
