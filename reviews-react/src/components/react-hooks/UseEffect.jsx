import React, { useEffect, useState } from "react";
function UseEffect() {
  const [state, setState] = useState("null"); //Khởi tạo một useState
  // với state và phương thứ setState

  useEffect(() => {
    //useEffect sẽ thực hiện render lại component
    //nếu như biến được đặt trong [] thay đổi
    console.log(state);
  }, [state]); // có nếu truyền vào tham số thì sẽ render lại
  // theo sự thay đổi của tham số còn nếu không
  // thì nó sẽ chỉ chạy 1 lần khi component render lần đầu
  return (
    <div>
      <h1>My state :{state}</h1>
      <button onClick={() => setState("success")}>Success</button>
      <button onClick={() => setState("warning")}>Warning</button>
      <button onClick={() => setState("error")}>error</button>
    </div>
  );
}

export default UseEffect;
