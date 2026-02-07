import React, { useEffect, useState } from "react";
import axios from "axios";
function Axios() {
  const [data, setData] = useState([]);
  const dataSend = {
    name: "New do",
  };
  async function getData() {
    try {
      const response = await axios.get(
        "https://6985995f6964f10bf253c856.mockapi.io/data",
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  async function postData() {
    try {
      const response = await axios.post(
        "https://6985995f6964f10bf253c856.mockapi.io/data",

        dataSend,
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  async function putData() {
    try {
      const response = await axios.put(
        "https://6985995f6964f10bf253c856.mockapi.io/data/3",

        dataSend,
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  async function deleteData() {
    try {
      const response = await axios.delete(
        "https://6985995f6964f10bf253c856.mockapi.io/data/3",
      );
      return response.data;
    } catch (error) {
      console.error(error);
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

export default Axios;
