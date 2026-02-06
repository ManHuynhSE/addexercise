import React, { useRef } from "react";

function UseRef() {
  const inputRef = useRef(null); // khởi tạo inputRef bằng useRef
  //useRef tạo ra một object có thuộc tính .current dùng để lưu trữ
  // một giá trị và giá trị này KHÔNG làm component render lại khi thay đổi
  const focus = () => {
    inputRef.current.focus(); // lấy inputRef hiện tại và thực hiện focus
  };
  return (
    <div>
      <input ref={inputRef} type="text" name="" id="" />{" "}
      {/* khai báo thuộc tính ref của input là inputRef */}
      <h3></h3>
      <button onClick={focus}>Click here to focus input</button>
    </div>
  );
}

export default UseRef;
