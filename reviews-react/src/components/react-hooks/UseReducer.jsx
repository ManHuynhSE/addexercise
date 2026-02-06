import React, { useReducer } from "react";

function UseReducer() {
  const initialState = { count: 0 };
  // thiết lập trạng thái ban đầu (khởi tạo object default)
  function reducer(state, action) {
    // function chứa những logic để điều khiển state dựa trên action
    switch (action.type) {
      case "Tang":
        return { count: state.count + 1 };
      case "Giam":
        return { count: state.count - 1 };
      case "LamMoi":
        return { count: 0 };
      default:
        return state;
    }
  }
  const [state, dispactch] = useReducer(reducer, initialState);
  // useReducer sẽ trả về state và dispactch hiện tại
  //useReducer thường dùng cho các state phức tạp
  return (
    <div>
      <h3>Count:{state.count}</h3>
      <button onClick={() => dispactch({ type: "Tang" })}>+</button>
      {/* Khi nhấn nút thì react sẽ gọi reducer, sau đó trả về state
       mới theo type đã truyền vào rồi thực hiện render lại components*/}
      <button onClick={() => dispactch({ type: "Giam" })}>-</button>
      <button onClick={() => dispactch({ type: "LamMoi" })}>Làm mới</button>
    </div>
  );
}

export default UseReducer;
