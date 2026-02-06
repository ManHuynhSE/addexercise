import React, { useEffect, useState } from "react";

function UseState() {
  const [count, setCount] = useState(0); // khởi tạo một useState mới bao
  // gồm count và phương thứ setCount

  return (
    //
    <div>
      <h4>Number of click {count}</h4>
      <button onClick={() => setCount((pre) => pre + 1)}>clicked</button>{" "}
      {/* mỗi lần nhất nút clicked thì sẽ tăng biến count lên một bằng setCount, 
      mỗi lần biến count thay đổi sẽ thực hiện render lại toàn bộ component từ 
      đó làm tăng lên số đếm*/}
    </div>
  );
}

export default UseState;
