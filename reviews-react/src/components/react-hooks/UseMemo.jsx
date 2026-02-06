import React, { useMemo, useState } from "react";

function UseMemo() {
  const [count, setCount] = useState(0); //khởi tạo count và setCount

  function expensiveSum(num) {
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  }

  const sumExpensive = useMemo(() => expensiveSum(count), [count]);
  // sử dụng useMemo để thực hiện tính toán
  // useMemo ghi nhớ kết quả của hàm expensiveSum
  // Hàm này chỉ được chạy lại khi count thay đổi
  // nếu component render lại vì lý do khác thì
  // sẽ dùng lại giá trị đã ghi nhớ.

  return (
    <div>
      <h3>Count:{count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h3>Expensive Calculation:{sumExpensive}</h3>
    </div>
  );
}

export default UseMemo;
