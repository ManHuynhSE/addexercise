import React, { useCallback, useState } from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child re-render");
  return <button onClick={onClick}>Click me</button>;
});
//child component

function UseCallback() {
  const [count, setCount] = useState(0);

  // sử dụng useCallback để ghi nhớ function handleClick
  // để hàm này không cần tạo lại mỗi khi render conponet mà chỉ khi cần thiết
  const handleClick = useCallback(() => {
    console.log("clicked");
  }, []);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <Child onClick={handleClick} />
      {/* như ở đây child component sẽ không bị 
      render lại khi mà component cha bị render */}
    </>
  );
}

export default UseCallback;
